import React, { createContext, useContext, useState, useEffect } from "react";
import { getDevices, verifyDevice, removeDevice } from "../services/api";

// Create Context
const DevicesContext = createContext();

// Hook for easy usage
export const useDevices = () => useContext(DevicesContext);

// Provider
export const DevicesProvider = ({ children }) => {
  const [devices, setDevices] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch devices on mount
  useEffect(() => {
    const fetchDevices = async () => {
      try {
        const data = await getDevices();
        setDevices(data);
      } catch (err) {
        console.error("Error fetching devices:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchDevices();
  }, []);

  // Actions
  const handleVerify = async (deviceId) => {
    try {
      const updated = await verifyDevice(deviceId);
      setDevices((prev) =>
        prev.map((d) => (d.id === deviceId ? updated : d))
      );
    } catch (err) {
      console.error("Error verifying device:", err);
    }
  };

  const handleRemove = async (deviceId) => {
    try {
      await removeDevice(deviceId);
      setDevices((prev) => prev.filter((d) => d.id !== deviceId));
    } catch (err) {
      console.error("Error removing device:", err);
    }
  };

  return (
    <DevicesContext.Provider
      value={{ devices, loading, handleVerify, handleRemove }}
    >
      {children}
    </DevicesContext.Provider>
  );
};