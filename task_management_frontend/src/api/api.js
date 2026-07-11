import axios from "axios";

const axiosInstance = axios.create({
    baseURL: "http://127.0.0.1:8000",
});


// ===================== TASK APIs =====================

export const addNewTask = (data) => {
    return axiosInstance.post("/api/tasks/create/", data);
};

export const getAllTasks = () => {
    return axiosInstance.get("/api/tasks/get_all_tasks/");
};

export const getTaskDetail = (id) => {
    return axiosInstance.get(`/api/tasks/get_task_by_id/${id}/`);
};

export const updateTaskById = (id, data) => {
    return axiosInstance.put(`/api/tasks/update_task/${id}/`, data);
};

export const deleteTaskById = (id) => {
    return axiosInstance.delete(`/api/tasks/delete_task/${id}/`);
};


// ===================== USER APIs =====================

export const addNewUser = (data) => {
    return axiosInstance.post("/api/users/createUser/", data);
};

export const getAllUsers = () => {
    return axiosInstance.get("/api/users/get_all_users/");
};

export const getUserDetail = (id) => {
    return axiosInstance.get(`/api/users/get_user_by_id/${id}/`);
};

export const updateUserById = (id, data) => {
    return axiosInstance.put(`/api/users/update_user/${id}/`, data);
};

export const deleteUserById = (id) => {
    return axiosInstance.delete(`/api/users/delete_user/${id}/`);
};

export default axiosInstance;