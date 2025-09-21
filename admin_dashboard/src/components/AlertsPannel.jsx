import { useAlerts } from "../context/AlertsContext";

export default function AlertsPanel() {
  const { alerts } = useAlerts();

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Security Alerts</h3>
      <ul className="text-sm space-y-1">
        {alerts.length === 0 ? (
          <li className="text-gray-400">No active alerts</li>
        ) : (
          alerts.map((alert, i) => (
            <li key={i} className="text-yellow-400 flex items-center">
              ⚠ {alert.message}
            </li>
          ))
        )}
      </ul>
    </div>
  );
}