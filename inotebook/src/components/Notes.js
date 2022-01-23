import React, { useContext, useEffect, useRef , useState} from "react";
import noteContext from "../context/notes/NoteContext";
import AddNote from "./AddNote";
import Noteitem from "./Noteitem";

const Notes = () => {
  const context = useContext(noteContext);
  const { notes, getNotes } = context;

  useEffect(() => {
    getNotes();
  }, []);

  const ref = useRef(null);
  const [note, setnote] = useState({
    etitle: "",
    edescription: "",
    etag: "",
  });

  const updateNote = (currentnote) => {
    ref.current.click();
    setnote({etitle: currentnote.title,edescription: currentnote.description,etag: currentnote.tag });
    
  };
  const handleClick = (e) => {
    e.preventDefault();
    console.log("udpating the note...")
  };

  const onChange = (e) => {
    setnote({ ...note, [e.target.name]: e.target.value });
  };

  return (
    <>
      <AddNote />

      <button
        ref={ref}
        type="button"
        className="btn btn-primary d-none"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal" // data-target => data-bs-target for bootstrap5
      >
        Launch demo modal
      </button>

      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">
                Note title
              </h5>
              <button
                type="button"
                className="close"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form className="my-3">
                <div className="mb-3">
                  <label htmlFor="etitle" className="form-label">
                    Title
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="etitle"
                    name="etitle"
                    aria-describedby="mailHelp"
                    value={note.etitle}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="edescription" className="form-label">
                    description
                  </label>
                  <input
                    type="text"
                    name="edescription"
                    className="form-control"
                    id="edescription"
                    value={note.edescription}
                    onChange={onChange}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="etag" className="form-label">
                    Tag
                  </label>
                  <input
                    type="text"
                    name="etag"
                    className="form-control"
                    id="edescription"
                    value={note.etag}
                    onChange={onChange}
                  />
                </div>
              </form>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
              <button type="button" className="btn btn-primary" onClick={handleClick}>
                Update notes
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="row my-3">
        <h2>Add a Notes</h2>
        {notes.map((note) => {
          return (
            <Noteitem key={note._id} updateNote={updateNote} note={note} />
          );
        })}
      </div>
    </>
  );
};

export default Notes;
