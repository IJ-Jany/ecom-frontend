import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { Link } from 'react-router-dom';
import Heading from '../../../Utils/Heading/Heading';
import './Singleproductnav.css'

const Singleproductnav = () => {
  return (
    <section id ='singleproduct-nav'>
        <div className='container'>
            <div className='singleproduct-nav-wrapper-flex'>
                <div className='singleproduct-nav-item-flex'>
                    <Link className='singleproduct-nav-item-link' to ='home'>home</Link>
                    <IoIosArrowForward className='singleproduct-nav-item-icon' />
                    <Link className='singleproduct-nav-item-link' to ='shop'>shop</Link>
                    <IoIosArrowForward className='singleproduct-nav-item-icon'/>
                </div>
                <div className='singleproduct-nav-contant-box'>
                    <Heading level='h5' text='Asgaard sofa' className='singleproduct-nav-contant'/>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Singleproductnav