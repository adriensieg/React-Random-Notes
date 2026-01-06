from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel
import uvicorn

app = FastAPI()

# Allow React frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],  # React dev server
    allow_methods=["*"],
    allow_headers=["*"],
)

# Model for POST requests from React
class Message(BaseModel):
    text: str

# Example: push data from Python -> React (GET)
@app.get("/data")
async def get_data():
    return {"message": "Hello from Python!"}

# Example: React -> Python (POST)
@app.post("/send")
async def receive_data(msg: Message):
    print("Received from React:", msg.text)
    return {"status": "Received", "yourMessage": msg.text}

if __name__ == "__main__":
    uvicorn.run("app:app", host="127.0.0.1", port=8000, reload=True)
