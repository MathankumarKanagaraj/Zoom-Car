import React, { useEffect, useState } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import "./CarList.css";
import navLogo from "../assets/navLogo.png";
import { Icon } from "@iconify/react/dist/iconify.js";
import { Button, Col, Row } from "react-bootstrap";

const CarList = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [distance, setDistance] = useState(50);
  const [minPrice, setMinPrice] = useState(400);
  const [maxPrice, setMaxPrice] = useState(1900);

  const fetchCars = async (keywords = "") => {
    try {
      const token = localStorage.getItem("authToken");
      const response = await axios.get("http://localhost:8080/api/car/search-car", {
        params: { keywords },
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      if (response.data && Array.isArray(response.data)) {
        setCars(response.data);
      } else {
        setError("Unexpected response format. Please contact support.");
      }
    } catch (error) {
      setError("Unable to fetch cars. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCars();
  }, []);

  const handleSearchChange = (event) => {
    const { value } = event.target;
    setSearchTerm(value);
    fetchCars(value);
  };

  const handleRangeChange = (event) => {
    setDistance(event.target.value);
  };

  const handlePriceChange = (event, type) => {
    if (type === "min") setMinPrice(event.target.value);
    if (type === "max") setMaxPrice(event.target.value);
  };

  const filteredCars = cars.filter((car) => {
    return (
      car.carModel &&
      car.carModel.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  return (
    <div>
      <nav className="navbar fixed-top bg-light d-flex justify-content-between p-3">
        <div className="logo">
          <img src={navLogo} style={{ height: "40px" }} alt="Logo" />
        </div>
        <div className="search-bar w-50 d-flex">
          <input
            type="text"
            className="form-control rounded-5"
            placeholder="Search for model, features, etc"
            value={searchTerm}
            onChange={handleSearchChange}
            aria-describedby="basic-addon1"
          />
        </div>
        <div className="navbar-right">
          <button className="btn btn-success mx-2 rounded-5 me-3">
            Become a Host
          </button>
          <button className="btn btn-primary rounded-5">Login/Signup</button>
        </div>
      </nav>

      <div className="d-flex mt-5">
        <aside
          className="sidebar bg-light p-5 ps-1 pe-1"
          style={{ width: "300px", height: "100vh" }}
        >
          <Button className="mb-4 w-100" variant="success" style={{ height: "55px" }}>
            Find Your Perfect Ride!
          </Button>

          <div className="filter mb-3 p-2">
            <h7>Distance</h7>
            <label htmlFor="rangeInput" className="form-label"></label>
            <input
              type="range"
              className="form-range"
              id="rangeInput"
              min="5"
              max="100"
              value={distance}
              onChange={handleRangeChange}
            />
            <span>{distance} km</span>
          </div>
          <hr />

          <div className="filter mb-3 p-2">
            <h5>Delivery Type</h5>
            <label className="form-check-label mt-2">
              <input type="checkbox" className="form-check-input me-2" />
              Home Delivery
            </label>
            <p className="mt-2" style={{ fontSize: "11px" }}>
              <Icon icon="ep:warning" width="15" height="20" /> Additional Delivery
              charge applicable
            </p>
          </div>
          <hr />  

          <div className="filter mb-3 p-2">
            <h5>Total Price</h5>
            <div className="d-flex justify-content-between">
             
            </div>
            <div className="slider-container">
              <input
                type="range"
                className="form-range"
                min="100"
                max="2900"
                value={maxPrice}
                onChange={(e) => handlePriceChange(e, "max","min")}
                step="10x0"
                
              />
            </div>
            <div style={{display:"flex", justifyContent:"space-between"}}>
              <p>Min</p>
            <p>Rs. {maxPrice}</p>
            <p>Max</p>
            </div>
          </div>
        </aside>

        <div className="container my-4">
          <div className="row">
            {filteredCars.map((car, index) => (
              <div
                key={car.id || index}
                className="col-md-6 mb-4 mt-5 ms-3"
                style={{ width: "340px" }}
              >
                <div className="rounded-5 card shadow-sm h-100">
                  <div className="position-relative rounded-5">
                    {car.image ? (
                      <img
                        src={car.image}
                        className="card-img-top rounded-top-4"
                        alt={car.carModel}
                        style={{ height: "200px", objectFit: "cover" }}
                      />
                    ) : (
                      <div className="bg-secondary" style={{ height: "200px" }}>
                        <span className="text-white">No Image Available</span>
                      </div>
                    )}
                  </div>
                  <div className="card-body">
                    <h5 className="card-title">{car.carModel || "Unknown Model"}</h5>
                    <div className="card-text">
                      <strong>₹{car.ratePerHour || "N/A"}/hr</strong> <br />
                      <span>Owner: {car.carOwnerName || "Not Available"}</span> <br />
                      <span>Location: {car.location || "Location not available"}</span>{" "}
                      <br />
                      <span>Availability: {car.availability || "N/A"}</span>
                    </div>
                    <button className="btn btn-primary w-100">Book Now</button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarList;
