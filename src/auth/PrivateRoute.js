import React from "react";
import { Navigate } from "react-router-dom";
import { isAuthenticated } from "./index";

const PrivateRoute = ({ children }) => {
  const auth = isAuthenticated() // isAuthenticated() returns true or false based on localStorage
  if (auth) {
    return children;
  } else {
    alert("To access this page, Please Login!");
    return <Navigate to="/login" />;
    
  }
};

export default PrivateRoute;
