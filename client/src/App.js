import logo from "./logo.svg";
import React from "react";
import { Routes, Route } from "react-router";
import "./App.css";
import Home from "./components/Home/Home";
import { BrowserRouter } from "react-router-dom";
import HomeProducts from "./components/Home/Home.products";
import ProductDetail from "./components/Detail/Detail";
import Cart from "./components/Cart/Cart";
import LoginPage from "./components/Login/LoginPage";
import RegisterPage from "./components/Register/RegisterPage";
import HomeSubProducts from "./components/Home/Home.subproducts";
import HomeProductsName from "./components/Home/Home.productsname";

function App() {


  
  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/home/:id"} element={<HomeProducts />} />
        <Route path={"/product/detail/:id"} element={<ProductDetail />} />
        <Route path={"/cart"} element={<Cart />} /> 
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/register"} element={<RegisterPage />} />
        <Route path={"/home/subcategory/:id"} element={<HomeSubProducts />} />
        <Route path={"/home/products"} element={<HomeProductsName />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
