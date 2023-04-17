import { Link } from 'react-router-dom';
import { useProductContext } from '../Context/Context'
import './LatestItems.css'

const LatestItems = () => {

    const {isLoading, featureProducts} = useProductContext();

    // console.log(featureProducts)

    return(

        <div className='LatestItems'>
            <div className='inner-LatestItems'>
                <div className='li-heading'>
                <div className='LatestItems-title'>
                    <h1>Latest Arrival</h1>
                    <p>Showing latest arrival on this diwali ocation</p>
                </div>
                <div className='item-btn'>
                    <button>&#10094;</button>
                    <button>&#10095;</button>
                </div>
                </div>

                {
                    isLoading ? 
                    
                    <div className='loader-container'>
                    <div className='loader'></div> 
                    <h4>Loading...</h4>
                    </div>
                    
                    :
                            <div className='Item-container'>
                                {
                                    featureProducts && featureProducts.map(({id, name, price, category, image})=>
                                        {
                                            return(
                                                <Link to={`shop/${id}`} key={id}>
                                                    <div key={id} className='Items'>
                                                    <div className='Item-img'>
                                                        <div className='offer-ic'>
                                                            <div className='pc'> &#8377;{Math.floor( price / 74)}</div>
                                                            <div className='sale'>{category}</div>
                                                        </div>
                                                        <img src={image} alt="items" />
                                                    </div>

                                                    <div className='description'>

                                                    {/* <p>{item.rating}</p> */}
                                                    <h5>{name}</h5>
                                                    <p> &#8377;{Math.floor( price / 74)}</p>
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