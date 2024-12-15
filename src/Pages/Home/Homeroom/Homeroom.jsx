import React from 'react'
import Heading from '../../../Utils/Heading/Heading';
import { HiArrowSmallRight } from "react-icons/hi2";
import imgone from '../../../images/room-imgone.png';
import imgtwo from '../../../images/room-imgtwo.png';
import './Homeroom.css'

const Homeroom = () => {
  return (
    <section id ='homeroom'>
        <div className="container">
            <div className='homeroom-contant-room-flex'>
                <div className='homeroom-contant-box'>
                    <Heading level='h3' text='50+ Beautiful rooms inspiration' className='homeroom-contant-head'/>
                    <Heading level='p' text='Our designer already made a lot of beautiful prototipe of rooms that inspire you' className='homeroom-contant-pera'/>
                    <div className="homeroom-contact-btn-box">
                        <button className='homeroom-contact-btn'>Explore More</button>
                    </div>
                </div> 
                <div className='homeroom-big-img-box'>
                    <img src={imgone} alt="not found" />
                    <div className="homeroom-big-img-content-box-flex">
                        <div className="homeroom-big-img-contant-box">
                            <Heading level='p' text='DM - Bed-Room'  className='homeroom-big-img-contant-pera'/>
                            <Heading level='h4' text='Inner Peace'  className='homeroom-big-img-contant-nenohead'/>
                        </div>
                        <div className="homeroom-big-img-btn-box">
                            <button className='homeroom-big-img-btn'><HiArrowSmallRight /></button>
                        </div>
                    </div>
                </div>
                <div className='homeroom-small-img-box'>
                    <div className="homeroom-small-img">
                        <img src={imgtwo} alt="found" />
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Homeroom