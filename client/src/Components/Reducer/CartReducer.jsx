const cartReducer = (State, action) => {
    
    if(action.type === "SET_CART_DATA"){
        return{
            ...State,
            cart: [action.payload],
        }
    }

    if(action.type === "SET_USER_CART_DATA"){
        return{
            ...State,
            userCart: action.payload,
        }
    }

    // if(action.type === "INCREMENT"){
    //     return{
    //         ...State,
    //         itemcount: itemcount+1
    //     }
    // }

    // if(action.type === "DECREMENT"){
    //     return{
    //         ...State,
    //         itemcount:itemcount-1
    //     }
    // }

    if(action.type === 'REMOVE_CART_ITEM'){
        console.log(action.payload)
        const updatedcart = State.cart.filter((elm)=> {
            return elm.ed !== action.payload;
        })

        return{
            ...State,
            cart: updatedcart
        }
    }
}

export default cartReducer;