import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router";
import { ToastContainer } from "react-toastify";
import ProtectedRoute from "./utils/route/ProtectedRoute";
import PageNotFound from "./pages/404Page";
import LoginPage from "./pages/Login";
import { lazy, Suspense } from "react";
import Loader from "./components/ui/Loader";

/*lazy components*/
const DashboardPage = lazy(() => import("./pages/Dashboard"));
const ProfilePage = lazy(() => import("./pages/Profile"));
const CartPage = lazy(() => import("./pages/cart"));
const Checkout = lazy(() => import("./pages/Checkout"));
const ElectronicsPage = lazy(() => import("./pages/Electronics"));
const JeweleryPage = lazy(() => import("./pages/Jewelery"));
const MensClothsPage = lazy(() => import("./pages/MensCloths"));
const WomensClothsPage = lazy(() => import("./pages/WomensCloths"));
const OrderSuccess = lazy(() => import("./pages/Order"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loader fullScreen/>}>
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
            path="/category/electronics"
            element={
              <ProtectedRoute>
                <ElectronicsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/category/jewelery"
            element={
              <ProtectedRoute>
                <JeweleryPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/category/mens-cloths"
            element={
              <ProtectedRoute>
                <MensClothsPage />
              </ProtectedRoute>
            }
          />
          <Route
            path="/category/womens-cloths"
            element={
              <ProtectedRoute>
                <WomensClothsPage />
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
          <Route
            path="/order-success"
            element={
              <ProtectedRoute>
                <OrderSuccess />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <ToastContainer />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
