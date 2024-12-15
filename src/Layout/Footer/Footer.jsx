import React from 'react'
import { Link } from 'react-router-dom';
import Heading from '../../Utils/Heading/Heading';
import footerlogo from '../../images/footer-logo.png'
import './Footer.css'


const Footer = () => {
  return (
    <footer id = 'footer'>
      <div className="container">
        <div className="footer-navbar-flex">
         <div className="footer-logo-container">
            <div className="footer-logo-head-box">
            <Heading level='h3' text='Funiro.' className='footer-logo-head'/>
            </div> 
            <div className='footer-pera-box'>
              <Heading level='p' text='400 University Drive Suite 200 Coral Gables,' className='footer-pera'/>
'             <Heading level='p' text='FL 33134 USA' className='footer-pera'/>
            </div>
         </div>
         <div className='footer-link-container-flex'>
            <div className='footer-link-box'>
              <Heading level ='h4' text='link' className='footer-link-head'/>
              <ul className="footer-link-flex">
                <li>
                  <Link to ='home'>home</Link>
                </li>
                <li>
                  <Link to ='shop'>shop</Link>
                </li>
                <li>
                  <Link to ='about'>about</Link>
                </li> 
                <li>
                  <Link to ='contact'>contact</Link>
                </li>
              </ul>
            </div>
            <div className='footer-link-box'>
              <Heading level ='h4' text='help' className='footer-link-head'/>
              <ul className="footer-link-flex">
                <li>
                  <Link to ='praymentoption'>Payment Options</Link>
                </li>
                <li>
                  <Link to ='returns'>Returns</Link>
                </li>
                <li>
                  <Link to ='privacypolicies'>Privacy Policies</Link>
                </li> 
              </ul>
            </div>
            <div className="footer-link-box">
              <Heading level ="h4" text='newsleter' className='footer-link-head'/>
              <div className="footer-subs-box-flex">
                <div className="footer-link-input-box">
                  <input type="text" placeholder='Enter Your Email Address'/>
                </div>
                <div className="footer-subs-btn-box">
                  <button className='footer-subs-btn'>SUBSCRIBE</button>
                </div>
              </div>
            </div>
         </div>
        </div>
        <div className="footer-copyright-box">
          <Heading level='p' text='2023 furino. All rights reverved' className='footer-copyright-contant'/>
        </div>
      </div>
    </footer>
  )
}

export default Footer