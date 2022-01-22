
import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) =>{

    const notesInitial = [
        {
          "_id": "61ebbe161425048200dc01c0",
          "user": "61e96932d227d4a45f84ce38",
          "title": "My title2",
          "description": "I have to make a presentation tommorrow22",
          "tag": "personal",
          "date": "2022-01-22T08:19:34.051Z",
          "__v": 0
        },
        {
          "_id": "61ebbe181425048200dc01c3",
          "user": "61e96932d227d4a45f84ce38",
          "title": "My title2",
          "description": "I have to make a presentation tommorrow22",
          "tag": "personal",
          "date": "2022-01-22T08:19:36.386Z",
          "__v": 0
        },
        {
            "_id": "61ebbe161425048200dc01c4",
            "user": "61e96932d227d4a45f84ce38",
            "title": "My title2",
            "description": "I have to make a presentation tommorrow22",
            "tag": "personal",
            "date": "2022-01-22T08:19:34.051Z",
            "__v": 0
          },
          {
            "_id": "61ebbe181425048200dc01c5",
            "user": "61e96932d227d4a45f84ce38",
            "title": "My title2",
            "description": "I have to make a presentation tommorrow22",
            "tag": "personal",
            "date": "2022-01-22T08:19:36.386Z",
            "__v": 0
          },
          {
            "_id": "61ebbe161425048200dc01c6",
            "user": "61e96932d227d4a45f84ce38",
            "title": "My title2",
            "description": "I have to make a presentation tommorrow22",
            "tag": "personal",
            "date": "2022-01-22T08:19:34.051Z",
            "__v": 0
          },
          {
            "_id": "61ebbe181425048200dc01c7",
            "user": "61e96932d227d4a45f84ce38",
            "title": "My title2",
            "description": "I have to make a presentation tommorrow22",
            "tag": "personal",
            "date": "2022-01-22T08:19:36.386Z",
            "__v": 0
          },
          {
            "_id": "61ebbe161425048200dc01c8",
            "user": "61e96932d227d4a45f84ce38",
            "title": "My title2",
            "description": "I have to make a presentation tommorrow22",
            "tag": "personal",
            "date": "2022-01-22T08:19:34.051Z",
            "__v": 0
          },
          {
            "_id": "61ebbe181425048200dc01c9",
            "user": "61e96932d227d4a45f84ce38",
            "title": "My title2",
            "description": "I have to make a presentation tommorrow22",
            "tag": "personal",
            "date": "2022-01-22T08:19:36.386Z",
            "__v": 0
          }
      ]

      const[notes, setNotes] = useState(notesInitial);

      // Add a Note
      const addNote= (title, description, tag)=>{
        // TODO: API CALL
        console.log("Adding a new note");
        const note={
            "_id": "61ebbe181425048200dc01c9",
            "user": "61e96932d227d4a45f84ce45",
            "title": title,
            "description": description,
            "tag": tag,
            "date": "2022-01-22T08:19:36.386Z",
            "__v": 0
          };
        setNotes(notes.concat(note))
      }

      // Delete a Note
      const deleteNote= (id)=>{
          console.log("Deleting the note with id"+id);
          const newNotes = notes.filter((note)=>{return note._id!==id});
          setNotes(newNotes);
    }

      //Edit a Note
      const editNote= (id, title, description, tag)=>{
          
    }
      return (
       <NoteContext.Provider value={{notes, addNote, deleteNote, editNote}}>
        {props.children}
       </NoteContext.Provider>
    )
}
export default NoteState;

