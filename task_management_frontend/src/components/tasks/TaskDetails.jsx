import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getTaskDetail, deleteTaskById } from "../../api/api";
import {
  FaEdit,
  FaTrash,
  FaArrowLeft,
  FaCalendarAlt,
  FaTasks,
} from "react-icons/fa";

const TaskDetails = () => {
  const { ID } = useParams();
  const navigate = useNavigate();

  const [taskDetail, setTaskDetail] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const res = await getTaskDetail(ID);

      if (res.data.success) {
        setTaskDetail(res.data.task);
      }
    } catch (error) {
      console.log(error);
      alert("Unable to fetch task details.");
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async () => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this task?"
    );

    if (!confirmDelete) return;

    try {
      const res = await deleteTaskById(ID);

      if (res.data.success) {
        alert(res.data.message);
        navigate("/task_list");
      }
    } catch (error) {
      console.log(error);
      alert("Task not deleted.");
    }
  };

  useEffect(() => {
    fetchData();
  }, [ID]);

  const getStatusBadge = (status) => {
    switch (status) {
      case "completed":
        return <span className="badge bg-success">Completed</span>;

      case "in-progress":
        return (
          <span className="badge bg-warning text-dark">
            In Progress
          </span>
        );

      default:
        return <span className="badge bg-danger">Pending</span>;
    }
  };

  if (loading) {
    return (
      <div className="container mt-5 text-center">
        <h3>Loading...</h3>
      </div>
    );
  }

  return (
    <div
      className="container py-5"
      style={{ maxWidth: "800px" }}
    >
      <div className="card shadow-lg border-0 rounded-4">

        <div className="card-header bg-primary text-white py-4">

          <h2 className="mb-0">
            <FaTasks className="me-2" />
            Task Details
          </h2>

        </div>

        <div className="card-body p-4">

          <h3 className="fw-bold text-primary mb-3">
            {taskDetail?.title}
          </h3>

          <hr />

          <div className="mb-4">
            <h5>Description</h5>

            <p className="text-muted">
              {taskDetail?.description}
            </p>
          </div>

          <div className="row">

            <div className="col-md-6 mb-3">
              <h6>Status</h6>
              {getStatusBadge(taskDetail?.status)}
            </div>

            <div className="col-md-6 mb-3">
              <h6>Start Date</h6>

              <p>
                <FaCalendarAlt className="text-success me-2" />
                {taskDetail?.startDate}
              </p>
            </div>

            <div className="col-md-6">
              <h6>End Date</h6>

              <p>
                <FaCalendarAlt className="text-danger me-2" />
                {taskDetail?.endDate}
              </p>
            </div>

          </div>

          <hr />

          <div className="d-flex flex-wrap gap-3 mt-4">

            <Link
              to={`/edit_task/${taskDetail?.id}`}
              className="btn btn-warning"
            >
              <FaEdit className="me-2" />
              Edit Task
            </Link>

            <button
              className="btn btn-danger"
              onClick={handleDelete}
            >
              <FaTrash className="me-2" />
              Delete Task
            </button>

            <Link
              to="/task_list"
              className="btn btn-secondary ms-auto"
            >
              <FaArrowLeft className="me-2" />
              Back
            </Link>

          </div>

        </div>

      </div>
    </div>
  );
};

export default TaskDetails;