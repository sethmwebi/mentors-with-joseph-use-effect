import React, { useEffect, useState } from "react";
import "./Users.css";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const result = await res.json();
      setUsers(result);
    };

    fetchUsers();
  }, []);

  return (
    <div className="users-container">
      {users.map((user, index) => {
        return (
          <div
            key={user.id}
            style={{ display: "flex", flexDirection: "column", gap: "2px" }}
          >
            <p>{user.name}</p>
            <p>{user.email}</p>
            <p>{user.address.street}</p>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Users;
