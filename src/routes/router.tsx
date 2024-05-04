import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import About from "../pages/About";
import Login from "../pages/Login";
import Register from "../pages/Register";
import { adminRoutes } from "./admin.routes";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "about",
        element: <About />,
      },
    ],
  },
  {
    path: "signup",
    element: <Register />,
  },
  {
    path: "login",
    element: <Login />,
  },

  // another layout
  {
    path: "/admin",
    element: <App />,
    children: adminRoutes,
  },
]);
