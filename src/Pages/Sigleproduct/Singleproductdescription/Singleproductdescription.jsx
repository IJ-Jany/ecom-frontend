import React from 'react'
import { Link } from 'react-router-dom';
import Heading from '../../../Utils/Heading/Heading';
import img from '../../../images/description-img.png';
import './Singleproductdescription.css'

const Singleproductdescription = () => {
  return (
    <section id ='singleproductdescription'>
        <div className='container'>
           <div className='singleproductdescription-contant'>
                <div className='singleproductdescription-box-flex'>
                    <Link to = "description">Description</Link>
                    <Link to = "additional">Additional Information</Link>
                    <Link to = "reviews">Reviews [5]</Link>
                </div>
                <div className='singleproduct-pera-box'>
                    <Heading level='p' text='Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.' className='pera-top'/>
                    <Heading level='p' text='Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.' className='pera-buttom'/>
                </div>
           </div>
        </div>
        <div className='images-box-flex'>
            <div className='images-box'>
                <img src={img} alt='not found' />
            </div>
            <div className='images-box'>
                <img src={img} alt='not found' />
            </div>
        </div>
    </section>
  )
}

export default Singleproductdescription