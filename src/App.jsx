import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import ProtectedRoute from "./utils/route/ProtectedRoute";
import DashboardPage from "./pages/Dashboard";
import LoginPage from "./pages/Login";
import ProfilePage from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            // <ProtectedRoute>
            <DashboardPage />
            // </ProtectedRoute>
          }
        />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
