import axios from "axios";

// Base API instance
const api = axios.create({
  baseURL: "http://localhost:8000/api", // 🔹 change this to your backend URL
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔑 AUTH
export const login = async (secureId, pin) => {
  const res = await api.post("/auth/login", { secureId, pin });
  return res.data;
};

export const logout = async () => {
  const res = await api.post("/auth/logout");
  return res.data;
};

// 📱 DEVICES
export const getDevices = async () => {
  const res = await api.get("/devices");
  return res.data; // Expected: [{ id, name, status }]
};

export const verifyDevice = async (deviceId) => {
  const res = await api.post('/devices/${deviceId}/verify');
  return res.data; // Updated device
};

export const removeDevice = async (deviceId) => {
  const res = await api.delete('/devices/${deviceId}');
  return res.data; // { success: true }
};

// 🚨 ALERTS
export const getAlerts = async () => {
  const res = await api.get("/alerts");
  return res.data; // Expected: [{ id, type, message, timestamp }]
};

export const acknowledgeAlert = async (alertId) => {
  const res = await api.post('/alerts/${alertId}/acknowledge');
  return res.data; // { success: true }
};

// 📡 NETWORK / MONITORING
export const getNetworkStatus = async () => {
  const res = await api.get("/network/status");
  return res.data; // { connectedNodes: n, uptime: %, latency: ms }
};

export const getTrafficData = async () => {
  const res = await api.get("/network/traffic");
  return res.data; // For graphs: { timestamp, volume }
};

// 📢 EMERGENCY BROADCAST
export const sendBroadcast = async (message) => {
  const res = await api.post("/broadcast", { message });
  return res.data; // { success: true }
};

// 🛡 Attach token for secure requests
export const setAuthToken = (token) => {
  if (token) {
    api.defaults.headers.common["Authorization"] = 'Bearer ${token}';
  } else {
    delete api.defaults.headers.common["Authorization"];
  }
};