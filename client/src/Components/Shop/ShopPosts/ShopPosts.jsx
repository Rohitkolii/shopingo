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
                filteredproduct && filteredproduct.map(({_id, product_img, product_name, product_price, product_category})=> {
                    return(
                                <Link to={`${_id}`} key={_id}>
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
                })
            }


        </div>
        
        </>
    )
}

export default ShopPosts;