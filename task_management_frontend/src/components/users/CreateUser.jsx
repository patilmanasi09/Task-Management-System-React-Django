import React, { useState, useEffect } from "react";
import { addNewUser, getAllTasks } from "../../api/api";
import { useNavigate } from "react-router-dom";
import {
  FaUser,
  FaEnvelope,
  FaPhone,
  FaTasks,
  FaUserPlus,
} from "react-icons/fa";

const CreateUser = () => {
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

  const fetchTaskData = async () => {
    try {
      const res = await getAllTasks();

      if (res.data.success) {
        setTasks(res.data.tasks);
      }
    } catch (error) {
      console.log(error);
      alert("Unable to fetch tasks.");
    }
  };

  useEffect(() => {
    fetchTaskData();
  }, []);

  const handleSubmitUser = async (e) => {
    e.preventDefault();

    try {
      const res = await addNewUser(formData);

      if (res.data.success) {
        alert(res.data.Message || "User created successfully");

        setFormData({
          name: "",
          email: "",
          contactNumber: "",
          task_id: "",
        });

        navigate("/user_list");
      } else {
        alert("User not added");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong.");
    }
  };

  return (
    <div
      className="container py-5"
      style={{ maxWidth: "650px" }}
    >
      <div className="card border-0 shadow-lg rounded-4">

        <div
          className="card-header text-white text-center py-4 rounded-top-4"
          style={{
            background: "linear-gradient(90deg,#0d6efd,#6610f2)",
          }}
        >
          <h2 className="mb-0">
            <FaUserPlus className="me-2" />
            Create New User
          </h2>
        </div>

        <div className="card-body p-4">

          <form onSubmit={handleSubmitUser}>

            <div className="mb-4">
              <label className="form-label fw-semibold">
                <FaUser className="me-2 text-primary" />
                Full Name
              </label>

              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Full Name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">
                <FaEnvelope className="me-2 text-primary" />
                Email Address
              </label>

              <input
                type="email"
                className="form-control form-control-lg"
                placeholder="Enter Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">
                <FaPhone className="me-2 text-primary" />
                Contact Number
              </label>

              <input
                type="text"
                className="form-control form-control-lg"
                placeholder="Enter Contact Number"
                name="contactNumber"
                value={formData.contactNumber}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-4">
              <label className="form-label fw-semibold">
                <FaTasks className="me-2 text-primary" />
                Assign Task
              </label>

              <select
                className="form-select form-select-lg"
                name="task_id"
                value={formData.task_id}
                onChange={handleChange}
                required
              >
                <option value="">Choose a Task</option>

                {tasks.map((task) => (
                  <option key={task.id} value={task.id}>
                    {task.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="d-grid mt-4">

              <button
                type="submit"
                className="btn btn-primary btn-lg"
              >
                <FaUserPlus className="me-2" />
                Create User
              </button>

            </div>

          </form>

        </div>

      </div>
    </div>
  );
};

export default CreateUser;