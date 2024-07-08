import React, { useState } from "react";
// import style from "../test.module.css";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import BuyLoad from "./pages/BuyLoad";
import SendToMany from "./pages/SendToMany";
import SendGift from "./pages/SendGift";
import PayBills from "./pages/PayBills";
import SendMoney from "./pages/SendMoney";
import PayOutCenter from "./pages/PayOutCenter";
import Reviews from "./testModule/Reviews";

export default function App() {
  return (
    <Routes>
      <Route path="/buyLoad" element={<BuyLoad />} />
      <Route path="/sendGift" element={<SendGift />} />
      <Route path="/sendToMany" element={<SendToMany />} />
      <Route path="/payBills" element={<PayBills />} />
      <Route path="/sendMoney" element={<SendMoney />} />
      <Route path="/payOutCenter" element={<PayOutCenter />} />
      <Route path="/reviews" element={<Reviews />} />
    </Routes>
  );
}
