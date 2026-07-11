import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTaskDetail, updateTaskById } from "../../api/api";
import { FaEdit, FaSave, FaCalendarAlt } from "react-icons/fa";

const EditTask = () => {
  const { ID } = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(true);

  const [formData, setFormData] = useState({
    title: "",
    description: "",
    status: "pending",
    startDate: "",
    endDate: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const fetchData = async () => {
    try {
      const res = await getTaskDetail(ID);

      if (res.data.success) {
        setFormData(res.data.task);
      }
    } catch (error) {
      console.log(error);
      alert("Unable to load task.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, [ID]);

  const handleUpdateTask = async (e) => {
    e.preventDefault();

    try {
      const res = await updateTaskById(ID, formData);

      if (res.data.success) {
        alert("Task Updated Successfully");
        navigate("/task_list");
      }
    } catch (error) {
      console.log(error);
      alert("Task update failed.");
    }
  };

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <h4>Loading...</h4>
      </div>
    );
  }

  return (
    <div
      className="container py-5"
      style={{ maxWidth: "700px" }}
    >
      <div className="card shadow-lg border-0 rounded-4">

        <div className="card-header bg-warning text-dark text-center py-3 rounded-top-4">
          <h2 className="mb-0">
            <FaEdit className="me-2" />
            Update Task
          </h2>
        </div>

        <div className="card-body p-4">

          <form onSubmit={handleUpdateTask}>

            <div className="mb-3">
              <label className="form-label fw-semibold">
                Task Title
              </label>

              <input
                type="text"
                className="form-control form-control-lg"
                name="title"
                value={formData.title}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">
                Description
              </label>

              <textarea
                rows="4"
                className="form-control"
                name="description"
                value={formData.description}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label fw-semibold">
                Status
              </label>

              <select
                className="form-select"
                name="status"
                value={formData.status}
                onChange={handleChange}
              >
                <option value="pending">Pending</option>
                <option value="in-progress">In Progress</option>
                <option value="completed">Completed</option>
              </select>
            </div>

            <div className="row">

              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">
                  <FaCalendarAlt className="me-2 text-success" />
                  Start Date
                </label>

                <input
                  type="date"
                  className="form-control"
                  name="startDate"
                  value={formData.startDate}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label className="form-label fw-semibold">
                  <FaCalendarAlt className="me-2 text-danger" />
                  End Date
                </label>

                <input
                  type="date"
                  className="form-control"
                  name="endDate"
                  value={formData.endDate}
                  onChange={handleChange}
                />
              </div>

            </div>

            <div className="d-grid mt-4">

              <button
                type="submit"
                className="btn btn-warning btn-lg"
              >
                <FaSave className="me-2" />
                Update Task
              </button>

            </div>

          </form>

        </div>

      </div>
    </div>
  );
};

export default EditTask;