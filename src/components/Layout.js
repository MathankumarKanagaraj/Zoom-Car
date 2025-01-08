import React from "react";
import NavBar from "./NavBar";
import CarRentalUI from "../pages/CarRentel";

const Layout = () => {
  return (
    <div className="container-fluid  background-image p-0">
      <NavBar />
      <div className="row">
        <div className="col-md-12 pt-3 p-5 ">
          <div className="content">
            <CarRentalUI />
          </div>
        </div> 
      </div>
    </div>
  );
};

export default Layout;
