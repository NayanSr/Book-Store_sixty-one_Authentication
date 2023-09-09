import React from "react";
import ReactDOM from "react-dom/client";
// import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Shop from "./components/Shop/Shop.jsx";
import Home from "./components/Layout/Home.jsx";
import Orders from "./components/Orders/Orders.jsx";
import Inventory from "./components/Inventory/Inventory.jsx";
import Login from "./components/Login/Login";
import cartBooksLoader from "./loaders/cartBookLoader";
import CheckOut from "./components/CheckOut/CheckOut";
import Signup from "./components/Signup/Signup";
import AuthProvider from "./providers/AuthProvider";
import PrivateRoute from "./routes/PrivateRoute";
// import Signup from "./components/Layout/Signup/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    children: [
      { path: "/", element: <Shop /> },

      {
        path: "/orders",
        element: <Orders />,
        loader: cartBooksLoader, // custom loader
        // loader: () => fetch("books.json"),
      },

      {
        path: "/inventory",
        element: (
          <PrivateRoute>
            <Inventory />
          </PrivateRoute>
        ),
      },
      { path: "/login", element: <Login /> },
      { path: "/signup", element: <Signup /> },
      {
        path: "checkOut",
        element: (
          <PrivateRoute>
            <CheckOut />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  </AuthProvider>
);
