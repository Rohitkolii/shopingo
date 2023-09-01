import Footer from "../Footer/Footer";
// import SubHeader from '../SubHeader/SubHeader'
import Navbar from '../Navbar/Navbar'
import CartContainer from "../Cart/CartContainer";

const Cart = () => {

    // const data = {
    //     hname: 'Cart',
    //     location: 'Shop',
    // }


    return(
        <div className='Cart-container_main'>
            <Navbar />
            {/* <SubHeader mydata={data} /> */}
            <CartContainer />
            <Footer />
        </div>
    )
}

export default Cart;