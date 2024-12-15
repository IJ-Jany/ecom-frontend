import { useState } from "react";
import { Auth } from "../Components/Context";


const AuthProvider = ({children}) => {
const [auth, setAuth] = useState(
    localStorage.getItem("e-com")
    ? JSON.parse(localStorage.getItem("e-com"))
    : null
);
   return <Auth.Provider value={{ auth, setAuth}}>
{children}
    </Auth.Provider>

}

export default AuthProvider