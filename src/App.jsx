import './App.css'
import React from 'react';
import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider, Routes } from 'react-router-dom';
import CreateOrganization from "./pages/CreateOrganization";
import CreateProject from "./pages/CreateProject";
import Login from './pages/Login';
import Register from './pages/Register';

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Routes>
//       <Route path="login" element={<Login />} />
//       <Route path="register" element={<Register />} />
//       <Route path="createOrg" element={<CreateOrganization/>} />
//       <Route path="createProject" element={<CreateProject />} />
//     </Routes>
//   )
// )

function App({routes}) {

  return (
    <>
    </>
  );
}

export default App;
