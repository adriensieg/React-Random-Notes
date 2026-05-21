
```
frontend/
├── public/               # Static files (index.html, favicon)
├── src/
│   ├── assets/           # Images, fonts, global CSS
│   ├── components/       # Reusable UI components
│   │   ├── Button/
│   │   │   ├── Button.jsx
│   │   │   └── Button.module.css
│   │   └── Navbar/
│   │       └── Navbar.jsx
│   ├── pages/            # Full page components (tied to routes)
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   └── Dashboard.jsx
│   ├── hooks/            # Custom reusable hooks
│   │   └── useAuth.js
│   ├── services/         # API call functions
│   │   └── api.js
│   ├── context/          # Global state (React Context)
│   │   └── AuthContext.jsx
│   ├── utils/            # Helper functions
│   │   └── formatDate.js
│   ├── App.jsx           # Root component + routing
│   └── main.jsx          # Entry point
├── package.json
└── vite.config.js
```
