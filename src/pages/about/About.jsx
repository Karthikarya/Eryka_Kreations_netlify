import React from "react";
import myphoto from "../../images/myphoto.jpg";
import "./About.css";

const About = () => {
  return (
    <section className="about_container">
      <div className="col-1 details">
        <p>
          I’m a mix of all things co-disciplinary: a entrepreneur, storyteller,
          designer, and photographer who now lives and works in Bengaluru.
          <br />
          <br />
          When i was working as Software Engineer, I was interested in learning
          new thing which led me to Photography. Eventually, I saved up enough
          money to buy my first camera, a Canon EOS and worked on film technique
          photographing landscapes and friends. Portrait photography is my art.
          <br />
          <br />
          We strive to deliver a positive, professional, client focused
          experience for all of our clients. We are creatives focused on
          creating concepts and photographing them. Our business model is
          simple, create beautiful photos and portraits for our clients, at an
          affordable price. 
        </p>
      </div>
      <div className="col-2 details">
        <img className="pic" src={myphoto} alt="" />
      </div>
    </section>
  );
};

export default About;
