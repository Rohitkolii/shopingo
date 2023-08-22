
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
                <p>Black Friday Sale is on</p>
                <h1>Latest Gadgets</h1>
                <p className='sale-h'>Sale</p>
                <h1>Latest Technology</h1>
                <Button Links={Links} />
            </div>

            <div className='header-img'>
                <img src="./images/headphone.png" alt='headerimg' />
            </div>
            </div>
        </div>
    )
}

export default Header;