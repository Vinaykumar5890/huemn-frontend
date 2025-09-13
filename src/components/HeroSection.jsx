import React from "react";
import "../styles/animated.scss";

const HeroSection = () => {
  return (
    <section className="hero container">
      <h1 className="hero-title">
        A Modern Browser Experience <span>Reimagined</span>
      </h1>
      <p className="hero-subtitle">
        Scroll down to explore Chrome-inspired animations built with React,
        SCSS, and GSAP.
      </p>
    </section>
  );
};

export default HeroSection;
