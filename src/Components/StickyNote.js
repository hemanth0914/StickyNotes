const StickyNote = ({ handleRemoveNote, index }) => {
  return (
    <div className="stickyNote">
      <button className="removeNote" onClick={() => handleRemoveNote(index)}>
        <span>X</span>
      </button>
      <textarea
        placeholder="Enter your Notes here"
        className="NoteText"
      ></textarea>
    </div>
  );
};

export default StickyNote;
