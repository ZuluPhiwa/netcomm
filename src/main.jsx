import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AboutUs from "./Pages/About.jsx";
import Services from "./Pages/Services.jsx";

import Contact from "./Pages/Contact.jsx";
import Home from "./Pages/Home.jsx";
import Premises from "./Pages/Premises.jsx";
const router = createBrowserRouter([
  {
    path: "/netcomm/",
    element: <App />,
    children: [
      {
        path: "/netcomm/",
        element: <Home />,
      },
      {
        path: "/netcomm/contact",
        element: <Contact />,
      },
      {
        path: "/netcomm/about",
        element: <AboutUs />,
      },
      {
        path: "/netcomm/services",
        element: <Services />,
      },
      {
        path: "/netcomm/premises",
        element: <Premises />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
