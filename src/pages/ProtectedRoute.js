import React, { useEffect, useState } from "react";
import { Outlet, Navigate } from "react-router-dom";

const ProtectedRoute = () => {
  const token = localStorage.getItem("JWTToken");

  if (!token) return <Navigate to="/" />;

  return <Outlet />;
};
export default ProtectedRoute;
