const getPaymentMethods = () => {
  const payments = localStorage.getItem('payments');
  return payments ? JSON.parse(payments) : [
    {
      id: 1,
      cardNumber: "xxxx xxxx xxxx 1234",
      name: "Mike Ross",
      expiry: "11/26",
      cvc: "XXX",
      isDefault: true
    },
    {
      id: 2,
      cardNumber: "xxxx xxxx xxxx 3468",
      name: "Mike Ross",
      expiry: "05/25",
      cvc: "XXX",
      isDefault: false
    }
  ];
};

const savePaymentMethod = (paymentData) => {
  const payments = getPaymentMethods();
  
  const newPayment = {
    id: Date.now(),
    cardNumber: paymentData.cardNumber,
    name: paymentData.name,
    expiry: paymentData.expiry,
    cvc: paymentData.cvc,
    isDefault: payments.length === 0 || paymentData.isDefault
  };
  
  payments.push(newPayment);
  localStorage.setItem('payments', JSON.stringify(payments));
  return newPayment;
};

const removePaymentMethod = (paymentId) => {
  const payments = getPaymentMethods();
  const updatedPayments = payments.filter(payment => payment.id !== paymentId);
  
  if (updatedPayments.length > 0) {
    const hadDefault = payments.find(payment => payment.id === paymentId)?.isDefault;
    if (hadDefault) {
      updatedPayments[0].isDefault = true;
    }
  }
  
  localStorage.setItem('payments', JSON.stringify(updatedPayments));
};

export { getPaymentMethods, savePaymentMethod, removePaymentMethod }; 