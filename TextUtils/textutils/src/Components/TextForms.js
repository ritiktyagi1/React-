import React, {useState} from 'react'

export default function TextForms(props) {
    const handleUpclick= ()=>{
        console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
    };
    const handleLowclick= ()=>{
        console.log("Lowercase was clicked");
        let newText=text.toLowerCase();
        setText(newText);
    };
    const handleOnChange= (event)=>{
        setText(event.target.value);
    }
    const [text, setText]= useState('');
    return (
        <>
        <div className='container'>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
             </div>
             <button className='btn btn-primary mx-1' onClick={handleUpclick}>Convert to Uppercase</button>
             <button className='btn btn-primary mx-1' onClick={handleLowclick}>Convert to Lowercase</button>
        </div>
        <div className='container my-3'>
            <h2>Your text summary</h2>
            <p>{text.split(" ").length} words and {text.length}</p>
            <p>{0.008*text.split(" ").length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text}</p>
        </div>
        
        </>
    );
}
