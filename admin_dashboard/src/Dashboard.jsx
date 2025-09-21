import React from "react";

const Dashboard = () => {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
      <p className="text-gray-600">
        Welcome to your secure admin dashboard. Here you’ll see an overview of
        system activity, stats, and insights.
      </p>

      {/* Example cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-semibold">Active Devices</h2>
          <p className="text-2xl font-bold text-blue-600">128</p>
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-semibold">Alerts</h2>
          <p className="text-2xl font-bold text-red-600">5</p>
        </div>

        <div className="bg-white shadow rounded-lg p-4">
          <h2 className="text-xl font-semibold">Network Traffic</h2>
          <p className="text-2xl font-bold text-green-600">1.2 GB</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;