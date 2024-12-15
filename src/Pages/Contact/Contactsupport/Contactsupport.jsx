import React from 'react'
import Heading from '../../../Utils/Heading/Heading';
import imgone from '../../../images/spone.png';
import imgtwo from '../../../images/sptwo.png';
import imgthree from '../../../images/spthree.png';
import imgfour from '../../../images/spfour.png';
import './Contactsupport.css'

let contactSupprotArray = [
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

const Contactsupport = () => {
  return (
    <section id='contactsupport'>
        <div className='container'>
            <div className='contactsupport-contant-wrapper-flex'>
                {
                    contactSupprotArray &&
                    contactSupprotArray.map((item) => (
                        <div key={item.id} className='contactsupport-contant-flex'>
                            <div className='contactsupport-contant-img-box'>
                                <img src={item.img} alt="not found" />
                            </div>
                            <div className='contactsupport-contant-box'>
                                <Heading level='h4' text={item.head} className='contactsupport-contant-head'/>
                                <Heading level='p' text={item.pera} className='contactsupport-contant-pera'/>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
   </section>
  )
}

export default Contactsupport