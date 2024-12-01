import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Navbar from "../components/Navbar/Navbar";
import CheckRes from "../components/categories/Res/CheckRes";
import Address from "../components/Address/AddressList";

export default function AddressPage() {
  return (
    <div>
      <Header />
      <Navbar />
      <Address />
      <CheckRes />
      <Footer />
    </div>
  );
}
