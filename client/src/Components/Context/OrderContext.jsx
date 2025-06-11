import axios from "axios";
import { useReducer } from "react";
import { useContext } from "react";
import { createContext } from "react";

const OrderContext = createContext()

const initialState = {
    TotalOrders: [],
    UserOrders:[],
    isOrderLoading:false,
    isUserOrderLoading:false,
}


const OrderReducer = (state, action) => {
    if(action.type === "SET_ORDER_LOADING"){
        return {
            ...state,
            isOrderLoading:true
        }
    }
    
    if(action.type === "SET_USER_ORDER_LOADING"){
        return {
            ...state,
            isUserOrderLoading:true
        }
    }

    if(action.type === "SET_ORDER_DATA"){
        return {
            ...state,
            TotalOrders:action.payload,
            isOrderLoading:false
        }
    }

    if(action.type === "SET_USER_ORDER_DATA"){
        return {
            ...state,
            UserOrders:action.payload,
            isUserOrderLoading:false
        }
    }

    if(action.type === "API_ERROR"){
        return {
            ...state,
            isOrderLoading:false
        }
    }
    if(action.type === "USER_API_ERROR"){
        return {
            ...state,
            isUserOrderLoading:false
        }
    }
}


const OrderProvider = ({children})=> {

    const[state, dispatch] = useReducer(OrderReducer, initialState)
    const getOrders = async() => {
        dispatch({type: "SET_ORDER_LOADING"})
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/order/get`)
            const data = res.data;
            // console.log(res);
            // console.log(data);
            dispatch({type: "SET_ORDER_DATA", payload:data})
            
        } catch (error) {
            console.log(error);
            dispatch( {type: "API_ERROR"} )
        }
    }


    const getUserOrders = async() => {
        dispatch({type: "SET_USER_ORDER_LOADING"})
        try {
            const res = await axios.get(`${process.env.REACT_APP_URL}/api/order/get/${localStorage.getItem("userid")}`)
            const data = res.data;
            console.log(data);
            
            dispatch({type: "SET_USER_ORDER_DATA", payload:data})
            
        } catch (error) {
            console.log(error);
            dispatch( {type: "USER_API_ERROR"} )
        }
    }


    return <OrderContext.Provider value={{...state, getOrders, getUserOrders}}>{children}</OrderContext.Provider>
}

const useOrder = () => {
    return useContext(OrderContext)
}



export {OrderProvider,  useOrder}