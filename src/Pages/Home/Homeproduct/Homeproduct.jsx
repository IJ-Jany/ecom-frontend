import React from 'react'
import Heading from '../../../Utils/Heading/Heading';
import productone from '../../../images/productone.png';
import producttwo from '../../../images/producttwo.png';
import productthree from '../../../images/productthree.png';
import productfour from '../../../images/productfour.png';
import productfive from '../../../images/productfive.png';
import productsix from '../../../images/productsix.png';
import productseven from '../../../images/productseven.png';
import producteight from '../../../images/productone.png';
import './Homeproduct.css';

let homeProductArray = [
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
    },
    {
        id : 5, 
        name : "Syltherine",
        pera : "Stylish cafe chair",
        img : productfive,
        newprice : "Rp 2.500.000",
        oldprice : "Rp 3.500.000"
    },
    {
        id : 6 , 
        name : "Syltherine",
        pera : "Stylish cafe chair",
        img : productsix,
        newprice : "Rp 2.500.000",
        oldprice : "Rp 3.500.000"
    },
    {
        id : 7 , 
        name : "Syltherine",
        pera : "Stylish cafe chair",
        img : productseven,
        newprice : "Rp 2.500.000",
        oldprice : "Rp 3.500.000"
    },
    {
        id : 8 , 
        name : "Syltherine",
        pera : "Stylish cafe chair",
        img : producteight,
        newprice : "Rp 2.500.000",
        oldprice : "Rp 3.500.000"
    },
]

const Homeproduct = () => {
  return (
    <section id='homeproduct'>
        <div className='container'>
            <div className='homeproduct-contant-wrapper'>
                <div className='homeproduct-header-box'>
                    <Heading level='h2' text='Our Products' className='homeproduct-head'/>
                </div>
                <div className='homeproduct-images-container-flex'>
                    {
                        homeProductArray&&
                        homeProductArray.map((items)=> (
                            <div key={items.id} className='homeproduct-img-container'>
                                <div className='homeproduct-img-box'>
                                    <img src={items.img} alt='not found' />
                                </div>
                                <div className='homeproduct-image-contant-box'>
                                    <Heading level='h4' text={items.name} className='homeproduct-name'/>
                                    <Heading level='h5' text={items.pera} className='homeproduct-pera'/>
                                    <div className='homeproduct-price-box-flex'>
                                        <Heading level='h5' text={items.newprice} className='homeproduct-newprice'/>
                                        <Heading level='h5' text={items.oldprice} className='homeproduct-oldprice'/>
                                    </div>
                                </div>    
                            </div>
                        ))
                    }
                </div>
                <div className="homeproduct-link-box">
                    <button className='homeproduct-link'>show more</button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Homeproduct