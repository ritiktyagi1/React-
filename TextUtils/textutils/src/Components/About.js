import React from 'react'
// import { withRouter } from 'react-router-dom/cjs/react-router-dom.min'
// import { useState } from 'react/cjs/react.development'

export default function About(props) {

    // const [myStyle,setMyStyle]=useState({
    //     color: 'black',
    //     backgroundColor: 'white'
    // })
    
    let myStyle= {
        color: props.mode === 'dark' ? 'white':'#042743',
        backgroundColor: props.mode === 'dark' ? 'rgb(36 74 104)':'white'
    }


    return (
        <div className='container'>
            <h2 className='my-3' style={{color: props.mode==='dark' ? 'white' : '#042743'}}>About Us</h2>
            <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" style={myStyle}  type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>Analyze Your Text</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        Textutils gives you a way to analyze text quickly and effeciately. Be it word count, charcater count or comverting to upper or lowercase
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free to use</strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                    TextUtils is a free character counter tool that provides instant character count and word count statistics for a given text. Textutils reports the number of words and character. Thus it is suitable for writing text with word/ character  limit.
                    </div>
                    </div>
                </div>
                
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        <strong>Browser Compatible</strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        This word counter software can work in any web browsers such as chrome, firefox, internet explorer, safari etc. It suits to count character in facebook , blogs, books, excel document, essays, etc.
                    </div>
                    </div>
                </div>
            </div>
           
        </div>
    )
}
