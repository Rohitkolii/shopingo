import { useEffect, useReducer } from 'react';
import { createContext, useContext } from 'react'
import axios from 'axios'
import reducer from '../Reducer/Reducer';

const DataContext = createContext();
const API = `${process.env.REACT_APP_URL}/api/products/productslist`

const initialState = {
    isLoading: false,
    isError: false,
    products: [],
    featureProducts : [],
    isSingleLoading: false,
    singleproduct: {}
}

const DataProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    
    const getproducts = async (url) => {
        dispatch({ type: "SET_LOADING"})
        try{
            const res = await axios.get(url)
            const products = await res.data
            dispatch({type: "SET_API_DATA", payload: products})
        } catch (error){
            dispatch( {type: "API_ERROR"} )
        }
    }

    const getSingleProduct = async (url) => {
        dispatch({type: "SET_SINGLE_LOADING"})
        
        try{
            const res = await axios.get(url);
            const SingleProduct = await res.data;
            dispatch({type: "SET_SINGLE_PRODUCT", payload: SingleProduct});
        } catch (error) {
            dispatch( {type: "SET_SINGLE_ERROR"} );
        }

    };

    useEffect(() => {
        getproducts(API)
    }, [])

    return(
        <>
            <DataContext.Provider value={{ ...state, getSingleProduct }}>
                {children}
            </DataContext.Provider>
        </>
    )
}

// customehook
const useProductContext = () => {
    return useContext(DataContext)
}

export {DataProvider, DataContext, useProductContext,};