import React from "react";
import carvideo from "../assets/carvideo.mp4";
import { useNavigate } from "react-router-dom";
import { Container } from "react-bootstrap";

const Investor = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/investor");
  };

  return (
    <Container fluid className="p-0">
    <div>
      <div className=" row">
        <div className="col-6 text-section mt-5" style={{padding:"100px"}}>
          <h6 style={{fontSize:"80px"}}>Zoomcar, <h1 style={{fontSize:"80px"}}> India's Largest <h1 style={{fontSize:"80px"}}> Car Sharing Marketplace</h1></h1></h6>
          <p className="fs-5 text-secondary">  
            Founded in 2013 and headquartered in Bengaluru, India, Zoomcar is a leading marketplace 
            for car sharing focused in India. The Zoomcar community connects Hosts with Guests, who 
            choose from a selection of cars for use at affordable prices, promoting sustainable, 
            smart transportation solutions in India. Zoomcar was listed on NASDAQ in 2023.
          </p>
        </div>

        <div className="col-6">
          <div className="row">
            <div className="col-12">
              <video autoPlay muted loop controls style={{ width: "100%", height: "auto" }}>
              <source src={"https://investor-relations.zoomcar.com/wp-content/uploads/2024/08/Website-Video-Indian_2-1.mp4"} type="video/mp4" />
            
               </video>
            </div>
          </div>
        </div>
      </div>
    </div>
    </Container>
  );
};

export default Investor;
