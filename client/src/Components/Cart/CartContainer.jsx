// 'use client'
import './CartContainer.css'
import {ImBin} from 'react-icons/im'
// import {GrFormAdd} from 'react-icons/gr'
// import {AiOutlineMinus} from 'react-icons/ai'
import { useCartContext } from '../Context/CartContext'
import Button from '../Button/Button'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

import { useNavigate } from 'react-router-dom'

const CartContainer = () => {

    const navigate = useNavigate()

    const Links = {
        Link: '/shop',
        LinkText: 'Shop Now'
    }

    const {userCart, removeCartItem, getUserCart} = useCartContext()
    const[subtotal, setsubtotal] = useState(0)
    console.log(userCart);
    

    const Total = () => {
        let TotalAmount=0;
        userCart && userCart.map((elm) => {
            return TotalAmount += elm.cart_price * elm.itemcount;
        })
        setsubtotal(TotalAmount);
    }

    

    const orderItem = (e) => {
        e.preventDefault();

        try {
            const res = fetch(`${process.env.REACT_APP_URL}/api/order/add`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(userCart)
            })
            
            // console.log(res);
            navigate("/myorders")

        } catch (error) {
            console.log(error);
        }

        // alert("wait")
    }

    useEffect(()=> {
        getUserCart(`${process.env.REACT_APP_URL}1/api/cart/get/${localStorage.getItem("userid")}`)
            Total()
    }, [])

    return(
        <>
        {
        localStorage.getItem('shopingotoken') ?
        <>
        {
        userCart && userCart?.length === 0 ? 
        <div className='empty-con' >
            <img src="Images/cart2.png" alt="" />
            <h1>EMPTY CART</h1>
            <Button Links={Links}></Button>
        </div>

        :


        <div className="Cart-container">
            <div className="inner-cart">
                <div className='cartTable'>
                    <table>
                        <tr>
                            <th>Product</th>
                            <th>Product Name</th>
                            <th>Price</th>
                            <th>Qty</th>
                            <th>Total</th>
                            <th>Remove</th>
                        </tr>
                    {
                        userCart && userCart?.map(({cart_name, cart_price, cart_img, productid, itemcount, _id},i)=> {
                            return(
                                <tr key={i}>
                                    <td>
                                        <img src={`${process.env.REACT_APP_URL}${cart_img}`} alt={cart_name} />
                                    </td>
                                    <td>{cart_name}
                                        <div className='excart'>
                                        <p>Price: {cart_price} - Qty: {itemcount}</p>
                                        <p style={{display:'flex', alignItems:'center', gap:5, cursor:"pointer"}}>Remove <ImBin /></p>
                                        </div>
                                    </td>
                                    <td>{cart_price}</td>
                                    <td>{itemcount}</td>
                                    <td>{itemcount * cart_price}</td>
                                    <td ><ImBin onClick={()=> removeCartItem(_id)} /></td>
                                </tr>
                            )
                        })
                    }
                    </table>
                </div>
                <div className="order-area">
                    <div className='inner_order-area'>
                        <div className='order_pricing'>
                            <div className='subtotal'>
                                <p>Sub Total</p>
                                <p>&#8377; {subtotal}</p>
                            </div>

                            <div className='shipping_charge'>
                                <p>Shipping</p>
                                <p>&#8377; {50}</p>
                            </div>
                        </div>

                        <div className='order_Total'>
                            <p>Grand Total</p>
                            <p>&#8377; {subtotal + 50}</p>
                        </div>

                        <div className='checkoutbtn_container'>
                            <button onClick={orderItem}>Proceed to checkout</button>
                            {/* <p></p> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        }
        </>
        :
        <div className='showiflogout'>
            <img src="images/loginimg.png" alt="" />
            <h1>Please login First</h1>
            <Link to='/login'>Login</Link>
        </div>
        }
        </>
    )

}

export default CartContainer;