import React from "react";
import { Link } from "react-router-dom";
import {
  FaTasks,
  FaUsers,
  FaPlusCircle,
  FaClipboardList,
} from "react-icons/fa";
import "./Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard">

      <div className="container">

        {/* Header */}
        <div className="text-center py-5">
          <h1 className="dashboard-title">
            Task Management System
          </h1>

          <p className="dashboard-subtitle">
            Manage Tasks and Users efficiently with a simple and professional dashboard.
          </p>
        </div>

        {/* Cards */}
        <div className="row g-4">

          {/* Task Module */}
          <div className="col-md-6">
            <div className="dashboard-card">
              <div className="icon-box bg-primary">
                <FaTasks />
              </div>

              <h3>Task Management</h3>

              <p>
                Create, update, delete and manage all project tasks from one
                place.
              </p>

              <div className="d-flex justify-content-center gap-3 mt-4">
                <Link to="/create_task" className="btn btn-primary">
                  <FaPlusCircle className="me-2" />
                  Create Task
                </Link>

                <Link to="/task_list" className="btn btn-outline-primary">
                  <FaClipboardList className="me-2" />
                  View Tasks
                </Link>
              </div>
            </div>
          </div>

          {/* User Module */}
          <div className="col-md-6">
            <div className="dashboard-card">
              <div className="icon-box bg-success">
                <FaUsers />
              </div>

              <h3>User Management</h3>

              <p>
                Add users, assign tasks and manage team members efficiently.
              </p>

              <div className="d-flex justify-content-center gap-3 mt-4">
                <Link to="/create_user" className="btn btn-success">
                  <FaPlusCircle className="me-2" />
                  Create User
                </Link>

                <Link to="/user_list" className="btn btn-outline-success">
                  <FaUsers className="me-2" />
                  View Users
                </Link>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default Dashboard;