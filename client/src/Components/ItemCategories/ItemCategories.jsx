import { useState } from 'react';
import './ItemCategories.css';
import {MdKeyboardArrowRight, MdKeyboardArrowDown} from 'react-icons/md'
import { useProductContext } from '../Context/Context';

const ItemCategories = ({setfilteredproduct }) => {

    const [visibility, Setvisibility] = useState(false)
    const {products} = useProductContext()


    


    const FilterData = (fl) => {
        const nd = products.filter(({product_category}) => {
            return product_category === fl
        })
        setfilteredproduct(nd)
    }


    return(
        <div className="ItemCategories">
            <div className="inner-ItemCategories">
                <div className="ItemCategories-h1">
                    <button onClick={() => {Setvisibility(!visibility)}}><p> {!visibility ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />} Item Categories</p></button>
                </div>
                {
                    visibility ?
                
                <div className="ItemCategories-btn">
                    <ul>
                        <button onClick={() => setfilteredproduct(products)}>All</button>
                        <button onClick={() => {FilterData('pent')}}>Pent & Jeans</button>
                        <button onClick={() => {FilterData('tshirt')}}>T-Shirt</button>
                        <button onClick={() => {FilterData('shirt')}}>Shirt</button>
                        <button onClick={() => {FilterData('men')}}>Men's</button>
                        <button onClick={() => {FilterData('women')}}>Womens</button>
                        <button onClick={() => {FilterData('accessories')}}>Accessories</button>
                    </ul>
                </div>
                :
                ''
                }
            </div>
        </div>
    )
}

export default ItemCategories;