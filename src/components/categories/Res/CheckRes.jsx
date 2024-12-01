import { Link } from "react-router-dom";
import "./Res.css";
import ResCard from "./ResCard.jsx";
const cards = [
  {
    src: "https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769676/McDonald_p285zs.png",
    type: "McDonald’s London ",
  },
  {
    src: "https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769688/PapaJohns_i6vgua.png",
    type: "Papa Johns",
  },
  {
    src: "https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769666/KFC_g5gwwi.png",
    type: "KFC West London",
  },
  {
    src: "https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769722/TexasChicken_mr2brb.png",
    type: "Texas Chicken",
  },
  {
    src: "https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769619/BK_utzuss.png",
    type: "Burger King",
  },
  {
    src: "https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769712/Shaurama_fvfo5b.png",
    type: "Shaurma 1",
  },
];

export default function Res() {
  return (
    <div className="popular-container">
      <p className="popular-title">Similar Restaurants</p>
      <Link to="/product">
        <div className="popular-cards">
          {cards.map((items, index) => (
            <ResCard src={items.src} type={items.type} key={index} />
          ))}
        </div>
      </Link>
    </div>
  );
}
