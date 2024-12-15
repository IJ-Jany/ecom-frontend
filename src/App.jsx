import {
  createRoutesFromElements,
  createBrowserRouter,
  Route,
  RouterProvider
} from "react-router-dom";
import Main from "./Layout/Main/Main";
import Home from "./Pages/Home/Home";
import Shop from "./Pages/Shop/Shop";
import Contact from "./Pages/Contact/Contact";
import Singleproduct from "./Pages/Sigleproduct/Singleproduct";
import Signup from "./Pages/SignUp/Signup";
import Login from "./Pages/Login/Login";
import Errorpage from "./Pages/Errorpage/Errorpage";
import Forgetpassword from "./Pages/Forgetpassword/Forgetpassword";
import Cart from "./Pages/Cart/Cart";
import AuthProvider from "./provider/AuthProvider";
import AuthLayout from "./Pages/AuthLayout";
import Verify from "./Pages/verify";



function App() {
 
  const router = createBrowserRouter(
    createRoutesFromElements(
     <Route>
       <Route element ={<AuthLayout/>}>
       <Route path="/login" element = {<Login/>}/>
       <Route path="/signup" element = {<Signup/>}/>
       </Route>
       
        <Route path="/forgetpass" element = {<Forgetpassword/>}/>
        <Route path='*' element = {<Errorpage/>}/>
        <Route element ={<Main/>}>
          <Route path="/" element = {<Home/>}/>
          <Route path="/shop" element = {<Shop/>}/>
          <Route path="/contact" element = {<Contact/>}/>
          <Route path="/singleproduct/:slug" element = {<Singleproduct/>}/>
          <Route path="/cart" element = {<Cart/>}/>
          <Route path="/verify/:mail" element = {<Verify/>}/>
        </Route>
     </Route>
    )
  );

  return (
    <AuthProvider>
      <RouterProvider
      router={router}
    />
    </AuthProvider>
  )
}

export default App
