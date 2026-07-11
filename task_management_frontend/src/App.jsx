import { useState } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Dashboard from './components/Dashboard'
import CreateTask from './components/tasks/CreateTask'
import TaskList from './components/tasks/TaskList'
import TaskDetails from './components/tasks/TaskDetails'
import EditTask from './components/tasks/EditTask'
import CreateUser from './components/users/CreateUser'
import UserList from './components/users/UserList'
import UserDetail from './components/users/UserDetail'
import EditeUser from './components/users/EditeUser'
import Navbar from './components/Navbar'

function App() {

  return (
    <BrowserRouter>
    <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />}></Route>

          <Route path='/create_task' element={<CreateTask />}></Route>
          <Route path='/task_list' element={<TaskList />}></Route>
          <Route path='/task_detail/:ID' element={<TaskDetails />}></Route>
          <Route path='/edit_task/:ID' element={<EditTask />}></Route>

          <Route path='/create_user' element={<CreateUser />}></Route>
          <Route path='/user_list' element={<UserList />}></Route>
          <Route path='/user_detail/:ID' element={<UserDetail />}></Route>
          <Route path='/edit_user/:ID' element={<EditeUser />}></Route>

        </Routes>
    </BrowserRouter>
  )
}

export default App