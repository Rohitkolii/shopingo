import './SearchFilter.css'
import {AiOutlineSearch} from 'react-icons/ai'
import {useProductContext} from '../Context/Context'
import { useState } from 'react'
const SearchFilter = ({setfilteredproduct}) => {

    const {products} = useProductContext()
    const[inputvalue, setinputvalue] = useState()
    
    const Filterbysearch = () => {
        const nnd = products.filter(({product_name, product_category, product_price}) => {
            return product_name === inputvalue || product_category === inputvalue || product_price === inputvalue
        })
        
            setfilteredproduct(nnd)
    }


    return(
        <div className="search-container">
            <div className="search-input">
                <input placeholder='Search' type="text" onChange={(v)=> setinputvalue(v.target.value)}/>
                <button onClick={() => Filterbysearch() } className='search-button'><AiOutlineSearch /></button>
            </div>
        </div>
    )
}

export default SearchFilter;