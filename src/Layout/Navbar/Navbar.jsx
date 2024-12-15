
import logo from '../../images/furniro-logo.png';
import { Link } from 'react-router-dom';
import { RiAccountCircleLine } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";
import { BsCart3 } from "react-icons/bs";
import './Navbar.css'
import Button from '../../Components/Button/Button';
import useAuth from '../../hooks/useAuth';
import { useLogoutMutation } from '../../Redux/apiSlice';

const Navbar = () => {
  const {auth, setAuth} = useAuth()
  const [logout] = useLogoutMutation()
const handlelogout = async () => {
    await logout()
    localStorage.removeItem("e-com")
    setAuth(null)
}
  return (
    <nav id='navbar'>
        <div className='container'>
            <div className='nav-wrapper'>
                <div className='nav-logo-container'>
                    <img src={logo} alt='not found' />
                </div>
                <div className='nav-pages-container'>
                    <ul className='nav-pages-items'>
                        <li>
                            <Link to ='/'>home</Link>
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
                <div className='nav-icons-container'>
                    <Link className='nav-icon-box' to = "userprofile">
                        <RiAccountCircleLine />
                    </Link>
                    <Link className='nav-icon-box' to = "search">
                        <IoSearchOutline />
                    </Link>
                    <Link className='nav-icon-box' to ="heart">
                        <FaRegHeart />
                    </Link>
                    <Link className='nav-icon-box' to = "cart">
                        <BsCart3 />
                    </Link>
                    {
                        auth ? (
                            <Button style="nav-logout" text={"logout"} Submit={handlelogout}/>
                        ) : (
                            <Link className='nav-login' to = "login">
                            Login
                        </Link>
                        )
                    }
                   
                    
                     
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Navbar