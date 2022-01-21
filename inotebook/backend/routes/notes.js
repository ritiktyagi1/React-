const express = require('express');
var fetchuser = require('../middleware/fetchuser');
const router = express.Router();
const Note = require('../models/Note');
const { body, validationResult } = require('express-validator');

//ROUTE 1: Get all the notes using: GET "/api/notes/getuser". Login required
router.get('/fetchallnotes',fetchuser, async (req, res)=>{

    try {
        
    
    const notes = await Note.find({user: req.user.id});
    res.json(notes);

} catch (error) {
    console.error(error.message);
    res.status(500).end("Internal server error");
}
})

//ROUTE 2: Add a new Note using: POST "/api/notes/addnote". Login required
router.post('/addnotes',fetchuser,[
    body('title','enter a valid Title').isLength({min: 3}),
body('description','Description must be atleast 5 characters').isLength({ min: 5 }),] ,
async (req, res)=>{
    try {
        
   
    const{title, description, tag} = req.body;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const note = new Note({
        title, description, tag, user: req.user.id
    })
    const saveNote= await note.save()
    
    res.json(saveNote);
} catch (error) {
    console.error(error.message);
    res.status(500).end("Internal server error");
}
})

//ROUTE 3: Update a existing Note using: PUT "/api/notes/updatenote". Login required
router.put('/updatenote/:id',fetchuser ,
async (req, res)=>{

    const {title, description, tag}= req.body;

    try {
        
    
    const newNote= {};
    if(title){newNote.title=title};
    if(description){newNote.description=description};
    if(tag){newNote.tag=tag};

    // Find the note to be updated and update it

    let note= await Note.findById(req.params.id);
    if(!note){return res.status(404).send("Not Found")}
    if(note.user.toString()!==req.user.id){return res.status(404).send("Not Allowed");}

    note = await Note.findByIdAndUpdate(req.params.id, {$set: newNote}, {new: true})
    res.json({note});
} catch (error) {
    console.error(error.message);
    res.status(500).end("Internal server error");
}

})


//ROUTE 4: Delete a existing Note using: DELETE "/api/notes/deletnote". Login required
router.delete('/deletenote/:id',fetchuser ,
async (req, res)=>{

    
    try {
        
   
    // Find the note to be deleted and delete it

    let note= await Note.findById(req.params.id);
    if(!note){return res.status(404).send("Not Found")}
    
    
    // Allow deletion only if user owns this Note
    if(note.user.toString()!==req.user.id){return res.status(404).send("Not Found");}



    note = await Note.findByIdAndDelete(req.params.id)
    res.json({"Sucess": "Note has been deleted", note:note});

} catch (error) {
    console.error(error.message);
    res.status(500).end("Internal server error");
}

})

module.exports = router