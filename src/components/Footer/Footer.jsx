import React from "react";
import logo from "../../assets/images/logo1.png";
import text from "../../assets/images/CodeArena.png";
import footerleft from "../../assets/vectors/footerleft.png";
import star from "../../assets/vectors/Vector.png";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

import { FaYoutube } from "react-icons/fa";
import "./Footer.css";
function Footer() {
  return (
    <div className="footer-section">
      <div className="footer">
        <div className="left">
          <img src={logo} alt="logo" />
          <img src={text} alt="codearena" />
        </div>
        <div className="right">
          <div className="right-up">
            <ul className="footer-list">
              <li> Home</li>
              <li>About Us</li>
              <li>Prepare</li>
              <li>Dashboard</li>
            </ul>

            <ul className="footer-list">
              <li>
                <FaFacebook />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <AiFillInstagram />
              </li>
              <li>
                <FaYoutube />
              </li>
            </ul>
          </div>
          <hr />
          <div className="right-up">
            <ul className="footer-list">
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Legal</li>
            </ul>
            <div>
              <p>© 2024 Codegnan Destination. All rights reserved.</p>
            </div>
          </div>
        </div>
      </div>
      ;
      <div className="footerleft">
        <img src={footerleft} alt="star" />
      </div>
      <div className="vectorright">
        <img src={star} alt="star" />
      </div>
    </div>
  );
}

export default Footer;
