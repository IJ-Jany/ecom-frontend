import React, { useState } from 'react'
import Heading from '../../Utils/Heading/Heading';
import logo from '../../images/furniro-logo.png';
import forgetlogo from '../../images/forgetpass-icon.jpg';
import { IoIosArrowBack } from "react-icons/io";
import { Oval } from 'react-loader-spinner';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import './Forgetpassword.css';

const Forgetpassword = () => {

    const navigate = useNavigate()

    const [reactLoder , setReactLoder] = useState(false);
    const [checktype , setChecktype] = useState(false)

    const [forgetData , setForgetData] = useState({
        email : "",
        newpassword : ""
    });

    const [error, setError] = useState({
        email : "",
        newpassword : ""
    });

    const handleData = (e) => {
        let {name , value} = e.target;
        setForgetData({...forgetData , [name]:value});
    };

        //email regex
    const emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 


    const submitButton = async (e) => {
        e.preventDefault();
        if(!forgetData.email){
            setError({email : "Email is require"});
        }else if(!forgetData.email.match(emailregex)){
            setError({email : ""});
            setError({email : "Inter your formet email"});
        }else if(!forgetData.newpassword){
            setError({newpassword : "New password id require"});
        }else{
            setError({newpassword: ""});
            setReactLoder(true);
            //react loder ture
            setTimeout(()=> {
                setReactLoder(true);
            } , 5000)

            try {
                const response = await axios.post("http://localhost:5000/api/v1/user/forget/password" , forgetData).then(()=> {
                    navigate("/");
                    alert("your password chenge successfully");
                });
            } catch (error) {
                console.log("forget password send errror", error.message);
            };
        };
        setTimeout(()=> {
            setReactLoder(false);
        } , 5000)
    }; 

  return (
    <div id = 'forgetpassword'>
        <div className='container'>
            <div className='forgetpass-containt-wrapper'>
                <div className='forgetpass-logo-box'>
                    <img src={logo} alt="not found" />
                </div>
                <form className='forgetpass-form-box'>
                    <div className='forgetpass-contant-box'>
                        <div className='forgetpass-img-box'>
                            <img src={forgetlogo} alt="not found" />
                        </div>
                        <Heading level='h2' text='forget password' className='forgetpassword-head'/>
                        <Heading level='p' text='Enter your email and reset your password' className='fogetpaee-pera'/>
                    </div>
                    <Heading level='p' text="Email Address" className='forgetpass-email-style'/>
                    <div className='forgetpass-email-input-box'>
                        <input className='forgetpass-email-input' type='email' placeholder='Enter your email' name="email" onChange={handleData} />
                        {error.email && <p className='lonin-error'>{error.email}</p>}
                    </div>
                    <Heading level='p' text='New Password' className="forgetpass-pass-style"/>
                    <div className='forgetpass-newpass-input-box'>
                        <input className='forgetpass-newpass-input' type={checktype ? "password" : "text"} placeholder='Enter your new password' name="newpassword"  onChange={handleData}/>
                        {  
                            checktype  
                            ?
                            <IoIosEyeOff className='forget-closs_eye' onClick={()=>{setChecktype(!checktype)}}/>
                            :
                            <IoMdEye className='forget-open_eye' onClick={()=>{setChecktype(!checktype)}} />
                        }
                        {error.newpassword && <p className='lonin-error'>{error.newpassword}</p>}
                    </div>
                    <div className='forgetpass-button-box'>
                        {
                            reactLoder &&
                            reactLoder
                            ?
                            (<Oval
                                visible={true}
                                height="30"
                                width="30"
                                color="#fff"
                                ariaLabel="oval-loading"
                                wrapperStyle={{}}
                                wrapperClass="ovalforget"
                                />)
                            :
                            <button className='forgetpass-button' onClick={submitButton}>Submit</button>
                        }
                    </div>
                    <div className='forget-back-login-box'>
                        <IoIosArrowBack />
                        <Link to='/' className='forget-back-login'>back to login</Link>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Forgetpassword