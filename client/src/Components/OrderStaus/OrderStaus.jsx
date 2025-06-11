import React, { useState } from 'react'
import Styles from "../OrderStaus/OrderStaus.module.css"

import { MdOutlineClose } from "react-icons/md";


const OrderStaus = ({setorderStatusValue}) => {

  return (
    <div className={Styles.orderStatus} >
      <div style={{display: 'flex', justifyContent:'space-between', borderBottom: "1px solid var(--fade)", paddingBottom: '10px'}}>
        <h2>Update Status</h2>
        < MdOutlineClose onClick={()=> setorderStatusValue(false)} />
      </div>

      <div className={Styles.orderStatus_item}>
        <div>
          <img src="/images/bluehood.jpg" alt="" />
        </div>
        <div>
          <p>Product Name</p>
          <p>Product Category</p>
          <p>32 Rs.</p>
          <p>Delivered</p>
        </div>
      </div>

      <div className={Styles.Statusoption}>
        <label htmlFor="">Change Status:</label>
        <select name="" id="">
          <option disabled selected value="pending">--Select--</option>
          <option value="pending">Pending</option>
          <option value="pending">Recieved</option>
          <option value="pending">Dispatch</option>
          <option value="pending">Shiped</option>
          <option value="pending">Delivered</option>
        </select>
      </div>
    </div>
  )
}

export default OrderStaus