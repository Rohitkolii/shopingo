import './CartContainer.css'
import {ImBin} from 'react-icons/im'
import {GrFormAdd} from 'react-icons/gr'
import {AiOutlineMinus} from 'react-icons/ai'
import { useState } from 'react'
import { useEffect } from 'react'

const CartContainer = () => {

    const arr = [
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoRsodeWniYCF9EhdRm6-sFs-SsQmdbyLQwA&usqp=CAU',
            name: 'MyName1',
            quantity: '3',
            id: 1,
            price: '3000'
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTwJz0FMSpSBee_NRVpepQL1-P13ouxBkFcjQ&usqp=CAU',
            name: 'MyName1',
            quantity: '2',
            id: 2,
            price: '700'
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTek9i9RongSGDtDlGDxhyqPaWGMLEAUFssFA&usqp=CAU',
            name: 'MyName1',
            quantity: '1',
            id: 3,
            price: '1500'
        },
        {
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoQDCLbUDv7CMPHcmBoIoj6Z8BgJLU3pnHmw&usqp=CAU',
            name: 'MyName1',
            quantity: '5',
            id: 4,
            price: '6000'
        }
    ]

    const [myquantity, setmyquantity] = useState(arr[2].quantity)
    
    const incquantity = (q) => {
        
    }

    const[subtotal, setsubtotal] = useState()

    const Pricing = () => {
        let p = 0;
        arr.map((i) => {
        return p = p + i.quantity * i.price
        })
        
        setsubtotal(p)
    }

    
    useEffect(()=> {
        Pricing()
        // const res = await fetch("https://shopingo-a073c-default-rtdb.firebaseio.com/Shopingo")
        // return setnewdata(res.json())
    }, [])

    return(
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
                        arr && arr.map(({name, image, quantity, price}) => {
                            return(
                            <div key={image} className="cartitem-container">
                                <div className='cartitem-container_one'>
                                    <div className="cartitem-image">
                                        <img src={image} alt={name} />
                                    </div>
                                    <div>
                                        <p>{name}</p>
                                        <p>{"color"}</p>
                                    </div>
                                </div>
                                
                                <div className='cartitem-container_two'>

                                    <p>&#8377; {price}</p>

                                    <div className='product-number'>
                                        <button onClick={() => {incquantity(quantity)}}> <AiOutlineMinus /></button>
                                        <p> { quantity } </p>
                                        <button onClick={() => {setmyquantity(quantity)}}><GrFormAdd /> </button>
                                    </div>

                                    <div className='Total-Cart_item'>
                                    &#8377; {5 * quantity}
                                    </div>

                                    <div className='remove-item'>
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
    )
}

export default CartContainer;