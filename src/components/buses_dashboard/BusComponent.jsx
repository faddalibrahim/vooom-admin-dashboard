import "./BusComponent.css"
import Bus from "../../assets/bus.svg"

import React from 'react'

const BusComponent = ({number, onDelete, capacity, id, onEdit}) => {
  return (
    <div className="bus_comp ">
      <div className = "bus_info">
        <div id = "bus"><img src= {Bus} alt="a bus" id="thebus" /></div>
        <div className="info_bus">
          <div className="bus_sec">
            <p>Bus number</p> 
            <p>Bus capacity</p>
            <button id="edit" onClick={onEdit} value={id}>Edit</button>
          </div>

          <div className="bus_sec">
            <p>{number}</p> 
            <p>{capacity}</p>
            <button id="delete" onClick={onDelete} value = {id}>Delete</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BusComponent