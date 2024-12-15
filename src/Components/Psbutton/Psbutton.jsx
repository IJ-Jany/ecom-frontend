import React from 'react'
import './Psbutton.css'

const Psbutton = ({text}) => {
  return (
    <div className='ps-btn-box'>
        <button className='ps-btn'>{text}</button>
    </div>
  )
}

export default Psbutton