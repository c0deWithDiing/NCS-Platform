import React from "react";

const Devices = () => {
  const devices = [
    { id: 1, name: "Router 01", status: "Online" },
    { id: 2, name: "Camera 05", status: "Offline" },
    { id: 3, name: "Drone A2", status: "Active" },
  ];

  return (
    <div className="p-6 text-gray-100">
      <h1 className="text-2xl font-bold mb-6">Devices</h1>
      <table className="w-full border border-gray-700 text-left">
        <thead className="bg-gray-800">
          <tr>
            <th className="p-3">ID</th>
            <th className="p-3">Device</th>
            <th className="p-3">Status</th>
          </tr>
        </thead>
        <tbody>
          {devices.map((d) => (
            <tr key={d.id} className="border-t border-gray-700">
              <td className="p-3">{d.id}</td>
              <td className="p-3">{d.name}</td>
              <td
                className={`p-3 font-semibold ${
                  d.status === "Online"
                    ? "text-green-400"
                    : d.status === "Offline"
                    ? "text-red-400"
                    : "text-yellow-400"
                }`}
              >
                {d.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Devices;