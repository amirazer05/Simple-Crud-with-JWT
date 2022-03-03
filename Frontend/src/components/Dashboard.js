/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useUsers } from "../utils/users";

export const Dashboard = () => {
  const users = useSelector((state) => state.users);
  const { GetUsers, DeleteUser } = useUsers();

  useEffect(() => {
    GetUsers();
  }, []);

  const handleDelete = (userId) => {
    DeleteUser(userId);
  };

  return (
    <div className="container mt-5">
      <h1>Welcome Back</h1>
      <table className="table is-striped is-fullwidth">
        <thead>
          <tr>
            <th>No</th>
            <th>Name</th>
            <th>Email</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={user.id}>
              <td>{index + 1}</td>
              <td>{user.name}</td>
              <td>{user.email}</td>

              <td>
                <Link to={`/edit/${user.id}`} className="button is-small is-info">
                  Edit
                </Link>
                <button
                  onClick={() => {
                    handleDelete(user.id);
                  }}
                  className="button is-small is-danger"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Dashboard;
