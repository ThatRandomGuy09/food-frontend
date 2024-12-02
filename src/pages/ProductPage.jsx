import { useState } from "react";
import Header from "../components/Header/Header";
import ProdNav from "../components/Navbar/ProdNav";
import Food from "../components/Food/Food";
import Footer from "../components/Footer/Footer";
import MacD from "../components/MacD/MacD";
import MapComponent from "../components/Map/Map";
import DeliveryInfo from "../components/DeliveryInfo/DeliveryInfo";
import CustomerReview from "../components/Customer/CustomerReview";
import CheckRes from "../components/categories/Res/CheckRes";
import MyBasket from "../components/Chart/MyBasket";

export default function Product() {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  const closeCart = () => {
    setIsCartOpen(false);
  };

  return (
    <div>
      <Header onCartClick={toggleCart} />
      <ProdNav />
      <MacD />
      <div className="flex">
        <Food />
        <MyBasket isOpen={isCartOpen} onClose={closeCart} />
      </div>
      <DeliveryInfo />
      <MapComponent />
      <CustomerReview />
      <CheckRes />
      <Footer />
    </div>
  );
}
