import React from 'react'
import "../component_css/NewNoteModal.css"

const NewNoteModal = ({AllNotes,closing}) => {
  const notes = [];
 
  const handleSubmit = (e) =>{
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form)
    const data = Object.fromEntries(formData.entries());

    const existingNotes =
    JSON.parse(localStorage.getItem("Notes")) || [];

  // 2️⃣ Add new note
  const updatedNotes = [...existingNotes, data];

  // 3️⃣ Save back
  localStorage.setItem("Notes", JSON.stringify(updatedNotes));
  alert("added a new note in this giant list.")
  }
  return (
    
    <div className='modal-overlay'>
      <div className='main-modal'>
      <div className='top-row'>
        <h3>New Note</h3>
        <button id="close" onClick={closing}>x</button>
      </div>
      <form onSubmit={handleSubmit} className='modal-form' action="submit">
        <input type="text" name="title" className='title-input' placeholder='Note Title...' />
        <textarea name="content" placeholder='Add Content...' id="form-text"></textarea>
        <button type='submit' id="submit-btn">Save</button>
      </form>
    </div>
    </div>
  )
}

export default NewNoteModal
