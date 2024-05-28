import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./index.css";
import { ProjectsPage } from "./pages/ProjectsPage.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/projects" element={<ProjectsPage />} />
      </Routes>
    </Router>
  </React.StrictMode>
);
