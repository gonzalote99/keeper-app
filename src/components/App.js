import React, { useState } from "react";
import "../style.css";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";

function App(){
  const [notes, setNotes] = useState([]);
  function addNote(note) {
    setNotes((prevValue) => {
      return [...prevValue, note];
    });
  }

function deleteNote(id) {
setNotes((prevNotes) => {
return prevNotes.filter((note, index) => {
return index !== id;
});
});
}

return(
<div>
 <Header />
 <CreateArea onAdd={addNote} />
 {notes.map((note, index) => (
   <Note
  key={index}
  id={index}
  title={note.title}
  content={note.content}
  onDelete={deleteNote}
   />
))}

 <Footer />
  </div>

);

}


export default App;