# 📋 Task Management System

A modern **Task Management System** built with **React.js**, **Django REST Framework**, and **SQLite**. This application allows administrators to manage tasks and assign them to users through a clean and responsive interface.

---

## 🚀 Features

### 📌 Task Management
- Create Task
- View All Tasks
- View Task Details
- Update Task
- Delete Task

### 👤 User Management
- Create User
- Assign Task to User
- View All Users
- Update User
- Delete User

### 🎨 Frontend
- Responsive Bootstrap UI
- Professional Dashboard
- Navigation Bar
- Modern Cards
- Form Validation

### ⚙ Backend
- Django REST Framework APIs
- CRUD Operations
- SQLite Database
- Foreign Key Relationship (User ↔ Task)
- JSON Responses

---

## 🛠 Tech Stack

### Frontend
- React.js
- React Router DOM
- Axios
- Bootstrap 5
- React Icons

### Backend
- Python
- Django
- Django REST Framework
- django-cors-headers

### Database
- SQLite

---

## 📂 Project Structure

```
Task-Management-System/
│
├── Backend/
│   ├── taskmanagementserver/
│   ├── tasks/
│   ├── users/
│   └── manage.py
│
├── Frontend/
│   ├── src/
│   ├── components/
│   ├── api/
│   └── App.jsx
│
└── README.md
```

## ⚙ Installation

### Clone Repository

```bash
git clone https://github.com/yourusername/Task-Management-System-React-Django.git
```

---

### Backend Setup

```bash
cd Backend/taskmanagementserver

python -m venv env

# Windows
env\Scripts\activate

pip install -r requirements.txt

python manage.py migrate

python manage.py runserver
```

Backend runs at

```
http://127.0.0.1:8000/
```

---

### Frontend Setup

```bash
cd Frontend

npm install

npm run dev
```

Frontend runs at

```
http://localhost:5173/
```

---

## 🔗 API Endpoints

### Task APIs

| Method | Endpoint |
|---------|----------|
| POST | `/api/tasks/create/` |
| GET | `/api/tasks/get_all_tasks/` |
| GET | `/api/tasks/get_task_by_id/<id>/` |
| PUT | `/api/tasks/update_task/<id>/` |
| DELETE | `/api/tasks/delete_task/<id>/` |

---

### User APIs

| Method | Endpoint |
|---------|----------|
| POST | `/api/users/createUser/` |
| GET | `/api/users/get_all_users/` |
| GET | `/api/users/get_user_by_id/<id>/` |
| PUT | `/api/users/update_user/<id>/` |
| DELETE | `/api/users/delete_user/<id>/` |


---

## 👩‍💻 Author

**Manasi Patil**

MCA Student

---

## ⭐ If you like this project

Give this repository a ⭐ on GitHub.
