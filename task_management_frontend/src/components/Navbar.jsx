import React from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
const Navbar = () => {
  const location = useLocation();

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark shadow-sm"
      style={{ background: "#0d6efd" }}
    >
      <div className="container">
        <Link className="navbar-brand fw-bold fs-4" to="/">
          📋 Task Management
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarContent"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarContent">
          <ul className="navbar-nav ms-auto">

            <li className="nav-item mx-2">
              <Link
                className={`nav-link ${
                  location.pathname === "/" ? "active fw-bold" : ""
                }`}
                to="/"
              >
                Home
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link
                className={`nav-link ${
                  location.pathname === "/create_task" ? "active fw-bold" : ""
                }`}
                to="/create_task"
              >
                Create Task
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link
                className={`nav-link ${
                  location.pathname === "/task_list" ? "active fw-bold" : ""
                }`}
                to="/task_list"
              >
                Task List
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link
                className={`nav-link ${
                  location.pathname === "/create_user" ? "active fw-bold" : ""
                }`}
                to="/create_user"
              >
                Create User
              </Link>
            </li>

            <li className="nav-item mx-2">
              <Link
                className={`nav-link ${
                  location.pathname === "/user_list" ? "active fw-bold" : ""
                }`}
                to="/user_list"
              >
                User List
              </Link>
            </li>

          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;