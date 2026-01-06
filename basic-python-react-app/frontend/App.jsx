import React, { useState } from "react";
import usePythonMessage from "./hooks/usePythonMessage";
import { sendData } from "./services/api";

export default function App() {
  const pythonMessage = usePythonMessage();
  const [input, setInput] = useState("");
  const [response, setResponse] = useState("");

  const handleSend = async () => {
    const res = await sendData(input);
    setResponse(res.status + ": " + res.yourMessage);
    setInput("");
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-3">Python says: {pythonMessage}</h2>

      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          value={input}
          onChange={e => setInput(e.target.value)}
          placeholder="Type message to Python"
        />
      </div>

      <button className="btn btn-primary mb-3" onClick={handleSend}>
        Send
      </button>

      {response && <div className="alert alert-success">{response}</div>}
    </div>
  );
}
