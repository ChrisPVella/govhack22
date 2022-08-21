import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Admin from "./layouts/admin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/admin" element={Admin} />
      </Routes>
      <Navigate to="/admin/index" replace />
    </BrowserRouter>
  );
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
