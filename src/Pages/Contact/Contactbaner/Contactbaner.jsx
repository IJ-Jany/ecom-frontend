import React from 'react'
import banerimg from '../../../images/shop-baner-img.png';
import Heading from '../../../Utils/Heading/Heading';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import banerlogo from '../../../images/baner-logo.png';
import './Contactbaner.css'

const Contactbaner = () => {
  return (
    <section id='contact-baner'> 
        <img src={banerimg} alt='not found' />
        <div className='container'>
            <div className='contact-baner-contant-wrapper'>
                <div className="contact-baner-img-box">
                    <img src={banerlogo} alt="not found" />
                </div>
                <Heading level='h1'  text='Shop' className='contact-baner-head'/>
                <div className='contact-baner-link-box-flex'>
                    <Link to ='home'>home</Link>
                    <IoIosArrowForward />
                    <Link to ='shop'>shop</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contactbaner