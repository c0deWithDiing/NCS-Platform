import { useContext } from "react";
import { DevicesContext } from "../context/DevicesContext";

export default function useDevices() {
  const context = useContext(DevicesContext);
  if (!context) {
    throw new Error("useDevices must be used inside DevicesProvider");
  }
  return context;
}