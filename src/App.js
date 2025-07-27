import { useState } from "react";
import StickyNote from "./Components/StickyNote";
import "./styles.css";

export default function App() {
  const [notes, setNotes] = useState([]);
  const [latestIndex, setlatestIndex] = useState(0);
  const handleRemoveNote = (index) => {
    console.log(index);
    setNotes((prev) => prev.filter((note) => note.id !== index));
  };
  const handleAddNote = () => {
    const id = latestIndex + 1;
    setNotes((prev) => [...prev, { id }]);
    setlatestIndex(id);
  };
  return (
    <div className="App">
      <div className="stickyNotesContainer">
        {notes.map(({ id }) => {
          return (
            <StickyNote
              index={id}
              key={id}
              handleRemoveNote={handleRemoveNote}
            />
          );
        })}
      </div>
      <button onClick={handleAddNote} className="addNote">
        <span>
          <h1>+</h1>
        </span>
      </button>
    </div>
  );
}
