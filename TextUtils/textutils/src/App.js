
import './App.css';
import Navbar from './Components/Navbar';
import TextForms from './Components/TextForms';
import React, { useState } from 'react';
import Alert from './Components/Alert';




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
    <Navbar title = "Text Utils" mode={mode} toggleMode={toggleMode}/>
    <Alert alert={alert}/>
    <div className='container my-3'>
    <TextForms showAlert={showAlert} heading="Enter the text to analyze" mode={mode}/>
    </div>
    </>
  );
}

export default App;
