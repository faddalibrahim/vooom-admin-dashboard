import React from 'react'
import "./AddNewBus.css"
import Close from "../../assets/close_fig.svg"
import Modal from '@mui/material/Modal';

const AddNewBus = ({togglePage, handleClose, num, cap, add, newNum, newCap}) => {
  return (
    <Modal
      open={togglePage}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <div className='addBus'>
          <div className='new_bus'>
              <div id="closure"><img src={Close} alt="" id='close' onClick={handleClose}/></div>
              <p id='add_bus'>Add New Bus</p>
            
              <form action="">
                <div className='fields'>
                    <label for="number" >Number*</label> <br />
                    <input type="text" id= "number" onChange={newNum} value={num}/> <br />
                    <label for="capacity">Capacity*</label> <br />
                    <input type="number" id= "capacity" onChange={newCap} value={cap}/> <br />
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

export default AddNewBus