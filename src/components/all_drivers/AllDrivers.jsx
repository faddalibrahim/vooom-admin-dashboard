import React from 'react'
import Driver from '../driver/Driver'
import EditDriver from '../edit_driver/EditDriver'
import AddCharacter from '../header_add/AddCharacter'
import CompSummary from '../comp_summary/CompSummary'
import "./AllDrivers.css"
import NewDriver from "../add_driver/NewDriver"

const AllDrivers = () => {
    const [drivers, setDrivers] = React.useState(
        [
            {name : "Alhassan Hassan", age: 45, gender: "Male", tel: "+233201514922"},
            {name : "Alhassan Nasiba", age: 35, gender: "Male", tel: "+233201514922"},
            {name : "Alhassan Mariam", age: 41, gender: "Male", tel: "+233201514922"},
            {name : "Alhassan Hadija", age: 40, gender: "Male", tel: "+233201514922"},
        ]
    )

    const [editIndex, setEditIndex] = React.useState(0)

    const [updateDriver, setDriverUpdate] = React.useState({
        name: "",
        age: "",
        gender: "",
        tel: "",
    })
    
    const [newDriver, setAddDriver] = React.useState({
        name: "",
        age: "",
        gender: "",
        tel: "",
    })

    const [editPage_, setEditPage] = React.useState(false)
    const [editAdd, setEditAdd] = React.useState(false)

    const deleteDriver = (e) => {
        if (window.confirm("Are you sure you want to delete this driver?")) {
            const newDrivers = drivers.filter((driver, index) => index !== parseInt(e.target.value))
            setDrivers(newDrivers)    
        }
    }

    const editAddNew = (e) => {
        setEditAdd(!editAdd)
    }

    const addNewName = (e) => {
        setAddDriver({...newDriver, name: e.target.value})
    } 
    const addNewDOB = (e) => {
        let dob = e.target.value.slice(0, 4)
        let age = parseInt(new Date().getFullYear() - parseInt(dob))
        console.log(age)
        
        setAddDriver({...newDriver, age: age})
    } 
    const addNewGender = (e) => {
        setAddDriver({...newDriver, gender: e.target.value})
    } 
    const addNewTel = (e) => {
        setAddDriver({...newDriver, tel: e.target.value})
    } 


    const editDriver = (e) => {
        let edit = parseInt(e.target.value)
        setEditPage(!editPage_)
        setEditIndex(edit)
        let updateRow = { ...drivers[edit] }
        console.log(editPage_)
        setDriverUpdate(updateRow)
    }

    const updateName = (e) => {
        setDriverUpdate({ ...updateDriver, name: e.target.value })
    }
    
    const updateGender = (e) => {
        setDriverUpdate({ ...updateDriver, gender: e.target.value })
    }
    
    const updateTel = (e) => {
        setDriverUpdate({ ...updateDriver, tel: e.target.value })
    }
    
    const updateDOB = (e) => {
        let dob = new Date().getFullYear() - e.target.value.getFullYear()
        setDriverUpdate({ ...updateDriver, age: dob })
    }

    const doUpdate = (e) => {
        e.preventDefault()
        let clonedDrivers = [...drivers]
        let updateRow = { ...clonedDrivers[editIndex] }
        updateRow.name = updateDriver.name
        updateRow.gender = updateDriver.gender
        updateRow.tel = updateDriver.tel
        updateRow.age = updateDriver.age
        clonedDrivers[editIndex] = updateRow
        setDrivers(clonedDrivers)
        setEditPage(false)
    }

    const addNewDriver = () => {
        setEditAdd(!editAdd)
    }

    const addDriver = (e) => {
        e.preventDefault()
        setDrivers([...drivers, newDriver])
        setEditAdd(!editAdd)
    }


  return (
      <div className='allDrivers'>
          <div className='thedrivers'>
            <AddCharacter character={`Drivers`} addChar={addNewDriver}/>
            {drivers.map((data, index) => {
                return (
                    <div
                        key={index}
                    >
                        <Driver
                            name={data.name}
                            age={data.age}
                            gender={data.gender}
                            telephone={data.tel}
                            onDelete={deleteDriver}
                            id={index}
                            onEdit = {editDriver}
                        />
                        <div style={editPage_ ? { "display": 'block' } : { "display": 'none' }}>
                            <EditDriver
                                savedID = {editIndex}
                                togglePage={editPage_}
                                handleClose={editDriver}
                                saved={doUpdate}
                                newFName={updateDriver.name}
                                newDOB={updateDriver.age}
                                newG={updateDriver.gender}
                                newTel={updateDriver.tel}
                                nameChanged={updateName}
                                dobChanged={updateDOB}
                                telChanged={updateTel}
                                genChanged = {updateGender}                         
                            />
                        </div>

                        <div style = {editPage_ ? { "display": 'block' } : { "display": 'none' }}>
                            <NewDriver
                                togglePage={editAdd}
                                handleClose={editAddNew}
                                newName={addNewName}
                                newDob={addNewDOB}
                                newGender={addNewGender}
                                newTel={addNewTel}
                                name={newDriver.name}
                                tel={newDriver.tel}
                                gen={newDriver.gender}
                                dob={newDriver.age} 
                                add = {addDriver}
                            />
                        </div>
                    </div>
                )
            })}
          </div>
          <CompSummary
              length={drivers.length}
              active={2}
              header={`Summary`}
              lenNote={`Total No. of Drivers.`}
              activeNote={`Total No. of Active Drivers`}/>
    </div>
  )
}

export default AllDrivers