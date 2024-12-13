import React from "react";
import ReactDOM from "react-dom/client"; // Import the new API
import App from "./components/App.jsx";

console.log("Renderer process is running with React!");

// Use ReactDOM.createRoot instead of ReactDOM.render
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
