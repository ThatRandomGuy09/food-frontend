import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import OrderPlaced from "../components/order/OrderPlaced";

export default function OrderSuccess() {
  return (
    <div>
      <Header />
      <Navbar />
      <OrderPlaced />
      <Footer />
    </div>
  );
}
