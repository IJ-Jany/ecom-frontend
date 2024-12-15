
import Sizebutton from '../../../Components/Sizebutton/Sizebutton';
import Colorbox from '../../../Components/Colorbox/Colorbox';
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";
import { Link } from 'react-router-dom';

import { FaRegStar } from "react-icons/fa";
import './Singleproductcontainer.css'



 
const Singleproductcontainer = ({data: {product}}) => {
  
console.log(product)
    

  return (
    <section id = 'singleproduct-container'>
        <div className='container'>

                    <div  className='singleproduct-container-flex'>
                        <div className='singleproduct-container-images-box-flex'>
                            <div className='singleproduct-container-small-images-box-flex'>
                               
                                  {
                                    product.gallery.map((img) =>
                                         (
                                            <div className='singleproduct-container-small-box'>
                                        <img src={img.imagePath} alt='not found/>
                                          </div>
                                    ))
                                  }
                              
                               
                            </div>
                            <div className='singleproduct-container-big-images-box'>
                             <img src={product?.thumbnail?.imagePath} alt="" />  
                            </div>
                        </div>
                        <div className='singleproduct-container-contant-box'>
                            <Heading level='h2' text={product.title} className='singleproduct-container-contant-head'/>*/}
                          {/*  <Heading level='h4' text={data.newprice} className='singleproduct-container-contant-price'/>*/}
                            <div className='singleproduct-conatiner-star-box-flex'>
                                <div className='singleproduct-container-star-box'>
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                    <FaRegStar />
                                </div>
                                <div className='singleproduct-container-reviews-box'>
                                    {/*<Heading level='p' text={items.review} className='singleproduct-container-reviews-contant'/>*/}
                                </div>
                            </div>
                            {/*<Heading level='p' text={items.description} className='singleproduct-container-details'/>*/}
                            <div className='singleproduct-container-size-box'>
                                {/*<Heading level='p' text={items.size} className='singleproduct-container-size-box-head'/>*/}
                                <div className='singleproduct-container-sixe-box-flex'>
                                    <Sizebutton text='L' className='singleproduct-container-sixe'/>
                                    <Sizebutton text='XL' className='singleproduct-container-sixe'/>
                                    <Sizebutton text='Xs' className='singleproduct-container-sixe'/>
                                </div>
                            </div>
                            <div className='singleproduct-container-color-box'>
                               {/* <Heading level='p' text={items.color} className='singleproduct-container-color-box-head'/>*/}
                                <Colorbox/>
                            </div>
                            <div className='singleproduct-container-cart-box-flex'>
                                <div className="singleproduct-container-cound-box-flex">
                                  
                                </div>
                                <div className="singleproduct-container-add-box">
                                    <button className='singleproduct-container-add-cart-btn'>add to cart</button>
                                </div>
                                <div className="singleproduct-container-compare-box">
                                    <button className='singleproduct-container-compare-btn'>+ compare</button>
                                </div>
                            </div>
                            <div className='singleproduct-mini-details-box'>
                                <div className="singleproduct-mini-contant-box-flex">
                                   {/* <Heading level='p' text='SKU   :' className='singleproduct-mini-contant-s'/>*/}
                                   {/* <Heading level='p' text={items.sku} className='singleproduct-mini-contant-v'/>*/}
                                </div>
                                <div className='singleproduct-mini-contant-box-flex'>
                                   {/* <Heading level='p' text='category  :' className='singleproduct-mini-contant-s'/>*/}
                                   {/* <Heading level='p' text={items.category} className='singleproduct-mini-contant-v'/>*/}
                                </div>
                                <div className='singleproduct-mini-contant-box-flex'>
                                  {/*  <Heading level='p' text='tags  :' className='singleproduct-mini-contant-s'/>*/}
                                   {/* <Heading level='p' text={items.tags} className='singleproduct-mini-contant-v'/>*/}
                                </div>
                                <div className="singleproduct-mini-icon-box-flex">
                                   {/* <Heading level='p' text='share  :' className='singleproduct-mini-contant-s'/>*/}
                                    <div className="singleproduct-mini-icon-flex">
                                        <Link to = "facebook" className="singleproduct-mini-icon">
                                            <FaFacebookF />
                                        </Link>
                                        <Link to = "linkdin" className="singleproduct-mini-icon">
                                            <FaLinkedinIn />
                                        </Link>
                                        <Link to = "twiter" className="singleproduct-mini-icon">
                                            <FaTwitter />
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>

        </div>
        </div>
    </section>
  )
}


export default Singleproductcontainer