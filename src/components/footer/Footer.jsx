import React from "react";
import { FiInstagram, FiFacebook } from "react-icons/fi";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="f_social_icons">
        <a
          href="https://www.facebook.com/eryka30"
          target="_blank"
          rel="noreferrer"
        >
          <FiFacebook />
        </a>{" "}
        <a
          href="https://www.instagram.com/eryka_kreations/"
          target="_blank"
          rel="noreferrer"
        >
          <FiInstagram />
        </a>{" "}
      </div>
      ©2024 Eryka Kreations
    </footer>
  );
};

export default Footer;
