import { createContext, useReducer, useContext } from "react";
import reducer from '../Reducer/CartReducer'

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";

const CartContext = createContext()

const initialState = {
    cart: [],
    userCart: [],
    itemcount: 1
}


const CartProvider = ({children}) => {
    // const [UserID, setUserID] = useState(localStorage.getItem("userid"))
    
    // useEffect(()=>{
    //     setUserID(localStorage.getItem("userid"))
    // },[])

    const [State, dispatch] = useReducer(reducer, initialState)

    const AddToCartHandler = async(product_name, product_price, product_img, itemcount, ed, product_category) => {
        const UserID = localStorage.getItem("userid");
        const data = {
            userId:UserID,
            cart_name:product_name,
            cart_category : product_category,
            cart_price:product_price,
            cart_img:product_img,
            productid:ed,
            itemcount,
        }

        try {
            const res = await fetch(`${process.env.REACT_APP_URL}/api/cart/add`,{
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })

            // console.log(res);
            

            if(res.ok){
                toast.success('Item Added!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            }else{
                toast.error('Make sure you are logedin!', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                });
            }
        } catch (error) {
            console.error(error);
            
        }
    }

    const getUserCart = async(url) => {
        dispatch({ type: "SET_CART_LOADING"})
        try{
            const res = await axios.get(url)
            const UsercartProduct = await res.data
            // console.log("lllllll", UsercartProduct);
            
            dispatch({type: "SET_USER_CART_DATA", payload: UsercartProduct})
        } catch (error){
            dispatch( {type: "API_CART_ERROR"} )
        }
    }

    const SetCartCount = (act) => {
        dispatch({type: act})
    }

    const removeCartItem =  async(ed) => {
        // console.log(ed);
        
        const res = await fetch(`${process.env.REACT_APP_URL}/api/cart/delete/${ed}`,{
                method: "DELETE",
            })
    }

    const getCartproducts = async (url) => {
        dispatch({ type: "SET_CART_LOADING"})
        try{
            const res = await axios.get(url)
            const cartProduct = await res.data
            dispatch({type: "SET_CART_DATA", payload: cartProduct})
        } catch (error){
            dispatch( {type: "API_CART_ERROR"} )
        }
    }


    return <CartContext.Provider value={{...State, AddToCartHandler, SetCartCount, removeCartItem, getCartproducts, getUserCart}}>{children}</CartContext.Provider>
}


const useCartContext = () => {
    return useContext(CartContext)
}

export {CartProvider,  useCartContext}