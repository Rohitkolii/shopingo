import { useState } from 'react'
import AdminNavabar from '../../Components/Dash/DashboardNavbar/DashboardNavbar'
import StylesVendor from "../AddProducts/AddProducts.module.css"
import Styles from "../DashboardPage/DashboardPage.module.css"
import AdminSidebar from '../../Components/Dash/DashboardSidebar/DashSidebar'

// import { PiSteeringWheelBold } from "react-icons/pi";
// import { MdDriveFileRenameOutline } from "react-icons/md";
import { IoLogoModelS } from "react-icons/io";
import { FaRegImage } from "react-icons/fa";
// import { MdCurrencyRupee } from "react-icons/md";
import { BiEqualizer } from "react-icons/bi";


// import { MdTypeSpecimen } from "react-icons/md";
import { VscGroupByRefType } from "react-icons/vsc";
import { IoPricetags } from "react-icons/io5";
import Loader from '../../Components/Loader/Loader'
// import { MdDriveFileRenameOutline } from "react-icons/md";
// import { IoDocumentText } from "react-icons/io5";


const AddProducts = () => {


  const[sidebarVisiblity, setSidebarVisiblity] = useState(false)

  const[isLoading, setisLoading] = useState(false)

  const[image, setimage] = useState("")
  const[name, setname] = useState("")
  const[category, setcategory] = useState("other")
  const[quantity, setquantity] = useState("")
  const[price, setprice] = useState("")
  const[rating, setrating] = useState("")
  const[desc, setdesc] = useState("")

  const AddProduct = async (e) => {
    e.preventDefault();
    setisLoading(true)

    try {
      const formData = new FormData();
        formData.append("product_name",name);
        formData.append("product_category",category);
        formData.append("product_price",price);
        formData.append("product_quantity",quantity);
        formData.append("product_rating",rating);
        formData.append("image",image);
        formData.append("product_desc",desc);

    const res = await fetch(`${process.env.REACT_APP_URL}/api/products/addproduct`,{
      method: "POST",
      // headers : {
      //   "Content-Type" : "application/json"
      // },
      body:formData,
    })

    // console.log(res);
    // console.log(res.message);
    
    if(res.ok){
      const d =await res.json()
      console.log(d);
    }
    
    
    setisLoading(false)
    setimage("")
    setcategory("")
    setname("")
    setprice("")
    setquantity("")
    setrating("")
    setdesc("")
    } catch (error) {
      setisLoading(false)
      console.log(error);
    }
  }

  return (
    <>
    {/* <ToastContainer /> */}
      <div style={{display: 'flex'}}>
        <AdminSidebar
        setSidebarVisiblity={setSidebarVisiblity}
        sidebarVisiblity={sidebarVisiblity} />
        <div className={Styles.DashboardPage}>
          <AdminNavabar
          setSidebarVisiblity={setSidebarVisiblity} 
          sidebarVisiblity={sidebarVisiblity}/>

          <section className={Styles.dashContent}>
            {/* <AddVehicles /> */}
            <h1 style={{fontWeight: 700}}>Add Products</h1>
            {isLoading && <Loader />}
            <form onSubmit={AddProduct} className={StylesVendor.AddVehiclecon}>
            <div className={StylesVendor.row}>

                <div className={StylesVendor.col}>
                    <label htmlFor=""><VscGroupByRefType />Categories</label>
                    <select value={category} onChange={(e)=> setcategory(e.target.value)} name="category" id="category" required>
                        <option value="shirt">Shirt</option>
                        <option value="tshirt">T-Shirt</option>
                        <option value="pent">Pent</option>
                        <option value="men">Men's</option>
                        <option value="woman">Women's</option>
                        <option value="kids">Kids</option>
                        <option value="other">Other</option>
                    </select>
                </div>

                <div className={StylesVendor.col}>
                    <label htmlFor=""><VscGroupByRefType />Product name</label>
                    <input onChange={(e)=> setname(e.target.value)} value={name} placeholder='Woolen Shirt' type="text" required />
                </div>
                
                <div className={StylesVendor.col}>
                    <label htmlFor=""><IoPricetags />Price</label>
                    <input onChange={(e)=> setprice(e.target.value)} value={price} placeholder='ex- 2200' type="number" required />
                </div>

                <div className={StylesVendor.col}>
                    <label htmlFor='fileupload'><FaRegImage />Product image</label>
                    <input onChange={(e)=> setimage(e.target.files[0])}  id='fileupload' type="file" required />
                </div>


                <div className={StylesVendor.col}>
                    <label htmlFor=""><BiEqualizer />Rating</label>
                    <input onChange={(e)=> setrating(e.target.value)} value={rating} placeholder='enter vehicle average' type="text" required />
                </div>

                <div className={StylesVendor.col}>
                    <label htmlFor=""><IoLogoModelS />Quantity</label>
                    <input onChange={(e)=> setquantity(e.target.value)} value={quantity} placeholder='Number of total products' type="text" required />
                </div>

                <div className={StylesVendor.col}>
                    <label htmlFor=""><IoLogoModelS />Product Description</label>
                    <textarea style={{height: 100}} onChange={(e)=> setdesc(e.target.value)} value={desc} placeholder='Tell about product' type="text" required />
                </div>

            </div>
            <br />
                <div className={StylesVendor.col}>
                    <input className={StylesVendor.btn} type="submit" value="Add vehicle" />
                </div>
          </form>
          </section>
        </div>
        </div>
    </>
  )
}

export default AddProducts