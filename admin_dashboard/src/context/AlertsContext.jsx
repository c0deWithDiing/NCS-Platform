import React, { createContext, useContext, useState, useEffect } from "react";
import { getAlerts, acknowledgeAlert } from "../services/api";

// Create Context
const AlertsContext = createContext();

// Hook for easy usage
export const useAlerts = () => useContext(AlertsContext);

// Provider
export const AlertsProvider = ({ children }) => {
  const [alerts, setAlerts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch alerts on mount
  useEffect(() => {
    const fetchAlerts = async () => {
      try {
        const data = await getAlerts();
        setAlerts(data);
      } catch (err) {
        console.error("Error fetching alerts:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchAlerts();
  }, []);

  // Action: acknowledge/dismiss alert
  const handleAcknowledge = async (alertId) => {
    try {
      await acknowledgeAlert(alertId);
      setAlerts((prev) => prev.filter((a) => a.id !== alertId));
    } catch (err) {
      console.error("Error acknowledging alert:", err);
    }
  };

  return (
    <AlertsContext.Provider value={{ alerts, loading, handleAcknowledge }}>
      {children}
    </AlertsContext.Provider>
  );
};