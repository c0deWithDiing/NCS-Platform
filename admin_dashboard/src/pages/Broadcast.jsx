import React, { useState } from "react";

const Broadcast = () => {
  const [message, setMessage] = useState("");

  const handleSend = () => {
    'alert(Broadcasting: ${message})';
    setMessage("");
  };

  return (
    <div className="p-6 text-gray-100">
      <h1 className="text-2xl font-bold mb-6">Broadcast</h1>
      <textarea
        className="w-full p-3 rounded-lg bg-gray-800 text-gray-100 mb-4"
        rows="5"
        placeholder="Type your broadcast message..."
        value={message}
        onChange={(e) => setMessage(e.target.value)}
      />
      <button
        onClick={handleSend}
        className="px-6 py-2 bg-blue-600 rounded hover:bg-blue-700"
      >
        Send Broadcast
      </button>
    </div>
  );
};

export default Broadcast;