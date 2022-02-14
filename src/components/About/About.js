import React from 'react';
import Button from '../Button/Button';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <Button path="hero" darkBg={false}>
        Οι υπηρεσιες μας
      </Button>
    </section>
  );
};

export default About;
