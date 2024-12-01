export const getBasketItems = () => {
    const items = localStorage.getItem('cartItems');
    return items ? JSON.parse(items) : [];
  };
  
  export const saveBasketItems = (items) => {
    localStorage.setItem('cartItems', JSON.stringify(items));
  };