import React from 'react';
import Button from '../Button/Button';
import { useTranslation } from 'react-i18next';
import 'aos/dist/aos.css';
import './Hero.css';

const Hero = () => {
  const { t } = useTranslation();

  return (
    <section className="hero" id="hero">
      <div className="container">
        <h2
          className="sub-headline"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1000"
          data-aos-once="true"
        >
          <span className="first-letter">W</span>elcome
        </h2>
        <h1
          className="headline"
          data-aos="zoom-out"
          data-aos-duration="1000"
          data-aos-once="true"
        >
          Apergis Knitwear
        </h1>
        <div className="headline-description">
          <div
            className="seperator"
            data-aos="zoom-in"
            data-aos-delay="1000"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <div className="line line-left"></div>
            <div className="asterisk">
              <i className="fas fa-asterisk"></i>
            </div>
            <div className="line line-right"></div>
          </div>
          <div
            className="single-animation"
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-delay="2000"
            data-aos-once="true"
          >
            <h5>{t('craft')}</h5>
            <Button path="about" darkBg={true}>
              {t('about_button_text')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
