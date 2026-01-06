const API_URL = "http://localhost:8000";

export async function fetchData() {
  const res = await fetch(`${API_URL}/data`);
  return res.json();
}

export async function sendData(message) {
  const res = await fetch(`${API_URL}/send`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: message }),
  });
  return res.json();
}
