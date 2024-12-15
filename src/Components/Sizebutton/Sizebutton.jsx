import React from 'react'
import './Sizebutton.css'

const Sizebutton = ({text , className}) => {
  return (
   <div className='size-button-box'>
        <button className={className}>{text}</button>
   </div>
  )
}

export default Sizebutton