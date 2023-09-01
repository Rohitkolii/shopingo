// 'use client'
import './CartContainer.css'
import {ImBin} from 'react-icons/im'
// import {GrFormAdd} from 'react-icons/gr'
// import {AiOutlineMinus} from 'react-icons/ai'
import { useCartContext } from '../Context/CartContext'
import Button from '../Button/Button'
import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const CartContainer = () => {

    const Links = {
        Link: '/shop',
        LinkText: 'Shop Now'
    }

    const {cart, removeCartItem} = useCartContext()

    const[subtotal, setsubtotal] = useState(0)

    const Total = () => {
        let TotalAmount=0;
        cart.map((elm) => {
            return TotalAmount += elm.price * elm.itemcount;
        })
        setsubtotal(TotalAmount);
    }

    useEffect(()=> {
        Total()
        // eslint-disable-next-line
    }, [cart])


    const colorName = (color) => {
        if(color === '#22D3EF') return 'Cyan'
        else if(color === '#ff0000') return 'Red'
        else if(color === '#CDD0D0') return 'Gray'
        else if(color === '#000') return 'Black'
        else if(color === '#000000') return 'Black'
        else return 'No color'
    }

    return(
        <>
{

    localStorage.getItem('shopingotoken') ?
    <>
        {
        cart.length === 0 ? 
        <div className='empty-con' >
            <img src="Images/cart2.png" alt="" />
            <h1>EMPTY CART</h1>
            <Button Links={Links}></Button>
        </div>

        :


        <div className="Cart-container">
            <div className="inner-cart">
                <div className="cart-area">
                    <div className='cartitem-container cartitem-container_heading'>
                        <p>Product & Name</p>
                        <p>Price</p>
                        <p>Quantity</p>
                        <p>Total</p>
                        <p></p>
                    </div>
                    {
                        cart && cart.map(({name, price, color, image, itemcount, ed}, index) => {

                            return(
                            <div key={index} className="cartitem-container">
                                <div className='cartitem-container_one'>
                                    <div className="cartitem-image">
                                        <img src={image[0].url} alt={name} />
                                    </div>
                                    <div>
                                        <p>{name}</p>
                                        <p>{
                                                colorName(color)
                                            }
                                            </p>
                                    </div>
                                </div>
                                
                                <div className='cartitem-container_two'>

                                    <p>&#8377; {price}</p>

                                    <div className='product-number'>
                                        {/* <button onClick={()=> SetCartCount('DECREMENT')}> <AiOutlineMinus /></button> */}
                                        <p> { itemcount } </p>
                                        {/* <button onClick={()=> SetCartCount('INCREMENT')}><GrFormAdd /> </button> */}
                                    </div>

                                    <div className='Total-Cart_item'>
                                    &#8377; {itemcount * price}
                                    </div>

                                    <div onClick={()=> removeCartItem(ed)} className='remove-item'>
                                        <ImBin className='remove-itemi' />
                                    </div>
                                </div>

                            </div>

                            )
                        })
                    }
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
                            <button>Proceed to checkout</button>
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