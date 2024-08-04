import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Login from "../pages/Login.jsx";
import Register from "../pages/Register.jsx";
import Navbar from "../layouts/Navbar.jsx";
import Organization from "../pages/Organization.jsx";
import Project from "../pages/Project.jsx";
import Bug from "../pages/Bug.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "org",
        element: <Organization />,
        children: [
          {
            path: "projects",
            element: <Project />,
            children: [
              {
                path: ":project_id",
                element: <Bug />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "register",
    element: <Register />,
  },
]);
export default router;
