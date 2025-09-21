import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="sidebar">
      <ul>
        <li><Link to="/overview">Overview</Link></li>
        <li><Link to="/devices">Devices</Link></li>
        <li><Link to="/alerts">Alerts</Link></li>
        <li><Link to="/traffic">Traffic</Link></li>
        <li><Link to="/broadcast">Broadcast</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;