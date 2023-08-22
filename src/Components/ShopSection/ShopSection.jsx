// import { useState } from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useProductContext } from '../Context/Context';
import ShopPosts from '../Shop/ShopPosts/ShopPosts';
import ShopSidebar from '../ShopSidebar/ShopSidebar'
import './ShopSection.css'

const ShopSection = ({setitemurl}) => {


    const {products, Loading} = useProductContext()
    const [filteredproduct, setfilteredproduct] = useState()

    useEffect(() => {
        setfilteredproduct(products)
    }, [products])

    if(Loading){
        return <h1>Loading...</h1>
    }

    return(
        <div className='ShopSection'>
            <div className='inner-ShopSection'>
                <div className='ShopSection-Sidebar'>
                    <ShopSidebar setfilteredproduct={setfilteredproduct} />
                </div>

                <div className='ShopSection-PostSection'>
                    <ShopPosts filteredproduct={filteredproduct} setitemurl={setitemurl} />
                </div>
            </div>
        </div>
    )
}

export default ShopSection;