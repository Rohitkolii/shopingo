const cartReducer = (State, action) => {
    const {itemcount}=State;
    if(action.type === 'ADDTOCART'){

        const {name, price, color, image,itemcount, ed} = action.payload;

        let existing = State.cart.find((elm) => elm.ed === ed+color)

        if(existing) {
            let updatedproduct = State.cart.map((elm) => {
                if(elm.ed === ed+color){
                    let newq = elm.itemcount + itemcount;
                    return{
                        ...elm,
                        itemcount: newq,
                    } 
                } else{
                    return elm;
                }
            })

            return{
                ...State,
                cart: updatedproduct,
            }

        } else{
            const cartclone = {
                name,
                price,
                color,
                image,
                itemcount,
                ed : ed + color,
            }
            return{
                ...State,
                cart: [...State.cart, cartclone]
            }
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