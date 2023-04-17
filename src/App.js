import { Route, Routes } from 'react-router-dom';
import './App.css';
import Blogs from './Components/Pages/Blogs';
import Cart from './Components/Pages/Cart';
import ErrorPage from './Components/Pages/ErrorPage';
import Home from './Components/Pages/Home';
import ItemDetail from './Components/Pages/ItemDetail';
import Login from './Components/Pages/Login';
import Shop from './Components/Pages/Shop';

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
          <Route path='/blogs' element={<Blogs />} ></Route>
          <Route path='*' element={<ErrorPage />} ></Route>
        </Routes>
    </div>
  );
}

export default App;
