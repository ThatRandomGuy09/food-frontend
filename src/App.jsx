import { Routes, Route, Navigate } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./components/ProtectedRoute";
import SignIn from "./pages/SigninPage";
import SignUp from "./pages/SignupPage";
import Home from "./pages/HomePage";
import Checkout from "./pages/Checkout";
import OrderSuccess from "./pages/OrderSuccessPage";
import Product from "./pages/ProductPage";
import Profile from "./pages/ProfilePage";
import Payement from "./pages/PaymentPage";
import AddressPage from "./pages/AddressPage";
import SharedCheckout from "./pages/CheckoutPage";
function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <Home />
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
        <Route
          path="/product"
          element={
            <ProtectedRoute>
              <Product />
            </ProtectedRoute>
          }
        />
        <Route
          path="/payment"
          element={
            <ProtectedRoute>
              <Payement />
            </ProtectedRoute>
          }
        />
        <Route
          path="/profile"
          element={
            <ProtectedRoute>
              <Profile />
            </ProtectedRoute>
          }
        />
        <Route
          path="/address"
          element={
            <ProtectedRoute>
              <AddressPage />
            </ProtectedRoute>
          }
        />
        <Route path="/checkout/:cartId" element={<SharedCheckout />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </AuthProvider>
  );
}

export default App;
