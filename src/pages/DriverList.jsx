import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const DriverList = () => {
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    const fetchDrivers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/get-driver");
        setDrivers(response.data);
      } catch (error) {
        console.error("Error fetching drivers:", error);
       }
    }; 
    fetchDrivers();
  }, []);

console.log(drivers);

  return (
    <Table bordered>
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>License Number</th>
          <th>Phone Number</th>
          <th>Address</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        {drivers.map((driver) => (
          <tr key={driver.id}>
            <td>{driver.id}</td>
            <td>{driver.name}</td>
            <td>{driver.licenseNumber}</td>
            <td>{driver.phoneNumber}</td>
            <td>{driver.address}</td>
            <td>{driver.status}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default DriverList;
