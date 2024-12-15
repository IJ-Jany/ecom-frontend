import React from 'react'
import banerimg from '../../../images/shop-baner-img.png';
import Heading from '../../../Utils/Heading/Heading';
import { Link } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import './Shopbaner.css'

const Shopbaner = () => {
  return (
    <section id='shop-baner'> 
        <img src={banerimg} alt='not found' />
        <div className='container'>
            <div className='shop-baner-contant-wrapper'>
                <Heading level='h1'  text='Shop' className='shop-baner-head'/>
                <div className='shop-baner-link-box-flex'>
                    <Link to ='home'>home</Link>
                    <IoIosArrowForward />
                    <Link to ='shop'>shop</Link>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Shopbaner