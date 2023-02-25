import "./Style.css"

import React from 'react'

export default function Style() {
  return (
    <div className='Style'>
        <div className='Style1'>
            <span>Style</span>
            <button style={{border: '5px solid #1C6EA4'}}>solid</button>
            <button style={{border: '5px dotted #1C6EA4'}}>dotted</button>
            <button style={{border: '5px dashed #1C6EA4'}} >dashed</button>
            <button style={{border: '5px double #1C6EA4'}}>double</button>
        </div>
        <div className='Style2'>
            <button style={{border: '5px groove #1C6EA4'}}>groove</button>
            <button style={{border: '5px ridge #1C6EA4'}}>ridge</button>
            <button style={{border: '5px inset #1C6EA4'}}>inset</button>
            <button style={{border: '5px outset #1C6EA4'}}>outset</button>
        </div>
        <div className='Style3'>
            <button style={{border: '5px hidden #1C6EA4'}}>hidden</button>
            <button style={{border: '5px none #1C6EA4'}}>none</button>
        </div>
    </div>
    
    
    
  )
}
