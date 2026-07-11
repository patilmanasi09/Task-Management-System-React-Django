import React, { useState } from "react";
import { addNewTask } from "../../api/api";
import { FaTasks, FaCalendarAlt, FaFileAlt, FaSave } from "react-icons/fa";
import "./CreateTask.css";

const CreateTask = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const payload = {
      title,
      description,
      startDate,
      endDate,
    };

    try {
      const res = await addNewTask(payload);

      if (res.data.success) {
        alert("Task added successfully.");

        setTitle("");
        setDescription("");
        setStartDate("");
        setEndDate("");
      } else {
        alert("Task could not be created.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    }
  };

  return (
    <div className="task-page">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7">

            <div className="card task-card shadow-lg border-0">

              <div className="card-header task-header text-center">
                <FaTasks size={40} className="mb-2" />
                <h2>Create New Task</h2>
                <p className="mb-0">
                  Fill in the details below to create a new task.
                </p>
              </div>

              <div className="card-body p-4">

                <form onSubmit={handleSubmit}>

                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      <FaTasks className="me-2 text-primary" />
                      Task Title
                    </label>

                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter task title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                  </div>

                  <div className="mb-4">
                    <label className="form-label fw-bold">
                      <FaFileAlt className="me-2 text-success" />
                      Description
                    </label>

                    <textarea
                      rows="4"
                      className="form-control"
                      placeholder="Enter task description"
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                    ></textarea>
                  </div>

                  <div className="row">

                    <div className="col-md-6 mb-4">
                      <label className="form-label fw-bold">
                        <FaCalendarAlt className="me-2 text-warning" />
                        Start Date
                      </label>

                      <input
                        type="date"
                        className="form-control"
                        value={startDate}
                        onChange={(e) => setStartDate(e.target.value)}
                        required
                      />
                    </div>

                    <div className="col-md-6 mb-4">
                      <label className="form-label fw-bold">
                        <FaCalendarAlt className="me-2 text-danger" />
                        End Date
                      </label>

                      <input
                        type="date"
                        className="form-control"
                        value={endDate}
                        onChange={(e) => setEndDate(e.target.value)}
                        required
                      />
                    </div>

                  </div>

                  <button className="btn btn-primary w-100 py-2">
                    <FaSave className="me-2" />
                    Save Task
                  </button>

                </form>

              </div>

            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default CreateTask;