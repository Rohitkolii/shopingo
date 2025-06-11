import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import {BrowserRouter} from 'react-router-dom'
import { DataProvider } from './Components/Context/Context';
import { CartProvider } from './Components/Context/CartContext';
import { OrderProvider } from './Components/Context/OrderContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <DataProvider>
      <CartProvider>
        <OrderProvider>
          <ToastContainer />
          <App />
        </OrderProvider>
      </CartProvider>
    </DataProvider>
  </BrowserRouter>
);
