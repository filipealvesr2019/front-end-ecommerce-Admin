import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Layout/Header";
import Footer from "./components/Layout/Footer";
import Home from "./components/Home";
import ProductDetails from "./components/product/ProductDetails";
import Login from "./components/user/Login";
import Register from "./components/user/Register";
import { loadUser } from "./actions/userActions";
import Profile from "./components/user/Profile";
import store from "./store/store";
import Dashboard from "./Dashboard/Dashboard";
import Sidebar from "./Sidebar/Sidebar";
import ShoppingCart from "./cart/ShoppingCart";
import ProductDetailsCopy from "./components/product/ProductDetailsCopy"
function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);

  return (
    <>
      {" "}

          <Header />
          <Router>
            <Routes>
              <Route path="/" element={<Home />} />       
              <Route path="/sidebar" element={<Sidebar />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/cart" element={<ShoppingCart />} />
              <Route path="/ProductDetailsCopy" element={<ProductDetailsCopy />} />
              
              <Route path="/search/*" element={<Home key="search" />} />
              <Route path="/product/:id" element={<ProductDetails />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route path="/profile" element={<Profile />} />
            </Routes>
          </Router>
          <Footer />
  
    </>
  );
}

export default App;
