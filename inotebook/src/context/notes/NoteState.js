
import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) =>{
    const s1 = {
        "name": "Ritik",
        "class": "10b"
    }
    const [state, setState] = useState(s1);
    const update= ()=>{
        setTimeout(()=>{
            setState({
                "name": "tushar",
                "class": "7a"
            })
        },1000);
    }
    return (
       <NoteContext.Provider value={{state, update}}>
        {props.children}
       </NoteContext.Provider>
    )
}
export default NoteState;

