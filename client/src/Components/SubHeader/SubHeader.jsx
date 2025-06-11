import { Link } from 'react-router-dom';
import {MdKeyboardArrowRight} from 'react-icons/md'
import './SubHeader.css'
const SubHeader = ({mydata}) => {
    const {hname, location} = mydata
    return(
        <div className="ShopHeader">
            <div className='inner-ShopHeader'>
                <h1>Welcome to ShopinGo's {hname}</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cum, magni.</p>
                <p><Link to='/'>Home</Link> <MdKeyboardArrowRight /> {location}</p>
            </div>
        </div>
    )
}

export default SubHeader;