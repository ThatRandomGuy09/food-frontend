import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import PaymentInterface from "../components/Payment/PaymentInterface.jsx/PaymentInterface";
import CheckRes from "../components/categories/Res/CheckRes";

export default function Checkout() {
  return (
    <div>
      <Header />
      <Navbar />
      <PaymentInterface />
      <CheckRes />
      <Footer />
    </div>
  );
}
