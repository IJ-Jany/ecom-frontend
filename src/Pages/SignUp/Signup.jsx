import  {  useState } from 'react';
import {  useNavigate } from 'react-router-dom';
import Heading from '../../Utils/Heading/Heading';
import Button from '../../Components/Button/Button';
import { Oval } from 'react-loader-spinner';
import img from '../../images/class-ecom-sign-img.jpg';
import { IoMdEye } from "react-icons/io";
import { IoIosEyeOff } from "react-icons/io";
import './Signup.css';
import { useRegisterMutation } from '../../Redux/apiSlice';


const Signup = () => {
    const navigate = useNavigate()

    const [checktype , setChecktype] = useState(false);
    const [register,{isLoading, isError}] = useRegisterMutation()

    //this useState recive the signup data
    const [signinData , setSigninData] = useState({
        displayname : "",
        email : "",
        password : "",
        phonenumber : ""
    });

    //this useState send the error when user empty the input box and press the login button;
    const [sendError , setSendError] = useState({
        displayname : "",
        email : "",
        password : "",
        phonenumber : ""
    });

    const handelform = (e)=>{
        let {name , value} = e.target
        setSigninData({...signinData,[name]:value})
    };

//email regex
    const emailregex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/ 

    //password regex
    const password_pattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;

    const signinBtn = async (e)=>{
        e.preventDefault();
            //validation
        if(!signinData.displayname){
            setSendError({displayname:"User Name is Require"})
        }else if(!signinData.email){
            setSendError({displayname: ""})
            setSendError({email : "Email is Require"})
        }else if(!signinData.email.match(emailregex)){
            setSendError({email: ""})
            setSendError({email :"Inter valid Email"})
        }else if(!signinData.password){
            setSendError({email: ""})
            setSendError({password : "Passowrd is Require"})
        }else if(!signinData.password.match(password_pattern)){
            setSendError({password : ""})
            setSendError({password : "Strong Password"})
        }else if(!signinData.phonenumber){
            setSendError({password: ""})
            setSendError({phonenumber:"Phone Number is Require"})
        }else{
        const data = await register(signinData)
        console.log(data.data)
        if(!isLoading && !isError){
            navigate(`/verify/${data.data.data.email}`)
        }
        }
    }
   
  return (
    <section id='signin-page'>
        <div className='signin-page-wrapper'>
            <div className='signin-image-box'>
                <img src={img} alt="not found" />
            </div>
            <div className='signin-user-details-box'>
                <div className='signin-form-user-all-details-box'>
                    <div className='signin-user-details'>
                        <Heading level='h2' text='Create your account' className='signin-page-head'/>
                        <Heading level='p' text='Create your personal account' className='signin-page-pera'/>
                    </div>
                    <form className='signin-form-box'>
                        <Heading level='p' text="User Name" className="signin-fullname-style"/>
                        <div className='signin-email-input-box'>
                            <input className='signin-fullname-input' type='text' placeholder='Enter your name' name="displayname" onChange={handelform}/>
                            {sendError.displayname && <p className='signin-lonin-error'>{sendError.displayname}</p>}
                        </div>
                        <Heading level='p' text="Email Address" className="signin-email-style"/>
                        <div className='signin-email-input-box'>
                            <input className='signin-email-input' type='email' placeholder='Enter your email' name="email" onChange={handelform}/>
                            {sendError.email && <p className='signin-lonin-error'>{sendError.email}</p>}
                        </div>
                        <Heading level='p' text="password" className="signin-password-style"/>
                        <div className='signin-password-input-box'>
                            <input className='signin-password-input' type={checktype ?'password':"text"} placeholder='Enter your password' name="password" onChange={handelform}/>

                            {  
                                checktype  
                                ?
                                <IoIosEyeOff className='signup-closs_eye' onClick={()=>{setChecktype(!checktype)}}/>
                                :
                                <IoMdEye className='signup-open_eye' onClick={()=>{setChecktype(!checktype)}} />
                            }
                            {sendError.password && <p className='signin-lonin-error'>{sendError.password}</p>}
                        </div>
                        <Heading level='p' text="Phone Number" className="signin-number-style"/>
                        <div className='signin-number-input-box'>
                            <input className='signin-number-input' type='tel' placeholder='Enter your Phone Number' name="phonenumber" onChange={handelform}/>
                            {sendError.phonenumber && <p className='signin-lonin-error'>{sendError.phonenumber}</p>}
                        </div>
                        <div className='signin-form-signin-btn-box'>
                            {
                                isLoading
                                ?
                                (<Oval
                                    visible={true}
                                    height="25"
                                    width="25"
                                    color="#000"
                                    ariaLabel="oval-loading"
                                    wrapperStyle={{}}
                                    wrapperClass="oval"
                                    />)
                                :
                                <Button Submit={signinBtn} text='signin' style='signin-form-signin-btn'/>
                            }
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Signup