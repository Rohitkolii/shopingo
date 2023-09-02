import './ShopPosts.css'
import { Link } from 'react-router-dom';

import {BsGridFill} from 'react-icons/bs'
import {FaList} from 'react-icons/fa'
import { useState } from 'react';

const ShopPosts = ({filteredproduct}) => {

    const [grid, setgrid] = useState(true)

    return(

        <>

        <div className='arrange-shop'>
            <div className='grid-shop'>
                <span onClick={()=> setgrid(!grid)}><BsGridFill className={grid ? 'activegride' : ''} /></span>
                <span onClick={()=> setgrid(!grid)}><FaList className={!grid ? 'activegride' : ''} /></span>
            </div>
            <div>
                <p>{filteredproduct ? filteredproduct.length : ''} Products</p>
            </div>
            <div>
                <select name="pricerange" id="">
                    <option value="price">Sort by price</option>
                    <option value="category">Sort by Category</option>
                </select>
            </div>
        </div>

        <div className={grid ? "ShopPost" : 'ShopPostlist'}>
            {
                filteredproduct && filteredproduct.map(({id, image, name, price, description})=> {
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
                                            {
                                                !grid ?
                                                <p>{description.slice(0,100)}</p>
                                                :
                                                ''
                                            }
                                            <p className='desc-price'> {
                                                Intl.NumberFormat("en-IN", {
                                                    style: "currency",
                                                    currency: "INR",
                                                    maximumFractionDigits: 2,
                                                }).format(price/100)
                                            }</p>
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