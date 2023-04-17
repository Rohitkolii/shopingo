import Navbar from "../Navbar/Navbar";
import SubHeader from "../SubHeader/SubHeader";
import ShopSection from "../ShopSection/ShopSection";
// import ShopSidebar from "../ShopSidebar/ShopSidebar";
import Footer from '../Footer/Footer'
const Shop = () => {

    const data = {
        hname: 'Shop',
        location: 'Shop',
    }

    return(
        <div className="shop-container">
            <Navbar />
            <SubHeader mydata={data} />
            <ShopSection />
            <Footer />
        </div>
    )
}

export default Shop;