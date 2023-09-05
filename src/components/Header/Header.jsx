// import React from 'react'
import "./Header.css";
import logo from "../../images/logo.png";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <nav className="header">
      <img className="logo" src={logo} alt="logo" />
      <div className="links">
        <Link to="/">Shop</Link>
        <Link to="/orders">Orders</Link>
        <Link to="/inventory">Inventory</Link>
        <Link to="/login">Login</Link>
      </div>
    </nav>
  );
}
