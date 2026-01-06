

This application demonstrates a modern full-stack architecture where a **React frontend interacts** with a **FastAPI backend** via **HTTP**. 
- The backend (`app.py`) exposes `REST` endpoints (`/data` `GET`, `/send` `POST`) and handles **CORS**.
- The frontend organizes logic into
  - **`services/api.js`** (API layer),
  - **`hooks/usePythonMessage.jsx`** (custom hook for fetching backend data), and
  - **`App.jsx`** (root UI component)
  - **`index.jsx`** is the entry point that bootstraps React and mounts <App /> to `index.html`. Responsible only for initialization
  - **Bootstrap** is used for quick styling.
```
simple-react-python-app/
├── backend/                          # FastAPI backend
│   ├── app.py                        # Main backend app
│   └── requirements.txt              # Python dependencies
│
├── frontend/                         # React frontend
│   ├── index.html                     # HTML entry
│   ├── package.json                   # npm deps and scripts
│   └── src/
│       ├── index.jsx                  # React entry point
│       ├── App.jsx                    # Root component
│       ├── services/                  # API layer
│       │   └── api.js
│       └── hooks/                     # Custom hooks
│           └── usePythonMessage.jsx
│
└── README.md                          # Project overview

```
