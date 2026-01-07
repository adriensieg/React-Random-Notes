# React-Random-Notes

# React JS
- [Concepts to master]()
- [Perfect Layout]()

# Concepts to master

- **Components** – Functional and Class components; building blocks of UI
- **JSX** – Syntax for writing HTML-like code inside JavaScript
- **Props** – Passing data from parent to child components
- **State** – Component-level data that changes over time
- **Event Handling** – Handling user interactions like clicks and inputs
- **Conditional Rendering** – Showing different UI based on conditions
- **Lists & Keys** – Rendering multiple items efficiently
- **Hooks** – useState, useEffect, useRef, useContext, etc.
- **One-Way Data Flow** – Parent → Child data flow
- **Controlled Components** – Form inputs controlled by state
- **Component Lifecycle** – Mounting, updating, unmounting (mostly via hooks now)
- **Composition** – Reusing and nesting components instead of inheritance
- **Context API** – Global state management for passing data deep in the tree
- **Refs** – Accessing DOM elements directly
- **Virtual DOM & Reconciliation** – How React optimizes UI updates

### Hooks

A **hook** is a **small function** in React that **helps a component remember things (state)** or do stuff when things change (effects).
- `useState` - Here’s the basic syntax of useState:

```
const [stateVariable, setStateFunction] = useState(initialValue);
```

<img width="624" height="362" alt="image" src="https://github.com/user-attachments/assets/ab984952-cf5b-4a2e-ae48-3177632532ff" />

https://www.geeksforgeeks.org/reactjs/reactjs-hooks-complete-reference/
- **useState**: useState is used to add state to functional components.
- **useEffect**: useEffect is used to perform side effects (like fetching data or subscribing to services) in functional components.
- **useContext**: useContext allows you to access the value of a context in functional components.
- **useReducer**: useReducer is an alternative to useState for more complex state logic.
**useRef**: useRef returns a mutable ref object which can be used to reference DOM elements or store mutable values.
**useMemo**: useMemo is used to memoize values or computations to prevent expensive calculations on every render.
**useCallback**: useCallback is used to memoize functions so that they are not recreated on every render.
**useLayoutEffect**: Similar to useEffect, but it runs synchronously after all DOM mutations, allowing you to perform operations on the layout.
**useImperativeHandle**: useImperativeHandle customizes the instance value that is exposed when using ref in functional components.


```javascript
import React, { useState } from 'react';
import './App.css'

const App = () => {
    const [num, setNum] = useState(0);
    const handleClick = () => {
        setNum(num + 1);
    };

    return (
        <div className="App">
            <h2> {num}</h2>
            <button onClick={handleClick}>
                Add one
            </button>
        </div>
    );
};

export default App;
```

# My perfect Layout

```
react-app/
├── backend/                          # FastAPI Backend
│   ├── .env.example                  # Environment template
│   ├── app.py                        # Main application
│   ├── config.py                     # Configuration
│   ├── database.py                   # Thread-safe storage
│   ├── logger_config.py              # Logging setup
│   ├── models.py                     # Pydantic models
│   ├── requirements.txt              # Python deps
│   └── routes.py                     # API endpoints
│
├── frontend/                         # React Frontend
│   ├── src/
│   │   ├── components/               # Reusable components
│   │   │   ├── Button.jsx
│   │   │   ├── Header.jsx
│   │   │   ├── Loading.jsx
│   │   │   └── UserCard.jsx
│   │   ├── hooks/                    # Custom hooks
│   │   │   └── useAuth.jsx
│   │   ├── pages/                    # Page components
│   │   │   ├── Dashboard.jsx
│   │   │   ├── Home.jsx
│   │   │   └── Login.jsx
│   │   ├── services/                 # API layer
│   │   │   └── api.js
│   │   ├── styles/                   # Component CSS
│   │   │   ├── Button.css
│   │   │   ├── Dashboard.css
│   │   │   ├── Header.css
│   │   │   ├── Home.css
│   │   │   ├── Loading.css
│   │   │   ├── Login.css
│   │   │   └── UserCard.css
│   │   ├── App.css
│   │   ├── App.jsx
│   │   ├── index.css
│   │   └── index.jsx
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── .gitignore
└── README.md                         # Full documentation
```

# Python and React interaction

### Layout
```
my-app/
├── backend/
│   ├── main.py
│   └── requirements.txt
│
└── frontend/
    ├── index.html
    ├── package.json
    ├── vite.config.js
    └── src/
        ├── main.jsx
        └── App.jsx
```

































