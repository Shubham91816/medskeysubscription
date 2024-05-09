import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Login from "./pages/Login";
import Registeration from "./pages/Registeration";
import Dashboard from "./pages/Dashboard";
import NotFound from "./components/NotFound";
import Subscription from "./pages/Subscription";
import SubscriptionForm from "./pages/SubscriptionForm";
import HosSubscriptionList from "./pages/HosSubscriptionList";
import HospitalList from "./pages/HospitalList";
import Update from "./pages/Update";
import ChangePassword from "./pages/ChangePassword";
import OrderHistory from "./pages/OrderHistory";
import ProtectedRoute from "./pages/ProtectedRoute";
import { useSelector, useDispatch } from "react-redux";

function App() {
  const cartdata = useSelector((state) => state.cart.cart);
  const status = localStorage.getItem("SubscriptionStatus");
  const [Name, setName] = useState("");
  const hasAccess = cartdata === "1";
  // const hasAccess = status == "1";

  const setLatestName = (val) => {
    setName(val);
  };

  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/registeration" element={<Registeration />} />
      <Route path="/" element={<ProtectedRoute />}>
        <Route path="dashboard" element={<Dashboard username={Name} />} />
        <Route path="subscription" element={<Subscription />} />
        <Route path="subscriptionform" element={<SubscriptionForm />} />
        <Route path="HosSubscriptionList" element={<HosSubscriptionList />} />
        <Route path="HospitalList" element={<HospitalList />} />
        <Route path="Update" element={<Update setNewName={setLatestName} />} />
        <Route path="orderhistory" element={<OrderHistory />} />
        <Route path="change-password" element={<ChangePassword />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
