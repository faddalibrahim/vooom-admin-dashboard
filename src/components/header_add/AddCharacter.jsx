import "./AddCharacter.css"
import Add from "../../assets/add.svg"

import React from 'react'

const AddCharacter = ({ character, addChar }) => {
  
  return (
      <div className="header_add">
          <div id="character">{character}</div>
          <img src={Add} alt="add" id="add" onClick={addChar}/>
    </div>
  )
}

export default AddCharacter