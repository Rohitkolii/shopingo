import React, { useState } from 'react'
import Styles from "./Products.module.css"
import DashSidebar from '../../Components/Dash/DashboardSidebar/DashSidebar'
import DashboardNavbar from '../../Components/Dash/DashboardNavbar/DashboardNavbar'
import { useProductContext } from '../../Components/Context/Context'

const Products = () => {
     const[sidebarVisiblity, setSidebarVisiblity] = useState(false)
    const {products, Loading} = useProductContext()
    console.log(products);
    
     const setSearchQuery = () => {
        
     }
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
                <h1>Total Products</h1>
                <p className='sublight' style={{fontSize : 15}}>plan, pripritize, and accoplish your tasks with ease.</p>
                <div className='incon' style={{margin: "10px auto"}}>
                    <label htmlFor="">Search:</label> <br />
                    <input onChange={(e)=> setSearchQuery(e.target.value)} placeholder='Search' type="text" name="" id="" />
                </div>

                <div className="tablecon">
                <table>
                  <tr>
                    <th>Product Id</th>
                    <th>Product</th>
                    <th>Category</th>
                    <th>Image</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Delete</th>
                    <th>Manage</th>
                  </tr>
                  {
                    products && 
                    products.map((product)=> {
                      return(
                            <tr>
                              <td>{product._id.slice(0,10)}...</td>
                              <td>{product.product_name.slice(0,15)}</td>
                              <td>{product.product_category}</td>
                              <td className={Styles.product}><img src={`${process.env.REACT_APP_URL}${product.product_img}`} alt="" /></td>
                              <td>{product.product_price}</td>
                              <td>{product.product_quantity}</td>
                              <td className={Styles.delete}>
                                <button>Delete</button>
                              </td>
                              <td className={Styles.detail}>
                                <button>Manage</button>
                              </td>
                            </tr>
                      )
                    })
                  }
                  

                </table>
                </div>
              </section>
            </div>
        </div>
  )
}

export default Products