import React from "react";
import "./DeliveryInfo.css";

const DeliveryInfo = () => {
  return (
    <div className="delivery-container">
      <div className="delivery-sections">
        <div className="delivery-info">
          <div className="delivery-header">
            <img
              src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769667/location_f6aadj.png"
              alt="Delivery Icon"
              width={45}
            />
            <h2 className="delivery-title">Delivery information</h2>
          </div>
          <div className="delivery-details">
            {[
              { day: "Monday", hours: "12:00 AM–3:00 AM, 8:00 AM–3:00 AM" },
              { day: "Tuesday", hours: "8:00 AM–3:00 AM" },
              { day: "Wednesday", hours: "8:00 AM–3:00 AM" },
              { day: "Thursday", hours: "8:00 AM–3:00 AM" },
              { day: "Friday", hours: "8:00 AM–3:00 AM" },
              { day: "Saturday", hours: "8:00 AM–3:00 AM" },
              { day: "Sunday", hours: "8:00 AM–12:00 AM" },
            ].map((item, index) => (
              <div key={index} className="delivery-time">
                <span className="Day"><strong>{item.day}</strong>:</span>
                <span className="Hours">{item.hours}</span>
              </div>
            ))}
            <div className="estimated-time">
              <span className="day">Estimated time until delivery:</span>
              <span className="hours">20 min</span>
            </div>
          </div>
        </div>

        <div className="contact-info">
          <div className="contact-header">
            <img
              src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769638/contactList_uc0vlv.png"
              alt="Contact Icon"
              width={45}
            />
            <h2 className="contact-title">Contact information</h2>
          </div>
          <div className="contact-text">
            If you have allergies or other dietary restrictions, please contact
            the restaurant. The restaurant will provide food-specific
            information upon request.
          </div>
          <div className="contact-details">
            <div>
              <div className="label">Phone number</div>
              <div className="value">+934443-43</div>
            </div>
            <div>
              <div className="label">Website</div>
              <a
                href="http://mcdonalds.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="value link"
              >
                http://mcdonalds.uk/
              </a>
            </div>
          </div>
        </div>

        <div className="operational-times">
          <div className="operation-header">
            <img
              src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769634/clock_hplxu2.png"
              alt="Operational Times Icon"
              width={45}
            />
            <h2 className="operation-title">Operational Times</h2>
          </div>
          <div className="operation-details">
            {[
              { day: "Monday", hours: "8:00 AM–3:00 AM" },
              { day: "Tuesday", hours: "8:00 AM–3:00 AM" },
              { day: "Wednesday", hours: "8:00 AM–3:00 AM" },
              { day: "Thursday", hours: "8:00 AM–3:00 AM" },
              { day: "Friday", hours: "8:00 AM–3:00 AM" },
              { day: "Saturday", hours: "8:00 AM–3:00 AM" },
              { day: "Sunday", hours: "8:00 AM–3:00 AM" },
            ].map((item, index) => (
              <div key={index} className="operation-time">
                <span className="day"><strong>{item.day}</strong>:</span>
                <span className="hours">{item.hours}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeliveryInfo;
