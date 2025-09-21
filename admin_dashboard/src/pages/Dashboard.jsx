import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6 text-gray-100">
      <h1 className="text-2xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gray-800 rounded-lg p-4 shadow">
          <h2 className="text-lg font-semibold">Active Users</h2>
          <p className="text-3xl mt-2">1,245</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 shadow">
          <h2 className="text-lg font-semibold">Devices Online</h2>
          <p className="text-3xl mt-2">327</p>
        </div>
        <div className="bg-gray-800 rounded-lg p-4 shadow">
          <h2 className="text-lg font-semibold">Alerts Today</h2>
          <p className="text-3xl mt-2">42</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;