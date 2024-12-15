import React from 'react'
import Heading from '../../../Utils/Heading/Heading';
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { MdAccessTimeFilled } from "react-icons/md";
import './Contactform.css'

const Contactform = () => {
  return (
    <section id ='contact-form'>
        <div className='container'>
            <div className='contact-form-contant-wrapper'>
                <div className='contact-form-contant-box'>
                    <Heading level='h2' text='Get In Touch With Us' className='contact-form-contant-head'/>
                    <Heading level='p' text='For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!' className='contact-form-contant-pera'/>
                </div>
                <div className='contact-form-box-flex'>
                    <div className='contact-form-details-box-flex'>
                        <div className='contact-form-details-flex'>
                            <div className='contact-form-details-icon-box'>
                                <FaLocationDot />
                            </div>
                            <div className='contact-form-details-box'>
                                <Heading level='h4' text='Address' className='contact-form-details-box-head'/>
                                <Heading level='p' text='236 5th SE Avenue, New York NY10000, United States' className='contact-form-details-box-pera'/>
                            </div>
                        </div>
                        <div className='contact-form-details-flex'>
                            <div className='contact-form-details-icon-box'>
                                <FaPhoneAlt />
                            </div>
                            <div className='contact-form-details-box'>
                                <Heading level='h4' text='Phone' className='contact-form-details-box-head'/>
                                <Heading level='p' text='Mobile: +(84) 546-6789' className='contact-form-details-box-pera'/>
                                <Heading level='p' text='Hotline: +(84) 456-6789' className='contact-form-details-box-pera'/>
                            </div>
                        </div>
                        <div className='contact-form-details-flex'>
                            <div className='contact-form-details-icon-box'>
                                <MdAccessTimeFilled />
                            </div>
                            <div className='contact-form-details-box'>
                                <Heading level='h4' text='Working Time' className='contact-form-details-box-head'/>
                                <Heading level='p' text='Monday-Friday: 9:00 - 22:00 Saturday-Sunday: 9:00 - 21:00' className='contact-form-details-box-pera'/>
                            </div>
                        </div>
                    </div>
                    <div className='contact-form-input-containers'>
                        <div className='contact-form-input-contant-box'>
                            <Heading level='p' text='Your name' className='contact-form-input'/>
                            <div className="contact-form-input-box">
                                <input type="text" placeholder='name' />
                            </div>
                        </div>
                        <div className='contact-form-input-contant-box'>
                            <Heading level='p' text='Email address' className='contact-form-input'/>
                            <div className="contact-form-input-box">
                                <input type="text" placeholder='Abc@def.com' />
                            </div>
                        </div>
                        <div className='contact-form-input-contant-box'>
                            <Heading level='p' text='Subject' className='contact-form-input'/>
                            <div className="contact-form-input-box">
                                <input type="text" placeholder='This is an optional' />
                            </div>
                        </div>
                        <div className='contact-form-input-contant-box'>
                            <Heading level='p' text='Message' className='contact-form-input'/>
                            <div className='contact-form-input-box'>
                                <input type="text" placeholder='Hi! i’d like to ask about' />
                            </div>
                        </div>
                        <div className='contact-form-input-btn-box'>
                            <button className='contact-form-input-btn'>submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contactform