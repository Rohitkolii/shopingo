import { useState } from 'react'
// import AdminNavabar from '../../components/AdminNavbar/AdminNavabar'
// import AdminSidebar from '../../components/AdminSidebar/AdminSidebar'
import { IoCarOutline } from "react-icons/io5";
// import { HiOutlineUsers } from "react-icons/hi2";
import { VscBook } from "react-icons/vsc";
// import { PiUserListLight } from "react-icons/pi";
import Styles from "./Status.module.css"
// import { Line } from 'react-chartjs-2';
import DashSidebar from '../../Components/Dash/DashboardSidebar/DashSidebar';
import DashboardNavbar from '../../Components/Dash/DashboardNavbar/DashboardNavbar';


const Status = () => {
  
  const[sidebarVisiblity, setSidebarVisiblity] = useState(false)

  return (
    <>

        <div style={{display: 'flex'}}>
            <DashSidebar 
            setSidebarVisiblity={setSidebarVisiblity}
            sidebarVisiblity={sidebarVisiblity} />
            <div className={Styles.Status}>
              <DashboardNavbar 
              setSidebarVisiblity={setSidebarVisiblity} 
              sidebarVisiblity={sidebarVisiblity}/>

              <section className={Styles.dashContent}>
                <h1>My O</h1>
                <p className='sublight' style={{fontSize : 15}}>plan, pripritize, and accoplish your tasks with ease.</p>
                <div className={Styles.dashTop}>
                
                </div>
              </section>
            </div>
        </div>
    </>
  )
}

export default Status