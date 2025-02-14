import React from "react";
import { NavLink } from "react-router";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
        Home
      </NavLink>
      <NavLink to="/users">Users</NavLink>
      <NavLink to="/posts">Posts</NavLink>
    </div>
  );
};

export default Navbar;
