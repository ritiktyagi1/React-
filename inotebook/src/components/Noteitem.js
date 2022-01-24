import React from "react";
import noteContext from "../context/notes/NoteContext";
import { useContext } from "react";

const Noteitem = (props) => {
  const context = useContext(noteContext);
  const { note, updateNote } = props;
  const {deleteNote} =context;
  return (
    <div className="col-md-3">
      <div className="card my-3">
        <div className="card-body">
          <h5 className="card-title">{note.title}</h5>
          <p className="card-text">{note.description}</p>
          <i className="fas fa-trash-alt mx-2" onClick={()=>{deleteNote(note._id);
          props.showAlert("deleted successfully","success");}}></i>
          <i className="fas fa-edit mx-2" onClick={()=>{updateNote(note);
          props.showAlert("Updated successfully","success");}}></i>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
