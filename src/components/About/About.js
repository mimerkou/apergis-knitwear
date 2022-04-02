import React from 'react';
import Button from '../Button/Button';
import { useTranslation } from 'react-i18next';
import image02 from '../../assets/image02.jpg';
import 'aos/dist/aos.css';
import './About.css';

const About = () => {
  const { t } = useTranslation();

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="company-info">
          <div className="company-description padding-right animate-left">
            <div
              className="global-headline company-headline"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <h2 className="sub-headline">
                <span className="first-letter">A</span>bout
              </h2>
              <h1 className="headline headline-dark">{t('about_headline')}</h1>
              <div className="asterisk">
                <i className="fas fa-asterisk"></i>
              </div>
            </div>
            <p data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
              {t('about_p1')}
            </p>
            <br />
            <p data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
              {t('about_p2')}
            </p>
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <Button path="services" darkBg={false}>
                {t('services_button_text')}
              </Button>
            </div>
          </div>
          <div
            className="company-info-img animate-right"
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
            data-aos-once="true"
          >
            <img src={image02} alt="Apergis Knitwear Creation" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
