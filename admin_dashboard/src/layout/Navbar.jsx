import React from "react";
import useAuth from "../hooks/useAuth";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <nav className="navbar">
      <h2>NSC Admin Dashboard</h2>
      <div className="nav-right">
        <span>{user ? 'Logged in as: ${user.username}' : "Guest"}</span>
        {user && <button onClick={logout}>Logout</button>}
      </div>
    </nav>
  );
};

export default Navbar;