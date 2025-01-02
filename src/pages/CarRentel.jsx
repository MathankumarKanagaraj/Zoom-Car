import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";
import CarButton from "../components/Button";
import { useNavigate } from "react-router-dom";

const CarRentalUI = () => {
  const [states, setStates] = useState([]);
  const [locations, setLocations] = useState([]);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStates = async () => {
      try {
        const response = await fetch("http://localhost:8080/states/get-state");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setStates(data.map((state) => state.stateName));
      } catch (error) {
        console.error("Error fetching states:", error);
      }
    };

    fetchStates();
  }, []);

  useEffect(() => {
    const fetchLocations = async () => {
      try {
        const response = await fetch("http://localhost:8080/locations");
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data = await response.json();
        setLocations(data);
      } catch (error) {
        console.error("Error fetching locations:", error);
      }
    };

    fetchLocations();
  }, []);

  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  const currentDate = getCurrentDate();

  const handleStartDateChange = (e) => {
    const newStartDate = e.target.value;
    setStartDate(newStartDate);
    if (newStartDate > endDate) {
      setEndDate("");
    }
  };

  const isFormValid = selectedState && selectedLocation && startDate && endDate;

  return (
    <Container fluid className="col-12 bg-light rounded p-4 pt-5 ps-5 pe-0">
      <div className="row align-items-center">
        <div className="col-md-2">
          <select
            className="form-select"
            value={selectedState}
            onChange={(e) => setSelectedState(e.target.value)}
          >
            <option value="">Select State</option>
            {states.map((state, index) => (
              <option key={index} value={state}>
                {state}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-4">
          <select
            className="form-control"
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          >
            <option value="" disabled>
              Select Location
            </option>
            {locations.map((location, index) => (
              <option key={index} value={location.locationName}>
                {location.locationName}
              </option>
            ))}
          </select>
        </div>

        <div className="col-md-2">
          <input
            type="date"
            className="form-control"
            min={currentDate}
            value={startDate}
            onChange={handleStartDateChange}
          />
        </div>

        <div className="col-md-2">
          <input
            type="date"
            className="form-control"
            min={startDate || currentDate}
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
          />
        </div>

        <div className="col-md-2">
          <CarButton
            label={"SEARCH CAR"}
            variant={"success"}
            onClick={() => navigate("/car")}
            disabled={!isFormValid}
          />
        </div>

        <div className="row mt-3">
          <div className="col-md-12">
            <div className="form-check" style={{ color: "green" }}>
              <input type="checkbox" className="form-check-input" />
              <div className="form-check-label" htmlFor="homeDelivery">
                Home Delivery & Pick-up
              </div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CarRentalUI;
