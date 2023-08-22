import { useState } from 'react'
import './Navbar.css'
import {AiOutlineShoppingCart} from 'react-icons/ai'
import Button from '../Button/Button'
import { useCartContext } from '../Context/CartContext'
const { Link } = require("react-router-dom")

const Navbar = () => {

    const {cart} = useCartContext()

    const [hamburger, sethamburger] = useState(false)

    const Links = {
        Link: '/login',
        LinkText: 'Login'
    }
    return(
        <div className="Navbar">
            <div className="nav-logo">
                <Link to='/'>
                    <h1>Shopin<span>Go</span></h1>
                </Link>
            </div>

            <div className={!hamburger ? 'open-navlinks' : "nav-links"}>
                <ul id="list">
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/shop'>Shop</Link></li>
                    <li><Link to='/blogs'>Blogs</Link></li>
                    <li><Link to='/more'>More</Link></li>
                    <Button Links={Links}/>
                    <li className='carti'><Link to='/cart'><AiOutlineShoppingCart className="cart-btn" /><span>{cart.length !== 0 ? cart.length : '0'}</span></Link></li>
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