import React, { useContext } from "react";
import Card from "../components/Card";
import { AuthContext } from "../context/AuthContext";
import { AlertsContext } from "../context/AlertsContext";
import { DevicesContext } from "../context/DevicesContext";

export default function Overview() {
  const { user } = useContext(AuthContext);
  const { alerts } = useContext(AlertsContext);
  const { devices } = useContext(DevicesContext);

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold">System Overview</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Card title="Active Devices">
          <p className="text-3xl font-semibold">{devices.length}</p>
          <p className="text-sm text-gray-500">Total connected devices</p>
        </Card>

        <Card title="Active Alerts">
          <p className="text-3xl font-semibold text-yellow-400">
            {alerts.filter(a => !a.resolved).length}
          </p>
          <p className="text-sm text-gray-500">Unresolved security alerts</p>
        </Card>

        <Card title="Admin">
          <p className="text-lg">{user?.name || "Unknown"}</p>
          <p className="text-sm text-gray-500">Currently logged in</p>
        </Card>
      </div>

      <Card title="Recent Alerts">
        {alerts.length === 0 ? (
          <p className="text-gray-400">No alerts detected</p>
        ) : (
          <ul className="list-disc ml-6 space-y-1">
            {alerts.slice(0, 5).map((alert, idx) => (
              <li key={idx} className="text-sm">
                {alert.message} – <span className="text-gray-400">{alert.region}</span>
              </li>
            ))}
          </ul>
        )}
      </Card>
    </div>
  );
}