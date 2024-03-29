import React, {useState} from 'react';


export default function TextForms(props) {

    const handleUpclick= ()=>{
        // console.log("Uppercase was clicked");
        let newText=text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase","success");
    };
    const handleLowclick= ()=>{
        // console.log("Lowercase was clicked");
        let newText=text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase","success");
    };

    const handleExtraSpaces= ()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Extra spaces removed","success");
    };
    const handleOnChange= (event)=>{
        setText(event.target.value);
    };

    const handleCopy=()=>{
        navigator.clipboard.writeText(text);
        props.showAlert("Text copied","success");
    };
    const [text, setText]= useState('');
    return (
        <>
        <div className='container'style={{color: props.mode ==='dark'?'white':'#042743'}}>
            <h1>{props.heading}</h1>
            <div className="mb-3">
                <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor: props.mode==='dark'?'#13466e':'white', color: props.mode ==='dark'?'white':'#042743' }} id="myBox" rows="8"></textarea>
             </div>
             <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleUpclick}>Convert to Uppercase</button>
             <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleLowclick}>Convert to Lowercase</button>
             <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleExtraSpaces}>Remove Extra Spaces</button>
             <button disabled={text.length===0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
        </div>
        <div className='container my-3' style={{color: props.mode ==='dark'?'white':'#042743'}}>
            <h2>Your text summary</h2>
            <p>{text.split(/\s+/).filter((element)=>{return element.length!==0}).length} words and {text.length}</p>
            <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
            <h2>Preview</h2>
            <p>{text.length>0?text:"Nothing to preview"}</p>
        </div>
        
        </>
    );
}
