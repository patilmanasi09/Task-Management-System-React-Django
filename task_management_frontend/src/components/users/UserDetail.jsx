import React, { useEffect, useState } from "react";
import { getUserDetail } from "../../api/api";
import { useParams, Link } from "react-router-dom";
import {
  FaUserCircle,
  FaEnvelope,
  FaPhoneAlt,
  FaTasks,
  FaArrowLeft,
} from "react-icons/fa";

const UserDetail = () => {
  const { ID } = useParams();
  const [user, setUser] = useState(null);

  const fetchData = async () => {
    try {
      const res = await getUserDetail(ID);

      if (res.data.success) {
        setUser(res.data.user);
      }
    } catch (error) {
      console.log(error);
      alert("Unable to fetch user.");
    }
  };

  useEffect(() => {
    fetchData();
  }, [ID]);

  if (!user) return <h3 className="text-center mt-5">Loading...</h3>;

  return (
    <div className="container py-5">
      <div className="card shadow-lg border-0 mx-auto" style={{ maxWidth: "600px" }}>
        <div className="card-body text-center">

          <FaUserCircle size={100} className="text-primary mb-3" />

          <h2>{user.name}</h2>

          <hr />

          <p>
            <FaEnvelope className="text-primary me-2" />
            {user.email}
          </p>

          <p>
            <FaPhoneAlt className="text-success me-2" />
            {user.contactNumber}
          </p>

          <p>
            <FaTasks className="text-warning me-2" />
            Assigned Task:
            <span className="badge bg-info ms-2">
              {user.taskTitle}
            </span>
          </p>

          <Link to="/user_list" className="btn btn-dark mt-3">
            <FaArrowLeft className="me-2" />
            Back
          </Link>

        </div>
      </div>
    </div>
  );
};

export default UserDetail;