import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import OrderDetails from "../components/Order-Details-Checkout/OrderDetails";
import CheckRes from "../components/categories/Res/CheckRes";

export default function Checkout() {
  return (
    <div>
      <Header />
      <Navbar />
      <OrderDetails />
      <CheckRes />
      <Footer />
    </div>
  );
}
