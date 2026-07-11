import React, { useEffect, useState } from "react";
import { getAllTasks } from "../../api/api";
import { Link } from "react-router-dom";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  const fetchData = async () => {
    try {
      const res = await getAllTasks();

      if (res.data.success) {
        setTasks(res.data.tasks);
      }
    } catch (error) {
      console.error(error);
      alert("Failed to fetch tasks.");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="container mt-4">
      <div className="card shadow">
        <div className="card-header">
          <h3 className="text-center">Task List</h3>
        </div>

        <div className="card-body">
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th>#</th>
                <th>Title</th>
                <th>Description</th>
                <th>Status</th>
                <th>Start Date</th>
                <th>End Date</th>
              </tr>
            </thead>

            <tbody>
              {tasks.length > 0 ? (
                tasks.map((task, index) => (
                  <tr key={task.id}>
                    <td>{index + 1}</td>

                    <td>
                      <Link to={`/task_detail/${task.id}`}>
                        {task.title}
                      </Link>
                    </td>

                    <td>{task.description}</td>
                    <td>{task.status}</td>
                    <td>{task.startDate}</td>
                    <td>{task.endDate}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="6" className="text-center">
                    No Tasks Found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TaskList;