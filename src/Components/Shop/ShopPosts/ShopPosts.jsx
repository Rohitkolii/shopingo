import './ShopPosts.css'
import { Link } from 'react-router-dom';

const ShopPosts = ({filteredproduct}) => {

    return(

        <>
        <div className="ShopPost">
            {
                filteredproduct && filteredproduct.map(({id, image, name, price})=> {
                    return(
                        <div key={id} className={`ShopPost-Card`}>
                                <Link to={`/shop/${id}`}>
                                    <div className="inner-ShopPostCard">
                                        <div className='ShopPost-img'>
                                            <img src={image} alt="item" />
                                            <div className='overlayer'>
                                                
                                            </div>
                                        </div>
                    
                                        <div className='ShopPost-descriptopn'>
                                            {/* <h5>{category}</h5> */}
                                            <h5>{name}</h5>
                                            {/* <p>{description}</p> */}
                                            <p className='desc-price'> &#8377; {Math.floor( price / 74)}</p>
                                        </div>
                                    </div>
                                </Link>
                        </div>
                    )
                })
            }


        </div>
        
        </>
    )
}

export default ShopPosts;