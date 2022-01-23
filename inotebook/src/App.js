
import './App.css';

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Navbar from './components/Navbar';
import { Alert } from './components/Alert';
import Home from './components/Home';
import About from './components/About';
import Login from './components/Login';
import Signup from './components/Signup';
import NoteState from './context/notes/NoteState';


function App() {
  return (
    <>
    <NoteState>
    <Router>
      <Navbar/>
      <Alert message="This is alert"/>

      <div className='container'>
      <Routes>

          <Route exact path="/" element={<Home/>}>
          {/* <Route exact path="/"> */}
          {/* <Home/> */}
          </Route>
          <Route exact path="/about" element={<About/>}>
          {/* <Route path="/about"> */}
          {/* <About/> */}
          </Route>
          <Route exact path="/login" element={<Login/>}>

          </Route>

          <Route exact path="/signup" element={<Signup/>}>

          </Route>
        </Routes>

        </div>
    </Router>
    </NoteState>
    
    </>
  );
}

export default App;
