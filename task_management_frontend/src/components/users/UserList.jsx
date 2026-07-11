import React, { useEffect, useState } from "react";
import { getAllUsers, deleteUserById } from "../../api/api";
import { Link } from "react-router-dom";
import {
  FaUserCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaTasks,
  FaEdit,
  FaTrash,
  FaEye,
} from "react-icons/fa";

const UserList = () => {
  const [users, setUsers] = useState([]);

  const fetchData = async () => {
    try {
      const res = await getAllUsers();

      if (res.data.success) {
        setUsers(res.data.users);
      }
    } catch (error) {
      console.log(error);
      alert("Unable to fetch users.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this user?"
    );

    if (!confirmDelete) return;

    try {
      const res = await deleteUserById(id);

      if (res.data.success) {
        alert(res.data.message);
        fetchData();
      }
    } catch (error) {
      console.log(error);
      alert("User not deleted.");
    }
  };

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fw-bold text-primary">
          <FaUserCircle className="me-2" />
          User Management
        </h2>

        <Link to="/create_user" className="btn btn-primary">
          + Add User
        </Link>
      </div>

      <div className="row g-4">
        {users.length > 0 ? (
          users.map((user) => (
            <div className="col-md-6 col-lg-4" key={user.id}>
              <div
                className="card border-0 shadow-lg h-100"
                style={{ borderRadius: "18px" }}
              >
                <div className="card-body text-center">

                  <FaUserCircle
                    size={80}
                    className="text-primary mb-3"
                  />

                  <h4 className="fw-bold">{user.name}</h4>

                  <hr />

                  <p className="text-secondary mb-2">
                    <FaEnvelope className="me-2 text-primary" />
                    {user.email}
                  </p>

                  <p className="text-secondary mb-2">
                    <FaPhoneAlt className="me-2 text-success" />
                    {user.contactNumber}
                  </p>

                  <span className="badge bg-info fs-6 px-3 py-2">
                    <FaTasks className="me-2" />
                    {user.taskTitle}
                  </span>

                  <div className="d-grid gap-2 mt-4">

                    <Link
                      to={`/user_detail/${user.id}`}
                      className="btn btn-outline-primary"
                    >
                      <FaEye className="me-2" />
                      View
                    </Link>

                    <Link
                      to={`/edit_user/${user.id}`}
                      className="btn btn-warning"
                    >
                      <FaEdit className="me-2" />
                      Edit
                    </Link>

                    <button
                      className="btn btn-danger"
                      onClick={() => handleDelete(user.id)}
                    >
                      <FaTrash className="me-2" />
                      Delete
                    </button>

                  </div>

                </div>
              </div>
            </div>
          ))
        ) : (
          <div className="col-12">
            <div className="alert alert-info text-center">
              No users found.
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UserList;