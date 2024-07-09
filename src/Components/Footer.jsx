import React from "react";
import footerLogo from "../assets/Black-Brand.png";
import '../Styles/footer.css'

const Footer = () => {
  return (
    <div className="footer-wrapper">
      <div className="footer-top">
        <div className="footer-items">
          <ul>
            <li>Contact Us</li>
            <li> FashionNest, 50 Olorunfunmi Street <br /> Ikeja, Lagos, Nigeria</li>
            <li>Support@FashionNest.com</li>
            <li>+23423456789010</li>
          </ul>
        </div>
        <div className="footer-support">
          <ul>
            <li>Need Support</li>
            <li>Help Center</li>
            <li>FAQ</li>
            <li>Privacy Polic</li>
            <li>Refund Policy</li>
            <li>Delivery Information</li>
          </ul>
        </div>
        <div className="footer-addres">
          <ul>
            <li>Information</li>
            <li>About Us</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>sitemap</li>
          </ul>
        </div>
        <div className="footer-addres">
          <ul>
            <li>About Us</li>
            <li>Delivery Information</li>
            <li>Search</li>
            <li>Policy for Buyers</li>
            <li>FAQ</li>
          </ul>
        </div>
      </div>

      <div className="footer-logo">
        <img src={footerLogo} alt="logo" />
      </div>

      <div className="footer-down">
        <div className="credits">
        <p>&copy; 2024 FashionNet All rights reserved</p>
        <p>Designed by: James Nelson - @Unelsoft </p>
        <span>Designed by: James Nelson - @Unelsoft </span>
        <p> Developed by: Baszeddy- IamAbasz - Abasi-ikponke Asuquo</p>
        </div>

        <div className="socials">
        <div className="socials-text">
        <h6>Follwo us on</h6>
        <div className="socials-icons">
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />
        <img src="" alt="" />

        </div>
        </div>
        </div>

      </div>
    </div>
  );
};

export default Footer;
