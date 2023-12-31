import React, { useContext } from "react";
import noteContext from "../context/notes/notecontext";

const Noteitem = (props) => {
  const { title, description } = props.note;
  const { note, updatenote } = props; //this prop is coming from Note.js
  // Accessing the note context using useContext hook
  const context = useContext(noteContext);
  // Destructuring the addNote function from the context API
  const { deleteNote } = context;

  return (
    <div>
      {/* card from bootstrap */}
      <div className="card ">
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{description}</p>
          <i
            className="fa-solid fa-trash-can mx-2 "
            onClick={() => {
              deleteNote(note._id);
              props.showAlert("deleted successfully", "success");
            }}
          ></i>
          <i
            className="fa-solid fa-pen-to-square mx-2"
            onClick={() => {
              updatenote(note);
            }}
          ></i>
        </div>
      </div>
    </div>
  );
};

export default Noteitem;
