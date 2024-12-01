import React from "react";
import "./MacD.css";

export default function MacD() {
  return (
    <div className="MacD-container">
      <div className="MacD-card">
        <img
          src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769672/MacD_ynw5hl.png"
          alt="Restaurant"
          className="MacD-image"
        />
        <div className="MacD-overlay"></div>

        <div className="MacD-content">
          <div className="MacD-text">
            <div className="MacD-tagline">I&apos;m lovin&apos; it!</div>
            <div className="MacD-title">McDonald&apos;s East London</div>
            <div className="MacD-details">
              <div className="MacD-detail">
                <img
                  src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769630/checklist_qqpnfg.png"
                  height={34}
                  width={34}
                  alt="Checklist"
                />
                <p>Minimum Order: 12 GBP</p>
              </div>
              <div className="MacD-detail">
                <img
                  src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769680/motocross_tbbbuj.png"
                  height={34}
                  width={34}
                  alt="Motocross"
                />
                <p>Delivery in 20-25 Minutes</p>
              </div>
            </div>
          </div>
          <img
            src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769704/review_ndgtbi.png "
            className="MacD-review"
          ></img>
          <img
            src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769673/MacD2_epoqyz.png"
            className="MacD-side-image"
          ></img>
        </div>
      </div>
      <div className="MacD-footer">
        <img
          src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769634/clock_hplxu2.png"
          width={29}
          alt="Clock"
        ></img>
        <div>Open until 3:00 AM</div>
      </div>
    </div>
  );
}
