import { Link } from 'react-router-dom'
import './Footer.css'
import {FaFacebookF, FaLinkedinIn, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return(
        <div className='Footer'>
            <div className='inner-Footer'>
                <div className='Footer1'>
                    <div className='Footerform'>
                        <h2>ShopinGo</h2>
                        <p>Lorem, ipsum dolor sit consectetur <br /> adipisicing elit?</p>
                        <input type="email" placeholder='Your email here' />
                    </div>
                    <div className='Footeraddress'>
                        <h2>Address</h2>
                        <p>20, Awesome Road, <br /> New Delhi, 532C</p>
                        <p> &#9990; +91 9999888852</p>
                        <p>contact@shopingo.com</p>
                    </div>
                    <div className='Footerlink'>
                        <h2>Useful Links</h2>
                        <Link to='/'>Shop Coupon</Link>
                        <Link to='/'>About us</Link>
                        <Link to='/'>Carrier</Link>
                        <Link to='/'>Support</Link>
                    </div>
                    <div className='Footercategories'>
                        <h2>Categories</h2>
                            <div className='footercategories-inner'>
                                <Link to='/'>Mens</Link>
                                <Link to='/'>Womens</Link>
                                <Link to='/'>Kids</Link>
                                <Link to='/'>Accesories</Link>
                            </div>
                            <div className='footercategories-inner'>
                                <Link to='/'>Bags</Link>
                                <Link to='/'>jewellery</Link>
                                <Link to='/'>Cloths</Link>
                                <Link to='/'>Beauty Items</Link>
                            </div>
                    </div>
                </div>

                <div className='Footer2'>
                    <div className='social-links'>
                        <p><Link to='/'><FaFacebookF /></Link></p>
                        <p><Link to='/'><FaTwitter /></Link></p>
                        <p><Link to='/'><FaLinkedinIn /></Link></p>
                        <p><Link to='/'><FaYoutube /></Link></p>
                    </div>
                    <div className='payment-mode'>
                        <p>paypal</p>
                        <p>payTm</p>
                        <p>Gpay</p>
                        <p>Visa</p>
                        <p>Phone Pay</p>
                    </div>
                </div>

                <div className='Footer3'>
                    <div className='copyright'>
                        <p>All right reserved <Link to='/'> ShopinGo </Link>c 2022</p>
                    </div>
                    <div className='policy-links'>
                        <ul>
                            <li><Link>Terms n Condition</Link></li>
                            <li><Link>Privacy Policy</Link></li>
                            <li><Link>Legal</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;