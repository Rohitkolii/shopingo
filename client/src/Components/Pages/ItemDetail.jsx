import Navbar from "../Navbar/Navbar";
import Items from "../Shop/Items/Items"
import SubHeader from "../SubHeader/SubHeader";
import Footer from "../Footer/Footer";


const ItemDetail = () => {

    const data = {
        hname: 'Shop',
        location: 'Shop',
    }

    return(
        <>
            <Navbar />
            <SubHeader mydata={data} />
            <Items />
            <Footer />
        </>
    )
}

export default ItemDetail;