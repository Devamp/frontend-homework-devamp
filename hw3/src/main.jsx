import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";

import Home from './routes/home'
import List from './routes/list';
import Population from './routes/population'
import GDP from './routes/gdp'
import ErrorPage from './error-page'

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/list",
    element: <List />,
  },
  {
    path: "/population",
    element: <Population />,
  },
  {
    path: "/gdp",
    element: <GDP />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);