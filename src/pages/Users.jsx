import React, { useEffect, useState } from "react";

export default function Users() {
  const [users, setUsers] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        // Retrieve the token from localStorage
        const idToken = localStorage.getItem("userToken");

        if (!idToken) {
          setError("No token found. Please log in again.");
          return;
        }

        const response = await fetch("http://localhost:3000/users", {
          headers: {
            Authorization: `Bearer ${idToken}`, // Use Bearer format for token
          },
        });

        if (!response.ok) {
          throw new Error("Failed to fetch users. Please check your authorization.");
        }

        const data = await response.json();
        setUsers(data.users);
      } catch (error) {
        setError("Error fetching users: " + error.message);
        console.error("Error fetching users:", error);
      }
    };

    fetchUsers();
  }, []);

  return (
    <div>
      <h1>Users</h1>
      {error ? (
        <p>{error}</p>
      ) : users.length > 0 ? (
        <ul>
          {users.map((user) => (
            <li key={user.id}>
              {user.name} - {user.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>No users found.</p>
      )}
    </div>
  );
}
