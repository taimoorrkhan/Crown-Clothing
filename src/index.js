import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './App';
import { CartProvider } from './Contexts/CartContext';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { UserContextProvider } from './Contexts/UserContext';
import { CategoriesContextProvider } from './Contexts/CategoriesContext';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  <React.StrictMode>
    <BrowserRouter>
      <UserContextProvider>
        <CategoriesContextProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesContextProvider>
      </UserContextProvider>
    </BrowserRouter>
  </React.StrictMode>

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
