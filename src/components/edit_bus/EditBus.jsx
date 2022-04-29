import React from 'react'
import Close from "../../assets/close_fig.svg"
import "./EditBus.css"
import Modal from '@mui/material/Modal';

const EditBus = ({ togglePage, handleClose, numChanged, capChanged, saved, newN, newC, savedID }) => {
  return (
    <Modal
      open={togglePage}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className='edit_bus'>
            <div className='edit_new_bus'>
                <div id="closure" onClick={handleClose}><img src={Close} alt="" id='close' /></div>
                <p id='edit_bus'>Edit Bus' Details</p>
              
                <form action="">
                  <div className='fields'>
                      <label for="number">New Number*</label> <br />
                      <input type="text" id="number" onChange={numChanged} value={ newN}/> <br />
                      <label for="capacity"> New Capacity*</label> <br />
                    <input type="number" id="capacity" onChange={capChanged} value={ newC}/> <br />
                  </div>

                  <div className='now_edit'>
                      <button id='now_edit' onClick={saved} value = {savedID}>Save</button>
                  </div>
                </form>
            </div>
      </div>
    </Modal>

  )
}

export default EditBus