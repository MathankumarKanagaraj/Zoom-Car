import React from "react";
import "../pages/CarList"

const Sidebar = ({ filters, onFilterChange }) => {
  return (
    <div className="sidebar">
      <h4 className="text-center mb-4">Filters</h4>
      <div className="filter-group">
        <label htmlFor="distance">Distance</label>
        <input
          type="range"
          id="distance"
          min="0"
          max="50" 
          value={filters.distance}
          onChange={(e) => onFilterChange({ ...filters, distance: e.target.value })}
        />
        <span>{filters.distance} km</span>
      </div>
      <div className="filter-group">
        <label htmlFor="deliveryType">Delivery Type</label>
        <select
          id="deliveryType"
          value={filters.deliveryType}
          onChange={(e) => onFilterChange({ ...filters, deliveryType: e.target.value })}
        >
          <option value="">All</option>
          <option value="homeDelivery">Home Delivery</option>
          <option value="pickup">Pickup</option>
        </select>
      </div>
      <div className="filter-group">
        <label htmlFor="price">Total Price</label>
        <input
          type="range"
          id="price"
          min="400"
          max="2100"
          value={filters.price}
          onChange={(e) => onFilterChange({ ...filters, price: e.target.value })}
        />
        <span>₹{filters.price}</span>
      </div>
    </div>
  );
};

export default Sidebar;
