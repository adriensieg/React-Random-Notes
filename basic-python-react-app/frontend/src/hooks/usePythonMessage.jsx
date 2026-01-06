import { useState, useEffect } from "react";
import { fetchData } from "../services/api";

export default function usePythonMessage() {
  const [message, setMessage] = useState("");

  useEffect(() => {
    fetchData().then(data => setMessage(data.message));
  }, []);

  return message;
}
