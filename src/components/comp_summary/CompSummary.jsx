import React from 'react'
import "./CompSummary.css"

const CompSummary = ({length, header, active, lenNote, activeNote}) => {
  return (
      <div className='sum_buses'>
      <div id='sum_head'>{ header}</div>
          <div className='sum_stats'>
              <div className='stats'>
                  <p id='length'>{ length}</p>
                  <p id = "len_mes">{lenNote}</p>
            </div>
          </div>

          <div className='sum_note'>
                <p id='length_op'>{ active}</p>
        <p id="len_mes_op">{ activeNote}</p>
          </div>
    </div>
  )
}

export default CompSummary