import { Link } from 'react-router-dom';
import './Button.css'

const Button = ({Links}) => {
    return(
            <Link className='mainButton' to={Links.Link}>{Links.LinkText}</Link>
    )
}

export default Button;