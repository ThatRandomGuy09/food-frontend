import { useEffect, useState } from "react";
import "./Food.css";
import FoodCard from "./FoodCard";
import SearchBar from "../SearchBar/SearchBar";
import ProductBar from "../ProductBar/ProductBar";
import Offer from "../Offer/Offer";

export default function Food() {
  const [menuItems, setMenuItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const fetchMenuItems = async () => {
      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_BASE_URL}/api/menu`
        );
        const data = await response.json();
        setMenuItems(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching menu items:", error);
        setLoading(false);
      }
    };

    fetchMenuItems();
  }, []);

  const filteredItems = menuItems.filter((item) => {
    if (searchTerm === "") return true;
    return item.type.toLowerCase().includes(searchTerm.toLowerCase());
  });

  if (loading) {
    return <div className="food-container">Loading...</div>;
  }

  const hasBurgers = filteredItems.some((item) => item.type === "burger");
  const hasFries = filteredItems.some((item) => item.type === "fries");
  const hasDrinks = filteredItems.some((item) => item.type === "drinks");

  return (
    <div className="food-container">
      <SearchBar setSearchTerm={setSearchTerm} />
      <ProductBar />
      <Offer />

      {hasBurgers && (
        <>
          <h1 className="burger-title">Burgers</h1>
          <div className="burger-container">
            {filteredItems
              .filter((item) => item.type === "burger")
              .map((item, index) => (
                <FoodCard
                  id={item.id}
                  key={index}
                  img={item.url}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                />
              ))}
          </div>
        </>
      )}

      {hasFries && (
        <>
          <h1 className="burger-title">Fries</h1>
          <div className="burger-container">
            {filteredItems
              .filter((item) => item.type === "fries")
              .map((item, index) => (
                <FoodCard
                  id={item.id}
                  key={index}
                  img={item.url}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                />
              ))}
          </div>
        </>
      )}

      {hasDrinks && (
        <>
          <h1 className="burger-title">Cold Drinks</h1>
          <div className="burger-container">
            {filteredItems
              .filter((item) => item.type === "drinks")
              .map((item, index) => (
                <FoodCard
                  id={item.id}
                  key={index}
                  img={item.url}
                  title={item.title}
                  description={item.description}
                  price={item.price}
                />
              ))}
          </div>
        </>
      )}
    </div>
  );
}
