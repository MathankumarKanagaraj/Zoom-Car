import { jwtDecode } from "jwt-decode";
import React, { useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const [isAuth, setIsAuth] = useState(false);
  const [loading, setLoading] = useState(true);

  const isAuthenticated = () => {
    const token = localStorage.getItem("authToken");
    if (token) {
      try {
        const decoded = jwtDecode(token);
        const currentTime = Math.floor(Date.now() / 1000);
        return decoded.exp > currentTime;
      } catch (error) {
        return false ;
      }
    }
    return false;
  };

  useEffect(() => {
    const authenticated = isAuthenticated();
    setIsAuth(authenticated);
    setLoading(false);
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return isAuth ? children : <Navigate to="/" />;
};

export default PrivateRoute;
