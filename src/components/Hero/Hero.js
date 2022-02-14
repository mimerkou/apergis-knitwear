import React from 'react';
import Button from '../Button/Button';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <h2 className="sub-headline">
          <span className="first-letter">W</span>elcome
        </h2>
        <h1 className="headline">Apergis Knitwear</h1>
        <div className="headline-description">
          <div className="seperator">
            <div className="line line-left"></div>
            <div className="asterisk">
              <i className="fas fa-asterisk"></i>
            </div>
            <div className="line line-right"></div>
          </div>
          <div className="single-animation">
            <h5>Βιοτεχνια Πλεκτων Ενδυματων</h5>
            <Button path="about" darkBg={true}>
              Η εταιρεια μας
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
