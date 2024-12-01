import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer id="footer">
      <div id="footerContent">
        <div id="left">
          <div>
            <img
              src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769669/logo_jwpur6.png"
              height={66}
            ></img>
          </div>
          <div id="appLinks">
            <img
              src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1732769611/app-store_gr4dgg.png"
              height={53}
            ></img>
          </div>
          <p className="company-info">
            Company # 490039-445, Registered with <br />
            House of companies.
          </p>
        </div>

        <div id="middle">
          <p className="heading">Get Exclusive Deals in your Inbox</p>
          <div id="subscribeSection">
            <div className="emailPlaceholder">youremail@gmail.com</div>
            <div className="subscribeButton">Subscribe</div>
          </div>
          <p className="policy-note">
            we won’t spam, read our <span id="email-policy">email policy</span>
          </p>
          <div id="socialLinks">
            <img
              src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1733042885/facebook_xg0xru.png"
              width={45}
            ></img>
            <img
              src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1733042885/ig_enf2ji.png"
              width={45}
            ></img>
            <img
              src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1733042885/tik_evbmdw.png"
              width={45}
            ></img>
            <img
              src="https://res.cloudinary.com/ddfqil3l6/image/upload/v1733042885/snap_av4ham.png"
              width={45}
            ></img>
          </div>
        </div>

        <div id="right">
          <div id="legalLinks">
            <h4>Legal Pages</h4>
            <ul>
              <li>
                <a href="#terms">Terms and conditions</a>
              </li>
              <li>
                <a href="#privacy">Privacy</a>
              </li>
              <li>
                <a href="#cookies">Cookies</a>
              </li>
              <li>
                <a href="#modern-slavery">Modern Slavery Statement</a>
              </li>
            </ul>
          </div>
          <div id="importantLinks">
            <h4>Important Links</h4>
            <ul>
              <li>
                <a href="#get-help">Get help</a>
              </li>
              <li>
                <a href="#add-restaurant">Add your restaurant</a>
              </li>
              <li>
                <a href="#sign-up-deliver">Sign up to deliver</a>
              </li>
              <li>
                <a href="#business-account">Create a business account</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div id="footer-par">
        <div id="footerBottom">
          <p>Order.uk Copyright 2024, All Rights Reserved.</p>
          <div id="footerLinks">
            <a href="#privacy-policy">Privacy Policy</a>
            <a href="#terms">Terms</a>
            <a href="#pricing">Pricing</a>
            <a href="#personal-info">
              Do not sell or share my personal information
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
