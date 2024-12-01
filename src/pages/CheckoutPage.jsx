import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import Footer from '../components/Footer/Footer';
import OrderDetails from '../components/Order-Details-Checkout/OrderDetails';
import Header from '../components/Header/Header';

const CheckoutPage = () => {
  const { cartId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!cartId) {
      setError("No cart ID provided");
      setIsLoading(false);
      return;
    }

    try {
      const decodedBase64 = atob(cartId);
      const decodedString = decodeURIComponent(decodedBase64);
      const decodedItems = JSON.parse(decodedString);
      localStorage.setItem("cartItems", JSON.stringify(decodedItems));
      setIsLoading(false);
    } catch (error) {
      console.error("Failed to decode cart:", error);
      setError("Invalid or expired cart link");
      setIsLoading(false);
    }
  }, [cartId]);

  if (isLoading) {
    return <div>Loading shared cart...</div>;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="checkout-page">
        <Header/>
      <Navbar />
      <OrderDetails isShared={true} />
      <Footer />
    </div>
  );
};

export default CheckoutPage;
