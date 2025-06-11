import { Link } from 'react-router-dom';
import { useProductContext } from '../Context/Context'
import './LatestItems.css'

import Loader from "../Loader/Loader.jsx"

const LatestItems = () => {

    const {isLoading, featureProducts} = useProductContext();
    console.log(isLoading);
    
    console.log(featureProducts)

    return(

        <div className='LatestItems'>
            <div className='inner-LatestItems'>
                <div className='li-heading'>
                <div className='LatestItems-title'>
                    <h1>Latest Arrival</h1>
                    <p>Showing latest arrival on this diwali ocation</p>
                </div>
                {/* <div className='item-btn'>
                    <button>&#10094;</button>
                    <button>&#10095;</button>
                </div> */}
                </div>

                {
                    isLoading ? 
                    
                    <Loader />
                    
                    :
                            <div className='Item-container'>
                                {
                                    featureProducts && featureProducts.map(({_id, product_name,product_rating, product_price, product_category, product_img})=>
                                        {
                                            return(
                                                <Link to={`shop/${_id}`} key={_id}>
                                                    <div key={_id} className='Items'>
                                                    <div className='Item-img'>
                                                        <div className='offer-ic'>
                                                            <div className='pc'> &#8377;{product_price}</div>
                                                            <div className='sale'>{product_category}</div>
                                                        </div>
                                                        <img src={`${process.env.REACT_APP_URL}${product_img}`} alt="items" />
                                                    </div>

                                                    <div className='description'>

                                                    {/* <p>{product_rating}</p> */}
                                                    <h5>{product_name}</h5>
                                                    {/* <p> &#8377;{product_price}</p> */}
                                                    </div>
                                                    </div>
                                                </Link>
                                            )
                                        }
                                    )
                                }
                            </div>
                }   
            </div>
        </div>
    )
}

export default LatestItems;