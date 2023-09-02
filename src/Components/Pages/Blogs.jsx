import Navbar from "../Navbar/Navbar";
import SubHeader from "../SubHeader/SubHeader";
import Footer from '../Footer/Footer'


const Blogs = () =>{

    const data = {
        hname: 'Blogs',
        location: 'Blogs',
    }

    return(
        <>
            <Navbar />
            <SubHeader mydata={data} />
            <div>
                <p style={{margin: '50px 0px', textAlign: 'center', fontSize: 20}}>Will be update soon!</p>
            </div>  
            <Footer />
        </>
    )
}

export default Blogs;