import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Auth from "./features/auth/pages/auth";
import Dashboard from "./features/dashboard/pages/Dashboard";

function App() {
  return (
    <div className="w-full h-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Auth />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App
