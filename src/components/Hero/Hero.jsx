import "./hero.css";

export default function Hero() {
  return (
    <div className="hero-container">
      <div className="hero-content">
        <p className="hero-subtext">
          Order Restaurant food, takeaway and groceries.
        </p>
        <h1 className="hero-title">
          Feast Your Senses,
          <br />
          <span className="hero-highlight">Fast and Fresh</span>
        </h1>
        <div className="subscribe-section">
          <input
            type="text"
            className="email-placeholder"
            placeholder="Enter a postcode to see what we deliver"
          />
          <button className="subscribe-button">Search</button>
        </div>
      </div>

      <div className="hero-image">
        <img
          src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769697/pizzagirl_ggh2fi.png"
          alt="Pizza Girl"
          className="main-hero-image"
        />
      </div>

      <div className="hero-right-section">
        <div className="steps-container">
          <div className="step step1">
            <img
              src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769717/step1_mkvrye.png"
              alt="Step 1"
              className="step-image"
            />
          </div>
          <div className="step step2">
            <img
              src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769718/step2_bhltvv.png"
              alt="Step 2"
              className="step-image"
            />
            <img
              src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1733042887/girl-eating_ta2w4g.png"
              alt="Noodle Girl"
              className="noodle-girl-image"
            />
          </div>
          <div className="step step3">
            <img
              src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769720/step3_oopgah.png"
              alt="Step 3"
              className="step-image"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
