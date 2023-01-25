import React from "react";
import { FiInstagram, FiFacebook } from "react-icons/fi";
import "./Social.css";

const Socials = () => {
  return (
    <div className="social_icons">
      <ul className="social_list">
        <li>
          {" "}
          <a
            href="https://www.facebook.com/eryka30"
            target="_blank"
            rel="noreferrer"
          >
            <FiFacebook />
          </a>{" "}
        </li>
        <li>
          {" "}
          <a
            href="https://www.instagram.com/eryka_kreations/"
            target="_blank"
            rel="noreferrer"
          >
            <FiInstagram />
          </a>{" "}
        </li>
      </ul>
    </div>
  );
};

export default Socials;
