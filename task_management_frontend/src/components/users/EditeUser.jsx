import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getUserDetail,
  updateUserById,
  getAllTasks,
} from "../../api/api";

import {
  FaUserEdit,
  FaUser,
  FaEnvelope,
  FaPhone,
  FaTasks,
} from "react-icons/fa";

const EditUser = () => {
  const { ID } = useParams();
  const navigate = useNavigate();

  const [tasks, setTasks] = useState([]);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contactNumber: "",
    task_id: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const fetchUser = async () => {
    try {
      const res = await getUserDetail(ID);

      if (res.data.success) {
        setFormData(res.data.user);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fetchTasks = async () => {
    try {
      const res = await getAllTasks();

      if (res.data.success) {
        setTasks(res.data.tasks);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchUser();
    fetchTasks();
  }, [ID]);

  const handleUpdateUser = async (e) => {
    e.preventDefault();

    try {
      const res = await updateUserById(ID, formData);

      if (res.data.success) {
        alert(res.data.message || "User Updated Successfully");
        navigate("/user_list");
      }
    } catch (error) {
      console.log(error);
      alert("Update Failed");
    }
  };

  return (
    <div
      className="container py-5"
      style={{ maxWidth: "650px" }}
    >
      <div className="card shadow-lg border-0 rounded-4">

        <div className="card-header bg-warning text-dark text-center py-4">
          <h2>
            <FaUserEdit className="me-2" />
            Update User
          </h2>
        </div>

        <div className="card-body p-4">

          <form onSubmit={handleUpdateUser}>

            <div className="mb-3">
              <label className="form-label fw-semibold">
                <FaUser className="me-2 text-primary" />
                Name
              </label>

              <input
                type="text"
                className="form-control form-control-lg"
                name="name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">
                <FaEnvelope className="me-2 text-primary" />
                Email
              </label>

              <input
                type="email"
                className="form-control form-control-lg"
                name="email"
                value={formData.email}
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">
                <FaPhone className="me-2 text-primary" />
                Contact Number
              </label>

              <input
                type="text"
                className="form-control form-control-lg"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">
                <FaTasks className="me-2 text-primary" />
                Assigned Task
              </label>

              <select
                className="form-select form-select-lg"
                name="task_id"
                value={formData.task_id}
                onChange={handleChange}
              >
                <option value="">Select Task</option>

                {tasks.map((task) => (
                  <option key={task.id} value={task.id}>
                    {task.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="d-grid">

              <button
                type="submit"
                className="btn btn-warning btn-lg"
              >
                <FaUserEdit className="me-2" />
                Update User
              </button>

            </div>

          </form>

        </div>

      </div>
    </div>
  );
};

export default EditUser;