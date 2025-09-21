// src/App.jsx
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Context Providers
import { DevicesProvider } from "./context/DevicesContext";
import { AlertsProvider } from "./context/AlertsContext";
import { AuthProvider } from "./context/AuthContext";
// import { TrafficProvider } from "./context/TrafficContext"; // add later if needed

// Layout
import Sidebar from "./layout/Sidebar";
import Dashboard from "./pages/Dashboard";
import Overview from "./pages/Overview";
import Devices from "./pages/Devices";
import Alerts from "./pages/Alerts";
import Traffic from "./pages/Traffic";
import Broadcast from "./pages/Broadcast";

const App = () => {
  return (
    <AuthProvider>
      <DevicesProvider>
        <AlertsProvider>
          {/* <TrafficProvider>  // enable when TrafficContext is ready */}
          <Router>
            <div className="app">
              <Sidebar />
              <main className="content">
                <Routes>
                  <Route path="/" element={<Dashboard />} />
                  <Route path="/overview" element={<Overview />} />
                  <Route path="/devices" element={<Devices />} />
                  <Route path="/alerts" element={<Alerts />} />
                  <Route path="/traffic" element={<Traffic />} />
                  <Route path="/broadcast" element={<Broadcast />} />
                </Routes>
              </main>
            </div>
          </Router>
          {/* </TrafficProvider> */}
        </AlertsProvider>
      </DevicesProvider>
    </AuthProvider>
  );
};

export default App;