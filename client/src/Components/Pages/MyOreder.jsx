import Navbar from "../Navbar/Navbar";
import SubHeader from "../SubHeader/SubHeader";
import Footer from '../Footer/Footer'
import { useCartContext } from "../Context/CartContext";
import { ImBin } from "react-icons/im";
import { useEffect } from "react";
import '../Cart/CartContainer.css'
import { useOrder } from "../Context/OrderContext";

const MyOreder = () =>{

    const {UserOrders, getUserOrders} = useOrder()
    console.log(UserOrders);
    
    const data = {
        hname: 'Home',
        location: 'My Orders',
    }

    useEffect(()=> {
        getUserOrders();
    },[])

    return(
        <>
            <Navbar />
            <SubHeader mydata={data} />
            <div className="cartTable">
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
                UserOrders && UserOrders?.map(({Product_Name, price, img, Status, itemcount, ed},i)=> {
                    return(
                        <tr key={i}>
                            <td>
                                <img src={`${process.env.REACT_APP_URL}${img}`} alt={Product_Name} />
                            </td>
                            <td>{Product_Name}
                                <div className='excart'>
                                <p>Price: {price * itemcount} - Qty: {itemcount}</p>
                                <p>{Status}</p>
                                </div>
                            </td>
                            <td>{price}</td>
                            <td>{itemcount}</td>
                            <td>{itemcount * price}</td>
                            <td><ImBin /></td>
                        </tr>
                        )
                    })
                }
            </table> 
            </div> 
            <Footer />
        </>
    )
}

export default MyOreder;