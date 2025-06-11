import Styles from './DashSidebar.module.css'
import { MdDashboard } from "react-icons/md";
// import { FaBookReader } from "react-icons/fa";
import { IoMdClose } from "react-icons/io";
import { Link } from 'react-router-dom';

// icons 
import { GiClothes } from "react-icons/gi";
import { MdBorderColor } from "react-icons/md";
import { MdAddTask } from "react-icons/md";
import { MdDeliveryDining } from "react-icons/md";
import { RiFolderSettingsFill } from "react-icons/ri";


const DashSidebar = ({setSidebarVisiblity, sidebarVisiblity}) => {

  return (
    <>
      <aside className={!sidebarVisiblity ? Styles.sidebar : Styles.Hidesidebar}>
        <div className={Styles.sidebarHead}>
          <div>
            {/* <img src="/images/wheel.png" alt="" /> */}
            <p><span style={{color: "#8459ba"}}>Admin</span>Panel<span style={{color: "#8459ba"}}>.</span></p>
          </div>
          <IoMdClose className={Styles.closeMenu} onClick={()=> setSidebarVisiblity(!sidebarVisiblity)} />
        </div>
          <ul>
            <li><Link to='/dashboard'><MdDashboard /> Dashboard</Link></li>
            <li><Link to='/dashboard/addproducts'><MdAddTask /> Add Product</Link></li>
            <li><Link to='/dashboard/orders'><MdBorderColor /> Orders</Link></li>
            <li><Link to='/dashboard/products'><GiClothes /> Total Products</Link></li>
            <li><Link to='/dashboard/orderstatus'><MdDeliveryDining />Order Status</Link></li>
            <li><Link to='/dashboard/settings'><RiFolderSettingsFill />Settings</Link></li>
          </ul>
      </aside>
    </>
  )
}

export default DashSidebar