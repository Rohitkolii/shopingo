import './Items.css'
import {AiFillLinkedin, AiFillInstagram, AiOutlineTwitter, AiFillFacebook, AiOutlinePlus, AiOutlineMinus, AiFillStar } from 'react-icons/ai'
import { BsCheckLg} from 'react-icons/bs'
import { useParams } from 'react-router-dom'
import { useProductContext } from '../../Context/Context'
import { useEffect, useState } from 'react'
import ItemImages from './ItemImages'
import { useCartContext } from '../../Context/CartContext'

  import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const API = 'https://api.pujakaitem.com/api/products'

const Items = () => {

    const {getSingleProduct, SingleProduct, isSingleLoading} = useProductContext();
    const { AddToCartHandler } = useCartContext();
    const [itemcount, setitemcount] = useState(1);
    const { id } = useParams()

    const {
        _id:ed,
        product_name,
        product_category,
        product_price,
        product_quantity,
        product_rating,
        product_img,
        product_desc,
        isTrending,
        createdAt,
        updatedAt
    } = SingleProduct || {};

    // console.log(typeof Number(product_rating));
    

        
    
    useEffect( () => {
        getSingleProduct(`${process.env.REACT_APP_URL}/api/products/product/${id}`);
        // eslint-disable-next-line
    }, []);

    // const [color, setcolor] = useState(colors && colors[0]);
    // const [productcount, setproductcount] = useState(1)
    
    return(
        <div className='Item'>
            {
                isSingleLoading ? 
                <div className='loader-container'>
                    <div className='loader'></div>
                    <h4>Loading</h4>
                </div>
                :
                <div className='inner-Items'>
                    <div className="ItemsContainer">
                        <div className="ItemsImageCt">
                            
                            <ItemImages product_img={product_img} />

                        </div>

                        <div className="ItemDetailCt">
                            <div className="heading-ItemDetailCt">
                                <p className='cate'>{product_category}</p>
                                <h1>{product_name}</h1>
                                <h1 className='itemp'>&#8377; {product_price}</h1>
                                <p>
                                    {[...Array(Number(product_rating ? product_rating : 0))].map((_,i) => <AiFillStar key={i} className='i' />)}
                                    {product_rating}/5 Rating
                                </p>

                                <p className='desci'>{product_desc}</p>
                                <p className='stock'>{product_quantity} Products Available Now</p>
                                
                            </div>
                            

                            <div className="Addcart-ItemDetailsCt">
                                <div>
                                    <div>
                                        <button><AiOutlineMinus className='i' onClick={() => setitemcount(itemcount-1)}/></button>
                                        <p>{itemcount}</p>
                                        <button><AiOutlinePlus className='i' onClick={() => setitemcount(itemcount+1)}/></button>
                                    </div>

                                    <div>
                                        <button onClick={() => AddToCartHandler(product_name, product_price, product_img, itemcount, ed, product_category)}>ADD TO CART</button>
                                    </div>
                                </div>


                                <div className='social-Addcart-ItemDetailsCt'>
                                    <AiFillFacebook className='i'/>
                                    <AiFillInstagram className='i'/>
                                    <AiOutlineTwitter className='i'/>
                                    <AiFillLinkedin className='i'/>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            }


            <ToastContainer />

        </div>
    )
}

export default Items;