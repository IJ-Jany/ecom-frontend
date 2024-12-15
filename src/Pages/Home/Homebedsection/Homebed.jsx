import React from 'react'
import Heading from '../../../Utils/Heading/Heading'
import imgone from '../../../images/bed_one.png';
import imgtwo from '../../../images/bed_two.png';
import imgthree from '../../../images/bed_three.png';
import './Homebed.css'


let homebedArray = [
    {
        id : 1,
        img : imgone,
        name : "Dining",
    },
    {
        id : 2,
        img : imgtwo,
        name : "Living",
    },
    {
        id : 3,
        img : imgthree,
        name : "Bedroom",
    },
]

const Homebed = () => {
  return (
    <section id='homebed'>
        <div className='container'>
            <div className='homebed-contant-box'>
                <Heading level='h2' text='Browse The Range' className='homebed-header'/>
                <Heading level='h4' text= 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' className='homebed-pera'/>
            </div>
            <div className='homebed-images-container-flex'>
                {
                    homebedArray&&
                    homebedArray.map((items)=> (
                        <div key={items.id} className='homebed-img-container'>
                            <div className="homebed-img-box">
                                <img src={items.img} alt="not found" />
                            </div>
                            <Heading level='h4' text={items.name} className='homebed-name'/>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Homebed