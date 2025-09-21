import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import api from "../utils/api";

export default function EmergencyBroadcastForm() {
  const [message, setMessage] = useState("");

  const handleBroadcast = async () => {
    if (!message.trim()) return;
    try {
      await api.post("/alerts/broadcast", { message });
      setMessage("");
      alert("Broadcast sent successfully!");
    } catch (err) {
      console.error(err);
      alert("Failed to send broadcast");
    }
  };

  return (
    <div className="bg-gray-800 p-4 rounded-lg">
      <h3 className="text-lg font-semibold mb-2">Emergency Broadcast</h3>
      <Input
        placeholder="Enter national alert message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="bg-gray-700 text-white mb-2"
      />
      <Button className="w-full" onClick={handleBroadcast}>
        Send Broadcast
      </Button>
    </div>
  );
}