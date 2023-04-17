import './Items.css'
import {AiFillLinkedin, AiFillInstagram, AiOutlineTwitter, AiFillFacebook, AiOutlinePlus, AiOutlineMinus, AiFillStar } from 'react-icons/ai'
import { BsCheckLg} from 'react-icons/bs'

import { useParams } from 'react-router-dom'
import { useProductContext } from '../../Context/Context'
import { useEffect } from 'react'
import ItemImages from './ItemImages'
import { useState } from 'react'
import { createContext } from 'react'
// import { DataProvider } from '../../Context/Context'
// import { useContext } from 'react'

const API = 'https://api.pujakaitem.com/api/products'

const Items = () => {

    const {getSingleProduct, SingleProduct, isSingleLoading} = useProductContext();
    
    const { id } = useParams()

    const {
    id: ed,
    name,
    price,
    category,
    description,
    image,
    colors,
    stock
    } = SingleProduct || {};
    
    const AddtoCart = async () => {
        const CartData = {
            cartimage: image[0].url,
            cartname: name,
            quantity: productcount,
            color: color
        }
        console.log(CartData)

        // Context 

        

        // const res = await fetch(
        //     "https://shopingo-a073c-default-rtdb.firebaseio.com/Shopingo.json",
        //     {
        //         method:"POST",
        //         headers: {
        //             "Content-Type": "application/json",
        //         },
        //         body: JSON.stringify(CartData)
        //     }
        // )

    }
    
    useEffect( () => {
        getSingleProduct(`${API}?id=${id}`);
    }, []);

    const [color, setcolor] = useState(colors && colors[0])
    const [productcount, setproductcount] = useState(1)
    
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
                            
                            <ItemImages images={image} />

                        </div>

                        <div className="ItemDetailCt">
                            <div className="heading-ItemDetailCt">
                                <p className='cate'>{category}</p>
                                <h1>{name}</h1>
                                <h1 className='itemp'>&#8377; {price}</h1>
                                <p><AiFillStar className='i' /> <AiFillStar className='i' /> <AiFillStar className='i' /> <AiFillStar className='i' /> <AiFillStar className='i' /></p>
                                <p className='desci'>{description}</p>
                                <p className='stock'>{stock} Products Available Now</p>
                                
                            </div>
                            
                            <div className="filter-ItemDetailsCt">

                                {
                                    colors && colors.map((clr, index) => {
                                        return(
                                            <button
                                                style={{backgroundColor:clr}}
                                                className={color === clr ? 'colorbtn Active' : 'colorbtn'}
                                                key={index}
                                                onClick={() => setcolor(clr)}
                                                >
                                                {color === clr ? <BsCheckLg className='color-check' /> : ''}
                                            </button>
                                        )
                                    })
                                }

                            </div>

                            <div className="Addcart-ItemDetailsCt">
                                <div>
                                    <div>
                                        <button><AiOutlineMinus className='i' onClick={() => setproductcount(productcount - 1)}/></button>
                                        <p>{productcount}</p>
                                        <button><AiOutlinePlus className='i' onClick={() => setproductcount(productcount + 1)}/></button>
                                    </div>

                                    <div>
                                        <button onClick={AddtoCart}>ADD TO CART</button>
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
        </div>
    )
}

export default Items;