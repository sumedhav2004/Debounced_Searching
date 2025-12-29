import React from 'react'
import "../component_css/AddNewBtn.css"

const AddNewBtn = ({onOpen}) => {
  
  return (
    <button className='AddNewBtn' onClick={onOpen}>
      Add New
    </button>
  )
}

export default AddNewBtn
