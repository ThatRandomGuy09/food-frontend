import ExcDeals from "../components/categories/Exclusive/ExcDeals";
import Popular from "../components/categories/Popular/Popular";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Navbar from "../components/Navbar/Navbar";
import Banner from "../components/Banner/Banner";
import Res from "../components/categories/Res/Res";
import KnowMore from "../components/Knowmore/Know";
import GetStarted from "../components/GetStarted/GetStarted";
import Numbers from "../components/Numbers/Numbers";
import Footer from "../components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <ExcDeals />
      <Popular />
      <Res />
      <Banner />
      <GetStarted />
      <KnowMore />
      <Numbers />
      <Footer />
    </div>
  );
}
