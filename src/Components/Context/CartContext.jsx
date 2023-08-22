import { createContext, useReducer, useContext } from "react";
import reducer from '../Reducer/CartReducer'

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CartContext = createContext()

const initialState = {
    cart: [],
    itemcount: 1
}

const CartProvider = ({children}) => {
    const [State, dispatch] = useReducer(reducer, initialState)

    const AddToCartHandler = (name, price, color, image, itemcount, ed) => {
        dispatch({type: 'ADDTOCART', payload: {name, price, color, image, itemcount, ed}})
        
        toast.success('Item Added!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
            });
        
        // console.log({name, price, color, image})
        // console.log(ed)
    }

    const SetCartCount = (act) => {
        dispatch({type: act})
    }

    const removeCartItem = (ed) => {
        dispatch({type: 'REMOVE_CART_ITEM', payload: ed})
        console.log(ed)
    }


    return <CartContext.Provider value={{...State, AddToCartHandler, SetCartCount, removeCartItem}}>{children}</CartContext.Provider>
}


const useCartContext = () => {
    return useContext(CartContext)
}

export {CartProvider,  useCartContext}