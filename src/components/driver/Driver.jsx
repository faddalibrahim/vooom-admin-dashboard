import React from 'react'
import driver from "../../assets/driver.svg"
import "./Driver.css"

const Driver = ({ name, age, gender, telephone, onDelete, id, onEdit }) => {
  return (
      <div className='driver_comp'>
          <div className = "driver_info">
            <div id = "driver"><img src= {driver} alt="a driver" id="thedriver" /></div>
            <div className="info_driver">
                <div className="driver_sec">
                    <p>Name</p> 
                    <p>Age</p>
                    <p>Gender</p>
                    <p>Telephone</p>
                    <button id="edit" onClick={onEdit} value={id}>Edit</button>
                </div>

                <div className="driver_sec">
                    <p>{name? name: "The Phenomenal Wan"}</p> 
                    <p>{age? age: "42"}</p>
                    <p>{gender? gender: "Male"}</p>
                    <p>{telephone? telephone: "+233201514922"}</p>
                    <button id="delete" onClick={onDelete} value={id}>Delete</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Driver