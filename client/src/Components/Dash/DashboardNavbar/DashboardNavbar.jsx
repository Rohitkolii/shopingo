import { useState } from 'react'
import Styles from './DashboardNavbar.module.css'
// import { Link } from 'react-router'
import { RiMenu2Fill } from 'react-icons/ri'
import { Link } from 'react-router-dom'

const DashboardNavbar = ({setSidebarVisiblity, sidebarVisiblity}) => {

  const [profileStatus, setProfileStatus] = useState(false)

  return (
    <>
        <nav className={Styles.navbar}>
            <div className={Styles.logo}>
                <RiMenu2Fill onClick={()=> setSidebarVisiblity(!sidebarVisiblity)}/>
            </div>
            
            <div onClick={()=> setProfileStatus(!profileStatus)} className={Styles.Links}>
                <div className={Styles.profilelink}>
                  <div>
                    <img src="/images/headerimg.png" alt="" />
                  </div>

                  <div>
                    <p>Admin</p>
                    <p>example@gmail.com</p>
                  </div>
                </div>
            </div>
        </nav>

        {
          profileStatus ? <div onClick={()=> setProfileStatus(!profileStatus)} className ={Styles.overlay}></div> : ''
        }

        {
          profileStatus ?
          <div className={Styles.profilemenu}>
                  <ul>
                      <li><Link to="/">Home</Link></li>
                      <li><Link to="/Profile">Profile</Link></li>
                      {/* <li><Link onClick={logoutUser} to="">Logout</Link></li> */}
                      <li><Link to="/">Logout</Link></li>
                  </ul>
              </div>
        : ''}
    </>
  )
}

export default DashboardNavbar