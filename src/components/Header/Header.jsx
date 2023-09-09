// import React from 'react'
import "./Header.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

export default function Header() {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error.message));
  };

  return (
    <nav className="header">
      <img className="logo" src={logo} alt="logo" />
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
        <Link to="/signup">Signup</Link>
        {user && (
          <span>
            <button
              style={{
                width: "150px",
                height: "50px",
                fontSize: "25px",
                backgroundColor: "tomato",
                marginLeft: "15px",
                border: "none",
                borderRadius: "10px",
                color: "yellow",
              }}
              onClick={handleLogout}
            >
              Signout
            </button>
            <small
              style={{ marginLeft: "20px", fontSize: "1.25em", color: "black" }}
            >
              : {user.email}
            </small>
          </span>
        )}
      </div>
    </nav>
  );
}
