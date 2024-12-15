import { Outlet, useNavigate } from "react-router-dom"
import useAuth from "../hooks/useAuth"
import { useEffect } from "react";


const AuthLayout = () => {
    const {auth} = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if(auth) {
            navigate("/")
        }
    },[auth])
  return (
   <>
   <Outlet/>
   </>
  )
}

export default AuthLayout