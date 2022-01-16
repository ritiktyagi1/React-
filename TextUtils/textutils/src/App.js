
import './App.css';
import Navbar from './Components/Navbar';
import TextForms from './Components/TextForms';



function App() {
  return (
    <>
    <Navbar title = "Text Utils"/>
    <div className='container my-3'>
      
      <TextForms heading="Enter the text to analyze"/>

    </div>
    </>
  );
}

export default App;
