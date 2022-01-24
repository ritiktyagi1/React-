
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { useState } from 'react';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import NoteState from './context/notes/NoteState';

function App() {
  const [alert, setAlert] = useState("");
  const showAlert= (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
  }, 1500);
  }
  return (
    <>
    <NoteState>
    <Router>
      <Navbar/>

      <Alert alert={alert}/>

      <div className='container my-3'>
      <Routes>

          <Route exact path="/" element={<Home showAlert={showAlert}/>}>
          {/* <Route exact path="/"> */}
          {/* <Home/> */}
          </Route>
          <Route exact path="/about" element={<About/>}>
          {/* <Route path="/about"> */}
          {/* <About/> */}
          </Route>
          <Route exact path="/login" element={<Login showAlert={showAlert}/>}>

          </Route>

          <Route exact path="/signup" element={<Signup showAlert={showAlert}/>}>

          </Route>
        </Routes>

        </div>
    </Router>
    </NoteState>
    
    </>
  );
}

export default App;
