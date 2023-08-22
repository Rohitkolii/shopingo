const cartReducer = (State, action) => {
    const {itemcount}=State;
    if(action.type === 'ADDTOCART'){

        const {name, price, color, image,itemcount, ed} = action.payload;

        const cartclone = {
            name,
            price,
            color,
            image,
            itemcount,
            ed
        }
        return{
            ...State,
            cart: [...State.cart, cartclone]
        }
    }

    if(action.type === "INCREMENT"){
        return{
            ...State,
            itemcount: itemcount+1
        }
    }

    if(action.type === "DECREMENT"){
        return{
            ...State,
            itemcount:itemcount-1
        }
    }

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