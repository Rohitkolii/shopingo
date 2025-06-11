import { Route, Routes } from 'react-router-dom';
import './App.css';
// import Blogs from './Components/Pages/Blogs';
import Cart from './Components/Pages/Cart';
import ErrorPage from './Components/Pages/ErrorPage';
import Home from './Components/Pages/Home';
import ItemDetail from './Components/Pages/ItemDetail';
import Login from './Components/Pages/Login';
import Shop from './Components/Pages/Shop';
import DashboardPage from './Dashboard/DashboardPage/DashboardPage';
import AddProducts from './Dashboard/AddProducts/AddProducts';
import Orders from './Dashboard/Orders/Orders';
import Products from './Dashboard/Products/Products';
import Status from './Dashboard/Status/Status';
import MyOreder from './Components/Pages/MyOreder';

function App() {

  // const [itemurl, setitemurl] = useState(ShopPostData)

  return (
    <div className="App">
        {/* <Home /> */}
        <Routes>
          <Route path='/' element={<Home />} ></Route>
          <Route path='/login' element={<Login />} ></Route>
          <Route path='/shop' element={<Shop />} ></Route>
          <Route path='/shop/:id' element={<ItemDetail />} ></Route>
          <Route path='/cart' element={<Cart />} ></Route>
          <Route path='/myorders' element={<MyOreder />} ></Route>

          {/* Admin Pages  */}
          <Route path='/dashboard' element={<DashboardPage />} ></Route>
          <Route path='/dashboard/addproducts' element={<AddProducts />} ></Route>
          <Route path='/dashboard/orders' element={<Orders />} ></Route>
          <Route path='/dashboard/products' element={<Products />} ></Route>
          <Route path='/dashboard/orderstatus' element={<Status />} ></Route>


          <Route path='*' element={<ErrorPage />} ></Route>
        </Routes>
    </div>
  );
}

export default App;
