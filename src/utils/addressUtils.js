const getAddresses = () => {
  const addresses = localStorage.getItem('addresses');
  return addresses ? JSON.parse(addresses) : [
    {
      id: 1,
      name: "Mike Ross",
      address: "45, Green Street, Sector 12, New Delhi, 110001, India",
      phone: "8734637468",
      isDefault: true,
    },
    {
      id: 2,
      name: "Mike Ross",
      address: "Office 704, Tower B, Techno Plaza, Bengaluru, Karnataka, 560100, India",
      phone: "8937447362",
      isDefault: false,
    }
  ];
};

const saveAddress = (addressData) => {
  const addresses = getAddresses();
  
  const formattedAddress = addressData.fullAddress + 
    `, ${addressData.city}, ${addressData.state}, ${addressData.pinCode}, India`;
  
  const newAddress = {
    id: Date.now(),
    name: "Mike Ross",
    address: formattedAddress,
    phone: addressData.phone,
    isDefault: addresses.length === 0 || addressData.isDefault
  };
  
  addresses.push(newAddress);
  localStorage.setItem('addresses', JSON.stringify(addresses));
  return newAddress;
};

const removeAddress = (addressId) => {
  const addresses = getAddresses();
  const updatedAddresses = addresses.filter(addr => addr.id !== addressId);
  
  if (updatedAddresses.length > 0) {
    const hadDefault = addresses.find(addr => addr.id === addressId)?.isDefault;
    if (hadDefault) {
      updatedAddresses[0].isDefault = true;
    }
  }
  
  localStorage.setItem('addresses', JSON.stringify(updatedAddresses));
};

export { getAddresses, saveAddress, removeAddress };