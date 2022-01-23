import NoteContext from "./NoteContext";
import { useState } from "react";

const NoteState = (props) => {
  const host = "http://localhost:5000";

  const notesInitial = [];

  const [notes, setNotes] = useState(notesInitial);
  // Get all Notes
  const getNotes = async () => {
    // API CALLS
    const response = await fetch(`${host}/api/notes/fetchallnotes`, {
      method: "GET",

      headers: {
        "Content-Type": "application/json",
        // "Accept": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlOTY5MzJkMjI3ZDRhNDVmODRjZTM4In0sImlhdCI6MTY0MjY4ODE5MH0.Hq_RrrBerGt_kcXY_FBzI1EdilSI1pNJ_OqVgpZmYts",
      },
    });
    const json = await response.json();
    console.log(json);

    setNotes(json);
  };

  // Add a Note
  const addNote = async (title, description, tag) => {
    // TODO: API CALL
    // API CALLS
    const response = await fetch(`${host}/api/notes/addnotes`, {
      method: "POST",

      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlOTY5MzJkMjI3ZDRhNDVmODRjZTM4In0sImlhdCI6MTY0MjY4ODE5MH0.Hq_RrrBerGt_kcXY_FBzI1EdilSI1pNJ_OqVgpZmYts",
      },
      body: JSON.stringify({ title, description, tag }),
    });

    console.log("Adding a new note");
    const note = {
      _id: "61ebbe181425048200dc01c9",
      user: "61e96932d227d4a45f84ce45",
      title: title,
      description: description,
      tag: tag,
      date: "2022-01-22T08:19:36.386Z",
      __v: 0,
    };
    setNotes(notes.concat(note));
  };

  // Delete a Note
  const deleteNote = async (id) => {
    const response = await fetch(`${host}/api/notes/deletenote/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlOTY5MzJkMjI3ZDRhNDVmODRjZTM4In0sImlhdCI6MTY0MjY4ODE5MH0.Hq_RrrBerGt_kcXY_FBzI1EdilSI1pNJ_OqVgpZmYts",
      }
    });
    const json = response.json();
    console.log(json);
    console.log("Deleting the note with id" + id);
    const newNotes = notes.filter((note) => {
      return note._id !== id;
    });
    setNotes(newNotes);
  };

  //Edit a Note
  const editNote = async (id, title, description, tag) => {
    // API CALLS
    const response = await fetch(`${host}/api/api/notes/updatenote/${id}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFlOTY5MzJkMjI3ZDRhNDVmODRjZTM4In0sImlhdCI6MTY0MjY4ODE5MH0.Hq_RrrBerGt_kcXY_FBzI1EdilSI1pNJ_OqVgpZmYts",
      },
      body: JSON.stringify({ title, description, tag }),
    });
    const json = response.json();

    //Logic to edit in client
    for (let index = 0; index < notes.length; index++) {
      const element = notes[index];
      if (element._id === id) {
        element.title = title;
        element.description = description;
        element.tag = tag;
      }
    }
  };
  return (
    <NoteContext.Provider
      value={{ notes, addNote, deleteNote, editNote, getNotes }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
