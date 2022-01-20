const express = require('express');
const User = require('../models/User');
const router = express.Router();
// ...rest of the initial code omitted for simplicity.
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
var fetchuser = require('../middleware/fetchuser');

const JWT_SECRET= 'ritikisbad@3';


//ROUTE 1: Create a User using: POST "/api/auth/createuser". No login required
router.post('/createuser',
    body('email','enter a valid Name').isEmail(),
    body('name','enter a valid email').isLength({ min: 3 }),
    body('password','password must be atleast 5 characters').isLength({ min: 5 }),
     async (req, res)=>{
    // if there are errores, return Bad request and the errors
   const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
        
    
    // Check whether the email exists already
    let user = await User.findOne({email: req.body.email});
    
    if(user){
        return res.status(404).json({ error :"Sorry a user with this email already exists"});
    }
    const salt= await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password,salt);
    user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
      const data= {
          user: {
              id: user.id
          }
      }
      const authtoken= jwt.sign(data, JWT_SECRET);

    
    // res.json(user)
    res.json({authtoken});
    } catch (error) {
        console.error(error.message);
        res.status(500).end("some error occured");
}
})


//ROUTE 2 Authenticate a User using: POST "/api/auth/login". No login required
router.post('/login',
    body('email','enter a valid Name').isEmail(),
    body('password','Password cannot be blank').exists(),
     async (req, res)=>{
     
     // if there are errores, return Bad request and the errors
   const errors = validationResult(req);
   if (!errors.isEmpty()) {
     return res.status(400).json({ errors: errors.array() });
   }

   const {email, password}= req.body;
   try { 
       let user = await User.findOne({email});
       if(!user){
           return res.status(400).json({error : "Please try to login with correct credentials"});
       }

       const passwordCompare = await bcrypt.compare(password,user.password);
       if(!passwordCompare){
        return res.status(400).json({error : "Please try to login with correct credentials"});
       }
       const data= {
           user: {
               id: user.id
           }
       }
       const authtoken= jwt.sign(data,JWT_SECRET);
       res.json({authtoken});
       
   } catch (error) {
    console.error(error.message);
    res.status(500).end("Internal server error");
   }

    });

    //ROUTE 3: Get loggedin user details using: GET "/api/auth/getuser".login required
    router.post('/getuser', fetchuser, 
     async (req, res)=>{
    try {
        userId = req.user.id;
        const user= await User.findById(userId).select("-password");
        res.send(user);
    } catch (error) {
        console.error(error.message);
        res.status(500).end("Internal server error");
    }

})
module.exports = router