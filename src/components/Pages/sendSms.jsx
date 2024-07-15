import React, { useState } from "react";
import axios from "axios";

const SendSMS = () => {
  const [message, setMessage] = useState("");
  const [to, setTo] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/send-sms", {
        message,
        to,
      });
      if (response.data.success) {
        alert("SMS sent successfully!");
      } else {
        alert("Failed to send SMS");
      }
    } catch (error) {
      console.error("Error sending SMS:", error);
      alert("Error sending SMS");
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>To:</label>
        <input
          type="text"
          value={to}
          onChange={(e) => setTo(e.target.value)}
          placeholder="Recipient phone number"
        />
      </div>
      <div>
        <label>Message:</label>
        <textarea
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Your message"
        ></textarea>
      </div>
      <button type="submit">Send SMS</button>
    </form>
  );
};

export default SendSMS;
