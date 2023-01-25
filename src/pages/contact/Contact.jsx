import React, { useState } from "react";
import "./Contact.css";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    phoneNumber: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.name]: e.value }));
  };

  return (
    <main className="contact_container">
      <div className="left_box">
        <div className="contact_details">
          <p>Have any questions? Do not hesitate to contact us. </p>
          <a className="email" href="mailto:erykakreations@gmail.com">
            erykakreations@gmail.com
          </a>
        </div>
      </div>
      <div className="right_box">
        <form
          className="form_container"
          action="https://formsubmit.co/c00add9dd8472c21cb9fa921ab1dcb83" //PROD
          //action="https://formsubmit.co/c00add9dd8472c21cb9fa921ab1dcb83" //Dev
          method="POST"
        >
          {/* For quick reply - Alter value to set Subject line */}
          <input type="hidden" name="_subject" value="Greetings!" />
          {/* Deactivate Captcha */}
          <input type="hidden" name="_captcha" value={false} />
          {/* Automated response */}
          <input
            type="hidden"
            name="_autoresponse"
            value="Thank you for your message!"
          />
          {/* HoneyPot - Avoid spammers */}
          <input type="text" name="_honey" style={{ display: "none" }} />

          <div className="form_wrapper">
            <label className="caption" htmlFor="">
              Name
            </label>
            <span className="required" aria-hidden="true">
              *
            </span>
            <br />
            <input
              className="caption_text"
              type="text"
              name="Name"
              id=""
              required
              onChange={handleChange}
            />
          </div>
          <div className="form_wrapper">
            <label className="caption" htmlFor="">
              Phone Number
            </label>
            <br />
            <input
              className="caption_text"
              type="tel"
              name="Phone&nbsp;Number"
              id=""
              onChange={handleChange}
            />
          </div>
          <div className="form_wrapper">
            <label className="caption" htmlFor="">
              Email
            </label>
            <span className="required" aria-hidden="true">
              *
            </span>
            <br />
            <input
              className="caption_text"
              type="email"
              name="email"
              id=""
              required
              onChange={handleChange}
            />
          </div>
          <div className="form_wrapper">
            <label className="caption" htmlFor="">
              Message
            </label>
            <span className="required" aria-hidden="true">
              *
            </span>
            <br />
            <textarea
              className="caption_text"
              name="body"
              id=""
              cols="30"
              rows="4"
              required
              onChange={handleChange}
            ></textarea>
          </div>
          <input type="submit" className="button" value="Submit"></input>
        </form>
      </div>
    </main>
  );
};

export default Contact;
