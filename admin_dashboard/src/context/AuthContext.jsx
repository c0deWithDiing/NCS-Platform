import React, { createContext, useState, useEffect } from "react";
import { login as loginService, logout as logoutService } from "../services/auth";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = async (username, password) => {
    const data = await loginService(username, password);
    localStorage.setItem("nsc_token", data.token);
    setUser(data.user);
  };

  const logout = async () => {
    await logoutService();
    setUser(null);
  };

  useEffect(() => {
    const token = localStorage.getItem("nsc_token");
    if (token) {
      setUser({ username: "Admin" }); // later validate with backend
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};