import React from 'react'
import BusComponent from '../buses_dashboard/BusComponent'
import EditBus from "../edit_bus/EditBus"
import CompSummary from '../comp_summary/CompSummary'
import "./AllBuses.css"
import AddCharacter from '../header_add/AddCharacter'
import AddNewBus from '../add_bus/AddNewBus'

const AllBuses = () => {
    const [buses, setBuses] = React.useState(
        [
            {number : "GW-3428", capacity: 45},
            { number : "GW-3428", capacity: 40},
            {number : "GW-0035", capacity: 48}
        ]
    )

    const [editIndex, setEditIndex] = React.useState(0)

    const [updateBus, setBusUpdate] = React.useState({
        number: "",
        capacity: ""
    })

    const [newBus, setaddNewBus] = React.useState({
        number: "",
        capacity: ""
    })

    const [editPage, setEditPage] = React.useState(false)
    const [editAdd, setEditAdd] = React.useState(false)

    const deleteBus = (e) => {
        if (window.confirm("Are you sure you want to delete this bus?")) {
            const newBuses = buses.filter((bus, index) => index !== parseInt(e.target.value))
            setBuses(newBuses)    
        }
    }


    const editBus = (e) => {
        let edit = parseInt(e.target.value)
        setEditPage(!editPage)
        setEditIndex(edit)
        let updateRow = { ...buses[edit] }
        console.log(updateRow)
        setBusUpdate(updateRow)
    }
    
    const editAddNew = (e) => {
        setEditAdd(!editAdd)
    }

    const updateNumber = (e) => {
        setBusUpdate({ ...updateBus, number: e.target.value })
    }
    
    const addNewNum = (e) => {
        setaddNewBus({ ...newBus, number: e.target.value })
    }
    
    const updateCapacity = (e) => {
        setBusUpdate({ ...updateBus, capacity:  e.target.value})  
    }
    
    const addNewCap = (e) => {
        setaddNewBus({ ...newBus, capacity:  e.target.value})  
    }

    const doUpdate = (e) => {
        e.preventDefault()
        let clonedBuses = [...buses]
        let updateRow = { ...clonedBuses[editIndex] }
        updateRow.number = updateBus.number
        updateRow.capacity = updateBus.capacity
        clonedBuses[editIndex] = updateRow
        console.log(clonedBuses)
        setBuses(clonedBuses)
        console.log(buses)
        setEditPage(false)
    }

    const makeAddition = () => {
        setEditAdd(!editAdd)
    }

    const addBus = (e) => {
        e.preventDefault()
        setBuses([...buses, newBus])
        setEditAdd(!editAdd)
    }
    
    

  return (
      <div className='allBuses'>
          <div className='thebuses'>
              <AddCharacter character={`Buses`} addChar={makeAddition}/>
            {buses.map((data, index) => {
                return (
                    <div
                        key={index}
                        >
                            <BusComponent
                            capacity={data.capacity}
                            number={data.number}
                            onDelete={deleteBus}
                            id = {index}
                            onEdit={editBus}
                            />
                        
                        <div style={editPage ? { "display": 'block' } : { "display": 'none' }}>
                            < EditBus
                                savedID = {editIndex}
                                togglePage={editPage}
                                handleClose={editBus}
                                numChanged = {updateNumber}
                                capChanged={updateCapacity}
                                newC={updateBus.capacity}
                                newN={updateBus.number}
                                saved={doUpdate}
                            />
                        </div>

                        <div style={editAdd ? { "display": 'block' } : { "display": 'none' }}>
                            <AddNewBus
                                togglePage={editAdd}
                                handleClose={editAddNew}
                                newNum={addNewNum}
                                newCap={addNewCap}
                                num={newBus.number}
                                cap={newBus.cap}
                                add={addBus}
                            />
                        </div>
                    </div>
                    
                    )
                    })}
          </div>
          <CompSummary
              length={buses.length}
              active={2}
              header={`Summary`}
              lenNote={`Total No. of Buses.`}
              activeNote={`Total No. of Active Buses`}
          />

    </div>
  )
}

export default AllBuses