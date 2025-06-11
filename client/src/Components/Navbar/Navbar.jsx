import { useState } from 'react'
import './Navbar.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Button from '../Button/Button'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useCartContext } from '../Context/CartContext'
import { useEffect } from 'react';
const { Link, useNavigate } = require("react-router-dom")


const Navbar = () => {

    const {userCart, getUserCart} = useCartContext()
    const [hamburger, sethamburger] = useState(false)

    const navigate = useNavigate()
    const Links = {
        Link: '/login',
        LinkText: 'Login'
    }
    

     useEffect(()=> {
        // Total()
        getUserCart(`${process.env.REACT_APP_URL}/api/cart/get/${localStorage.getItem("userid")}`)
    }, [])

    const logoutHandler = ()=> {
        localStorage.removeItem('shopingotoken')
        navigate('/login')
        toast.success('Logout Successfull', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
    }

    const showlogin = () => {
        if(localStorage.getItem('shopingotoken')){
            return <button href='/login' style={{backgroundColor: '#614BC3', padding: '8px 15px', cursor: 'pointer', border: 'transparent', textTransform: 'uppercase'}} onClick={()=> logoutHandler()}>Logout</button>
        } else{
            return <Button Links={Links}/>
        }
    }
    
    return(
        <div className="Navbar">
            <div className="nav-logo">
                <Link to='/'>
                    {/* <h1>Shopin<span>Go</span></h1> */}
                    <img src="images/logo.png" alt="" />
                </Link>
            </div>

            <div className={!hamburger ? 'open-navlinks' : "nav-links"}>
                <ul id="list">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/shop'>Shop</Link></li>
                    <li><Link to='/myorders'>Orders</Link></li>
                    <li><Link to='/more'>More</Link></li>
                    {
                    showlogin()
                    }
                    <li className='carti'><Link to='/cart'><AiOutlineShoppingCart className="cart-btn" /><span>{userCart?.length || '0'}</span></Link></li>
                </ul>
            </div>

            <div onClick={() => sethamburger(!hamburger)} className={!hamburger ? 'hamburger' : 'open-hamburger'}>
                <div className='line1'></div>
                <div className='line2'></div>
                <div className='line3'></div>
            </div>
        </div>
    )
}

export default Navbar;