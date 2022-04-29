import React from 'react'
import "./NewDriver.css"
import Close from "../../assets/close_fig.svg"
import Modal from '@mui/material/Modal';

const NewDriver = ({togglePage, handleClose, name, gen, tel, dob, add, newName, newDob, newGender, newTel}) => {
  return (
    <Modal
      open={togglePage}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className='addDriver'>
          <div className='new_driver'>
              <div id="closure"><img src={Close} alt="" id='close' onClick={handleClose}/></div>
              <p id='add_driver'>Add New Driver</p>
            
              <form action="">
                <div className='fields'>
                    <label for="fullname">Fullname*</label> <br />
                    <input type="text" id= "fullname" onChange={newName}  value={name}/> <br />
                    <label for="dob">Date of Birth*</label> <br />
                    <input type="date"id='dob' onChange={newDob} value={dob}/> <br />
                    <label for="gender">Gender*</label> <br />
                    <select id="gender" id= "gender" onChange={newGender}>
                      <option value="Male">Male</option>
                      <option value="Female">Female</option>
                      <option value="Other">Other</option>
                    </select> <br />
                
                    <label for="tel" >Telephone*</label> <br />
                    <input type="tel"id='tel' onChange={newTel} value={tel}/>
                </div>

                <div className='now_add'>
                    <button id='now_add' onClick={add}>Add</button>
                </div>
              </form>
          </div>
    </div>
  </Modal>
  )
}

export default NewDriver