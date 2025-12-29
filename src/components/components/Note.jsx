import React from 'react'
import "../component_css/Note.css"

const Note = ({title,content}) => {
  const handleClick = (e) => {
    e.preventDefault();
  }
  return (
    <div className='Note'>
      <div className='top-tier'>
        <h4>{title}</h4>
        
      </div>
      <p>{content}</p>
    </div>
  )
}

export default Note
