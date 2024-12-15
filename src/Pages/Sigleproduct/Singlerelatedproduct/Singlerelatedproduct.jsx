import React from 'react'
import Heading from '../../../Utils/Heading/Heading';
import productone from '../../../images/productone.png';
import producttwo from '../../../images/producttwo.png';
import productthree from '../../../images/productthree.png';
import productfour from '../../../images/productfour.png';
import './Singlerelatedproduct.css'
import { Link } from 'react-router-dom';


let singlerelatedProductArray = [
    {
        id : 1 , 
        name : "Syltherine",
        pera : "Stylish cafe chair",
        img : productone,
        newprice : "Rp 2.500.000",
        oldprice : "Rp 3.500.000"
    },
    {
        id : 2, 
        name : "Syltherine",
        pera : "Stylish cafe chair",
        img : producttwo,
        newprice : "Rp 2.500.000",
        oldprice : "Rp 3.500.000"
    },
    {
        id : 3 , 
        name : "Syltherine",
        pera : "Stylish cafe chair",
        img : productthree,
        newprice : "Rp 2.500.000",
        oldprice : "Rp 3.500.000"
    },
    {
        id : 4 , 
        name : "Syltherine",
        pera : "Stylish cafe chair",
        img : productfour,
        newprice : "Rp 2.500.000",
        oldprice : "Rp 3.500.000"
    }
]

const Singlerelatedproduct = () => {
  return (
    <section id = 'singlerelatedproduct'>
        <div className='container'>
            <div className='singlerelatedproduct-contant-wrapper'>
                <Heading level='h2' text='Related Products' className='singlerelatedproduct-contant-head'/>
                <div className="singlerelatedproduct-box-flex">
                    {
                        singlerelatedProductArray&&
                        singlerelatedProductArray.map((items)=> (
                           <Link to ='/singleproduct'>
                                <div key={items.id} className='shopproduct-img-container'>
                                    <div className='shopproduct-img-box'>
                                        <img src={items.img} alt='not found' />
                                    </div>
                                    <div className='shopproduct-image-contant-box'>
                                        <Heading level='h4' text={items.name} className='shopproduct-name'/>
                                        <Heading level='h5' text={items.pera} className='shopproduct-pera'/>
                                        <div className='shopproduct-price-box-flex'>
                                            <Heading level='h5' text={items.newprice} className='shopproduct-newprice'/>
                                            <Heading level='h5' text={items.oldprice} className='shopproduct-oldprice'/>
                                        </div>
                                    </div>    
                                </div>
                           </Link>
                        ))
                    }
                </div>
                <div className='singlerelatedproduct-btn-box'>
                    <button className='singlerelatedproduct-btn'>Show More</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Singlerelatedproduct