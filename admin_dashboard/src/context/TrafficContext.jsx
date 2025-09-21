import React, { createContext, useState } from "react";

export const TrafficContext = createContext();

export const TrafficProvider = ({ children }) => {
  const [trafficData, setTrafficData] = useState([]);

  return (
    <TrafficContext.Provider value={{ trafficData, setTrafficData }}>
      {children}
    </TrafficContext.Provider>
  );
};