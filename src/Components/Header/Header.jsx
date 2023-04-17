
import Button from '../Button/Button';
import Navbar from '../Navbar/Navbar';
import './Header.css'
const Header = () => {

    const Links = {
        Link: '/shop',
        LinkText: 'Explore More'
    }
        
    return(
        <div className='headerBanner'>
            <Navbar />
            <div className='inner-header'>
            <div className='header-title'>
                <p>Diwali Sale is On</p>
                <h1>Discover Men's</h1>
                <h1>Latest Fashion</h1>
                <Button Links={Links} />
            </div>

            <div className='header-img'>
                <img src="./images/headerimg.png" alt='headerimg' />
            </div>
            </div>
        </div>
    )
}

export default Header;