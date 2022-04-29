import React from 'react'
import Close from "../../assets/close_fig.svg"
import "./EditDriver.css"
import Modal from '@mui/material/Modal';

const EditDriver = ({togglePage, handleClose, nameChanged, dobChanged, newTel, newG, newDOB, telChanged, genChanged, saved, newFName, savedID}) => {
  return (
    <Modal
      open={togglePage}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className='edit_driver'>
          <div className='edit_new_driver'>
              <div id="closure_" onClick={handleClose}><img src={Close} alt="" id='close' /></div>
              <p id='edit_driver'>Edit Driver's Details</p>
            
              <form action="">
                <div className='fields_'>
                    <label for="fullname">New Fullname*</label> <br />
                    <input type="text" id= "fullname"  onChange={nameChanged} value={ newFName}/> <br />
                    <label for="dob">New Date of Birth*</label> <br />
                    <input type="date"id='dob' onChange={dobChanged} value={ newDOB}/> <br />
                    <label for="gender">Gender*</label> <br />
                    <input type="text" id='gender' onChange={genChanged} value={ newG}/> <br />
                    <label for="tel" >New Telephone*</label> <br />
                    <input type="tel"id='tel' onChange={telChanged} value={ newTel}/>
                </div>

                <div className='now_edit_'>
                    <button id='now_edit' onClick={saved} value = {savedID}>Save</button>
                </div>
              </form>
          </div>
      </div>
    </Modal>
  )
}

export default EditDriver