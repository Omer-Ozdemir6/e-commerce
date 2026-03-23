import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Header from './layout/Header';
import Footer from './components/Footer';

import HomePage from './pages/HomePage';
import ShopPage from './pages/ShopPage';
import ProductDetail from './pages/ProductDetail';
import CartPage from './pages/CartPage';
import ContactPage from './pages/ContactPage';
import TeamPage from './pages/TeamPage';
import AboutPage from './pages/AboutPage';
import SignUpPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import PreviousOrdersPage from './pages/PreviousOrdersPage';

import { useDispatch } from 'react-redux';
import { verifyToken } from './store/action/clientAction';
import ProtectedRoute from './components/ProtectedRoute';
import CreateOrderPage from './pages/CreateOrderPage';
import OrderSuccessPage from './pages/OrderSuccessPage';

export default function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(verifyToken());
  }, [dispatch]);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white">
        <Header />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/shop/:gender/:categoryName/:categoryId" element={<ShopPage />} />
            <Route 
              path="/shop/:gender/:categoryName/:categoryId/:productNameSlug/:productId" 
              element={<ProductDetail />} 
            />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/product/:id" element={<ProductDetail />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path='/signup' element={<SignUpPage />} />
            <Route path="/login" element={<LoginPage />} />

            <Route path="/create-order" element={
              <ProtectedRoute>
                <CreateOrderPage />
              </ProtectedRoute>
            } />

            <Route path="/user/orders" element={
              <ProtectedRoute>
                <PreviousOrdersPage />
              </ProtectedRoute>
            } />

            <Route path="/order-success" element={<OrderSuccessPage />} />
          </Routes>
        </main>

        <Footer />
        <ToastContainer 
          position="bottom-right" 
          autoClose={3000} 
          theme="colored" 
        />
      </div>
    </Router>
  );
}