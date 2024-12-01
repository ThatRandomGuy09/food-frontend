import React from "react";
import "./KnowMore.css";

export default function KnowMore() {
  return (
    <div className="KnowMore__comp-container">
      <div className="KnowMore__comp-header">
        <div className="KnowMore__comp-title">Know more about us</div>
        <div className="KnowMore__comp-links">
          <div className="KnowMore__comp-link">Frequent Questions</div>
          <div>Who we are?</div>
          <div>Partner Program</div>
          <div>Help & Support</div>
        </div>
      </div>
      <div className="KnowMore__comp-content">
        <div className="KnowMore__comp-left">
          <div className="KnowMore__comp-highlight">
            How does Order.UK work?
          </div>
          <div className="KnowMore__comp-questions">
            <div>What payment methods are accepted?</div>
            <div>Can I track my order in real-time?</div>
            <div>Are there any special discounts or promotions available?</div>
            <div>Is Order.UK available in my area?</div>
          </div>
        </div>
        <div className="KnowMore__comp-right">
          <div className="KnowMore__comp-cards">
            <div className="KnowMore__comp-card">
              <p className="Knowmore_card-title">Place an order!</p>
              <img
                src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769686/order-food_m6mpuy.png"
                alt="Order Food"
                className="Knowmore_card-image"
              />
              <p className="card-Knowmore_description">
                Place order through our website or Mobile app
              </p>
            </div>
            <div className="KnowMore__comp-card">
              <p className="Knowmore_card-title">Track Progress!</p>
              <img
                src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769724/track_q3ogt5.png"
                alt="Track Progress"
                className="Knowmore_card-image"
              />
              <p className="Knowmore_card-description">
                Your can track your order status with delivery time
              </p>
            </div>
            <div className="KnowMore__comp-card">
              <p className="Knowmore_card-title">Get your order!</p>
              <img
                src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769678/mobile_rghoky.png"
                alt="Get Order"
                className="Knowmore_card-image"
              />
              <p className="Knowmore_card-description">
                Receive your order at lightning-fast speed!
              </p>
            </div>
          </div>
          <div className="KnowMore__comp-description">
            Order.UK simplifies the food ordering process. Browse through our
            diverse menu, select your favorite dishes, and proceed to checkout.
            Your delicious meal will be on its way to your doorstep in no time!
          </div>
        </div>
      </div>
    </div>
  );
}
