import React, { useState } from "react";
import "./CustomerReview.css";

const ReviewCard = () => {
  return (
    <div className="review-card">
      <div className="review-card-header">
        <img
          src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769705/reviewer_ttwfz4.png"
          width={66}
          height={66}
          className="reviewer-image"
          alt="Reviewer"
        />
        <div className="reviewer-info">
          <h2 className="reviewer-name">St Glx</h2>
          <p className="reviewer-location">South London</p>
        </div>
        <div className="review-details">
          <div className="review-rating">★★★★★</div>
          <div className="review-date">
            <img
              src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769685/orclock_bwq5kh.png"
              width={23}
              alt="Clock"
            />
            <div>24th September, 2023</div>
          </div>
        </div>
      </div>
      <p className="review-text">
        The positive aspect was undoubtedly the efficiency of the service. The
        queue moved quickly, the staff was friendly, and the food was up to the
        usual McDonald’s standard – hot and satisfying.
      </p>
    </div>
  );
};

export default function CustomerReview() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const reviews = Array(9).fill(<ReviewCard />);
  const maxIndex = reviews.length - 3;

  const handleNext = () => {
    if (currentIndex < maxIndex) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  return (
    <div className="customer-review-container">
      <div className="customer-review-content">
        <div className="customer-review-header">
          <h1>Customer Reviews</h1>
          <div className="review-controls">
            <button
              onClick={handlePrev}
              disabled={currentIndex === 0}
              className="control-button"
            >
              <img
                src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769616/backR_n0ohgo.png"
                alt="Previous"
              />
            </button>
            <button
              onClick={handleNext}
              disabled={currentIndex === maxIndex}
              className="control-button"
            >
              <img
                src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769654/forwardR_bpa7hx.png"
                alt="Next"
              />
            </button>
          </div>
        </div>
        <div className="review-slider">
          <div
            className="review-track"
            style={{
              transform: `translateX(-${currentIndex * 33.3333}%)`,
            }}
          >
            {reviews.map((review, index) => (
              <div key={index} className="review-slide">
                {review}
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="review3_4">
        <img
          src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769704/review_ndgtbi.png"
          width={157}
        ></img>
      </div>
    </div>
  );
}
