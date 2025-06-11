import React, { useState } from 'react'
import Styles from "./Orders.module.css"
import DashSidebar from '../../Components/Dash/DashboardSidebar/DashSidebar'
import DashboardNavbar from '../../Components/Dash/DashboardNavbar/DashboardNavbar'
import OrderStaus from '../../Components/OrderStaus/OrderStaus'
import { useOrder } from '../../Components/Context/OrderContext'
import { useEffect } from 'react'

const Orders = () => {
  const [orderStatusValue, setorderStatusValue ] = useState(false);
     const[sidebarVisiblity, setSidebarVisiblity] = useState(false)

     const {getOrders, TotalOrders} = useOrder()
    console.log(TotalOrders);
  
     const setSearchQuery = () => {
        
     }

     useEffect(()=> {
      getOrders()
     },[])

  return (
    <div style={{display: 'flex'}}>
            <DashSidebar 
            setSidebarVisiblity={setSidebarVisiblity}
            sidebarVisiblity={sidebarVisiblity} />
            <div className={Styles.DashboardPage}>
              <DashboardNavbar 
              setSidebarVisiblity={setSidebarVisiblity} 
              sidebarVisiblity={sidebarVisiblity}/>

              <section className={Styles.dashContent}>
                <h1>Orders</h1>
                <p className='sublight' style={{fontSize : 15}}>plan, pripritize, and accoplish your tasks with ease.</p>
                <div className='incon' style={{margin: "10px auto"}}>
                    <label htmlFor="">Search:</label> <br />
                    <input onChange={(e)=> setSearchQuery(e.target.value)} placeholder='Search' type="text" name="" id="" />
                </div>

                <div className="tablecon">
                <table>
                  <tr>
                    <th>Order Id</th>
                    {/* <th>Customer</th> */}
                    <th>Product</th>
                    <th>Image</th>
                    <th>Date</th>
                    <th>Mode</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Manage</th>
                  </tr>

                  {
                    TotalOrders?.map((order)=>{
                      return(
                            <tr>
                              <td>{order._id.slice(0,10)}...</td>
                              {/* <td>{order.customer}</td> */}
                              <td>{order.Product_Name.slice(0,30)}</td>
                              <td className={Styles.product}><img src={`${process.env.REACT_APP_URL}${order.img}`} alt="" /></td>
                              {/* <td>21/02/2025 <br /> 12:00</td> */}
                              <td>{new Date(order.createdAt).toLocaleDateString()}</td>
                              <td>{order.payment_mode}</td>
                              <td>{order?.price}</td>
                              <td className={Styles.Status}>
                                <button>{order.Status}</button>
                              </td>
                              <td className={Styles.detail}>
                                <button onClick={()=> setorderStatusValue(true)}>Manage</button>
                              </td>
                            </tr>
                      )
                    })
                  }

                  

                </table>
                </div>
              </section>
            </div>
            {
              orderStatusValue && 
            <OrderStaus setorderStatusValue={setorderStatusValue} />
            }
        </div>
  )
}

export default Orders