import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderDetails from '../Order-Details-Checkout/OrderDetails';

const SharedCheckout = () => {
  const { cartId } = useParams();
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    try {
      const decodedItems = JSON.parse(atob(cartId));
      localStorage.setItem('basketItems', JSON.stringify(decodedItems));
      setIsLoading(false);
    } catch (error) {
      console.error('Failed to decode cart:', error);
    }
  }, [cartId]);

  if (isLoading) {
    return <div>Loading shared cart...</div>;
  }

  return <OrderDetails isShared={true} />;
};

export default SharedCheckout; 