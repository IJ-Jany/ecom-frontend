import React from 'react'
import Heading from '../../../Utils/Heading/Heading';
import imgone from '../../../images/spone.png';
import imgtwo from '../../../images/sptwo.png';
import imgthree from '../../../images/spthree.png';
import imgfour from '../../../images/spfour.png';
import './Shopsupport.css';

let shopSupprotArray = [
    {
        id : 1 ,
        img : imgone,
        head : 'High Quality',
        pera : 'crafted from top materials'
    },
    {
        id : 2 ,
        img : imgtwo,
        head : 'Warranty Protection',
        pera : 'Over 2 years'
    },
    {
        id : 3 ,
        img : imgthree,
        head : 'Free Shipping',
        pera : 'Order over 150 $'
    },
    {
        id : 4 ,
        img : imgfour,
        head : '24 / 7 Support',
        pera : 'Dedicated support'
    }
]

const Shopsupport = () => {
  return (
   <section id='shopsupport'>
        <div className='container'>
            <div className='shopsupport-contant-wrapper-flex'>
                {
                    shopSupprotArray &&
                    shopSupprotArray.map((item) => (
                        <div key={item.id} className='shopsupport-contant-flex'>
                            <div className='shopsupport-contant-img-box'>
                                <img src={item.img} alt="not found" />
                            </div>
                            <div className='shopsupport-contant-box'>
                                <Heading level='h4' text={item.head} className='shopsupport-contant-head'/>
                                <Heading level='p' text={item.pera} className='shopsupport-contant-pera'/>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
   </section>
  )
}

export default Shopsupport