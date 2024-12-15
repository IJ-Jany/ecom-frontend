import React from 'react'
import Heading from '../../../Utils/Heading/Heading'
import { Link } from 'react-router-dom'
import './Homebaner.css'

const Homebaner = () => {
  return (
    <section id = 'homebaner'>
        <div className="container">
           <div className="homebaner-contant-box">
              <div className="homebaner-contant-wrapper">
                    <Heading level='h4' text='New Arrival' className='homebaner-nanohead'/>
                    <Heading level='h1' text='Discover Our New Collection' className='homebaner-head'/>
                    <Heading level='p' text='Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.' className='homebaner-pera'/>
                    <div className='homebaner-btn-link'>
                        <Link to ="buynow" className='homebaner-link'>buy now</Link>
                    </div>
                </div>
           </div>
        </div>
    </section>
  )
}

export default Homebaner