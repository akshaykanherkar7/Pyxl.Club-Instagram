import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const RequiredAuth = ({ children }) => {
  const { isLoading, isAuth } = useSelector((state) => state.auth);

  if (isLoading) return <div>Loading..</div>;
  if (isAuth) {
    return children;
  } else {
    return <Navigate to="/"></Navigate>;
  }
};

export default RequiredAuth;
