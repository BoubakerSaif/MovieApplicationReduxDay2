import React from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { role } = useSelector((state) => state.movieRed);
  console.log(role);

  return role == "Admin" ? <Outlet /> : <Navigate to={"/"} replace />;
};

export default PrivateRoute;
