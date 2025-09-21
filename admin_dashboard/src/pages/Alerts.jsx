import React from "react";

const Alerts = () => {
  const alerts = [
    { id: 1, type: "Intrusion", level: "High", time: "10:45 AM" },
    { id: 2, type: "Connection Lost", level: "Medium", time: "11:10 AM" },
    { id: 3, type: "System Update", level: "Low", time: "12:05 PM" },
  ];

  return (
    <div className="p-6 text-gray-100">
      <h1 className="text-2xl font-bold mb-6">Alerts</h1>
      <div className="space-y-4">
        {alerts.map((a) => (
          <div
            key={a.id}
            className={`p-4 rounded-lg shadow ${
              a.level === "High"
                ? "bg-red-700"
                : a.level === "Medium"
                ? "bg-yellow-600"
                : "bg-gray-700"
            }`}
          >
            <h2 className="text-lg font-semibold">{a.type}</h2>
            <p>Level: {a.level}</p>
            <p>Time: {a.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Alerts;