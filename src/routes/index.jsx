import React from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "../pages/layout/Layout";
import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Help from "../pages/help/Help";
import NotFound from "../pages/not-found/NotFound";
import Login from "../pages/login/Login";
import Wishes from "../pages/wishes/Wishes";
import Contact from "../pages/contact";
import Cart from "../pages/cart/Cart";
import Checkout from "../pages/checkout/Checkout";
import Detail from "../pages/detail/Detail";

const Router = ({data}) => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home data={data}/>} />
        <Route path="/about" element={<About />} />
        <Route path="/yordam" element={<Help />} />
        <Route path="/wishes" element={<Wishes />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:id" element={<Detail/>} />
        <Route path="*" element={<NotFound />} />
      </Route>
      <Route path="/login" element={<Login />} />
    </Routes>
  );
};

export default Router;
