// import React from 'react'
import "./Header.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProvider";

export default function Header() {
  const { user, logOut } = useContext(AuthContext);

  const handleLogout = () => {
    logOut();
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
            <p style={{ display: "inline", color: "green", fontSize: "1.5em" }}>
              Name: {user.name}
            </p>
            <button
              style={{
                width: "200px",
                height: "50px",
                fontSize: "25px",
                backgroundColor: "tomato",
                marginLeft: "15px",
              }}
              onClick={handleLogout}
            >
              Signout
            </button>
          </span>
        )}
      </div>
    </nav>
  );
}
