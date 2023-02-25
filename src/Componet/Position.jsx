import './Position.css'
import React from 'react'

export default function Position() {
  return (
    <div className='Position'>
        <h2>Position</h2>
        <button style={{border: '5px solid #1C6EA4'}}>All</button>
        <button style={{borderTop: '5px solid #1C6EA4'}}>Top</button>
        <button style={{borderRight: '5px solid #1C6EA4'}}>Right</button>
        <button style={{borderBottom: '5px solid #1C6EA4'}}>Bottom</button>
        <button style={{borderLeft: '5px solid #1C6EA4'}}>Left</button>

    </div>
  )
}
