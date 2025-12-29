import React from 'react'
import "../component_css/NoteSection.css"
import Note from "./Note.jsx"

const NoteSection = ({hardcodedTitles}) => {
  const notes = JSON.parse(localStorage.getItem("Notes"))

  
  return (
    <div className='Notes-container'>
      
        {hardcodedTitles.map((title) =>(
          
            <Note
              key={`${title}`}
              title={`${title}`}
              content="I am the best. It's the best place ever to be and I love this place to visit again and again. This is a 'test' text, get it? LOL"
            />
          )
        )}

      
      {
        notes.map((note) => (
          <Note title={note.title} content={note.content}  />
        ))
      }
      
    </div>
  )
}

export default NoteSection
