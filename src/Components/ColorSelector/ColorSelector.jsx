import { useProductContext } from '../Context/Context';
import './ColorSelector.css'

const ColorSelector = ({setfilteredproduct}) => {
    
    const {products} = useProductContext()

    const {colors} = products || {};
    
    const FilterbyColor = (clr) => {
        const flclr = products.filter(({colors}) => {
            return colors[0] === clr
        })
        setfilteredproduct(flclr)
    }
    
    return(
        <div className='ColorSelector'>
            <div className='inner-ColorSelector'>
                <div className='ColorSelector-h1'>
                    <button><h1>Color</h1></button>
                </div>
                <div className='filter-ItemDetailsCt'>
                    <button onClick={() => {FilterbyColor('#ff0000')}} className='Active colorbtn'  style={{backgroundColor: '#ff0000'}}></button>
                    <button onClick={() => {FilterbyColor('#000000')}} className='Active colorbtn'  style={{backgroundColor: '#000000'}}></button>
                    <button onClick={() => {FilterbyColor('#CDD0D0')}} className='Active colorbtn'  style={{backgroundColor: '#CDD0D0'}}></button>
                    <button onClick={() => {FilterbyColor('#22D3EF')}} className='Active colorbtn'  style={{backgroundColor: '#22D3EF'}}></button>
                    <button onClick={() => {FilterbyColor('#000')}} className='Active colorbtn' style={{backgroundColor: '#000'}}></button>
                </div>
            </div>
        </div>
    )
}

export default ColorSelector;