
import './App.css';
import Navbar from './Components/Navbar';
import TextForms from './Components/TextForms';
import React, { useState } from 'react';
import Alert from './Components/Alert';
import About from './Components/About';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {

  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
    }
    else {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
    }
  }
  return (
    <>

    <Router>
    <Navbar title = "Text Utils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
    <Switch> 
          <Route exact path="/about">
            <About />
          </Route> 
          <Route exact path="/">
            

            <TextForms showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
           
           </Route>
    </Switch>
    </div>

    </Router>
    
    </>
  );
}

export default App;
