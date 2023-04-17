import { useState } from 'react';
import './ItemCategories.css';
import {MdKeyboardArrowRight, MdKeyboardArrowDown} from 'react-icons/md'
import { useProductContext } from '../Context/Context';

const ItemCategories = ({setfilteredproduct }) => {

    const [visibility, Setvisibility] = useState(false)
    const {products} = useProductContext()


    


    const FilterData = (fl) => {
        const nd = products.filter(({category}) => {
            return category === fl
        })
        setfilteredproduct(nd)
    }


    return(
        <div className="ItemCategories">
            <div className="inner-ItemCategories">
                <div className="ItemCategories-h1">
                    <button onClick={() => {Setvisibility(!visibility)}}><h1> {!visibility ? <MdKeyboardArrowDown /> : <MdKeyboardArrowRight />} Item Categories</h1></button>
                </div>
                {
                    !visibility ?
                
                <div className="ItemCategories-btn">
                    <ul>
                        <button onClick={() => setfilteredproduct(products)}>All</button>
                        <button onClick={() => {FilterData('mobile')}}>mobile</button>
                        <button onClick={() => {FilterData('laptop')}}>laptop</button>
                        <button onClick={() => {FilterData('computer')}}>computer</button>
                        <button onClick={() => {FilterData('watch')}}>watch</button>
                        <button onClick={() => {FilterData('accessories')}}>accessories</button>
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