import './ErrorPage.css'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

const ErrorPage = () => {

    return(
        <div className="ErrorPage">
            <Navbar />
            <div className='inner-ErrorrPage'>
                <h1>OU-OH</h1>
                <p>The Page You Are Looking For Does not Exist</p>
                <img src='./images/404.png'></img>
            </div>
            <Footer />
        </div>
    )
}

export default ErrorPage;