import axios from "axios";
import { useEffect, useState } from "react";
import { Table } from "react-bootstrap";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get("http://localhost:8080/api/v1/user");
        setUsers(response.data);
      } catch (error) {
        console.error("Error fetching users:" , error);
      }
    };
    fetchUsers();
  }, []);

  console.log(users);

  return (
    <Table bordered>
      <thead>
        <tr>
          <th>ID</th>
          {/* <th>Name</th> */}
          <th>Email</th>
          {/* <th>Password</th> */}
          <th>Role</th>
          {/* <th>Actions</th> */}
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.id}</td>
            {/* <td>{user.name}</td> */}
            <td>{user.email}</td>
            {/* <td>{user.password}</td> */}
            <td>{user.role}</td>
            <td>
              <button>Edit</button> 
              <button>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

export default UserList;
