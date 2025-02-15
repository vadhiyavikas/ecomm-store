import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { ToastContainer, toast } from "react-toastify";
import ProtectedRoute from "./utils/route/ProtectedRoute";
import PageNotFound from "./pages/404Page";
import DashboardPage from "./pages/Dashboard";
import LoginPage from "./pages/Login";
import ProfilePage from "./pages/Profile";
import CartPage from "./pages/cart";
import Checkout from "./pages/Checkout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <DashboardPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <ProfilePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <CartPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/checkout"
          element={
            <ProtectedRoute>
              <Checkout />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
