import React, { useEffect } from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer/Footer'
import Cookies from 'js-cookie'
import { useNavigate } from 'react-router-dom'


const Main = () => {
  const navigate = useNavigate()
 /* useEffect(()=> {
    if(!Cookies.get("accessToken")){
      navigate("/")
    }
  },[])*/
  return (
   <>
        <Navbar/>
            <Outlet/>
        <Footer/>
   </>
  )
}

export default Main