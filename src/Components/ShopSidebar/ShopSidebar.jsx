import ColorSelector from "../ColorSelector/ColorSelector";
import ItemCategories from "../ItemCategories/ItemCategories"
import SearchFilter from "../SearchFilter/SearchFilter";

const ShopSidebar = ({setfilteredproduct}) => {


    return(
        <div className="shop-sd">
            <ItemCategories setfilteredproduct={setfilteredproduct} />
            <ColorSelector setfilteredproduct={setfilteredproduct} />
            <SearchFilter setfilteredproduct={setfilteredproduct}/>
        </div>
    )
}

export default ShopSidebar;