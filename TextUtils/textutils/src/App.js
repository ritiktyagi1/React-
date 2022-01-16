
import './App.css';
import Navbar from './Components/Navbar';
import TextForms from './Components/TextForms';
import React, { useState } from 'react';




function App() {

  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not

  const toggleMode =()=>{
    if(mode === 'light'){
      setMode('dark');
      document.body.style.backgroundColor='#042743';
    }
    else {
      setMode('light');
      document.body.style.backgroundColor='white';
    }
  }
  return (
    <>
    <Navbar title = "Text Utils" mode={mode} toggleMode={toggleMode}/>
    <div className='container my-3'>
    <TextForms heading="Enter the text to analyze" mode={mode}/>
    </div>
    </>
  );
}

export default App;
