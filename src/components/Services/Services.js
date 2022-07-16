import React from 'react';
import Button from '../Button/Button';
import { useTranslation } from 'react-i18next';
import 'aos/dist/aos.css';
import image05 from '../../assets/image05.jpg';
import image06 from '../../assets/image06.jpg';
import image07 from '../../assets/image07.jpg';
import image08 from '../../assets/image08.jpg';
import './Services.css';

const Services = () => {
  const { t } = useTranslation();

  return (
    <section className="services" id="services">
      <div className="container">
        <div className="company-info">
          <div className="image-group padding-right animate-left">
            <img
              src={image05}
              alt="Knitwear 05"
              data-aos="zoom-in"
              data-aos-duration="300"
              data-aos-once="true"
            />
            <img
              src={image06}
              alt="Knitwear 06"
              data-aos="zoom-in"
              data-aos-duration="300"
              data-aos-delay="300"
              data-aos-once="true"
            />
            <img
              src={image07}
              alt="Knitwear 07"
              data-aos="zoom-in"
              data-aos-duration="300"
              data-aos-delay="600"
              data-aos-once="true"
            />
            <img
              src={image08}
              alt="Knitwear 08"
              data-aos="zoom-in"
              data-aos-duration="300"
              data-aos-delay="900"
              data-aos-once="true"
            />
          </div>
          <div className="company-description animate-right">
            <div
              className="global-headline services-headline"
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="250"
              data-aos-once="true"
            >
              <h2 className="sub-headline">
                <span className="first-letter">S</span>ervices
              </h2>
              <h1 className="headline headline-dark">
                {t('services_headline')}
              </h1>
              <div className="asterisk">
                <i className="fas fa-asterisk"></i>
              </div>
            </div>
            <div
              data-aos="zoom-in"
              data-aos-duration="1000"
              data-aos-delay="500"
              data-aos-once="true"
            >
              <p>{t('services_p1')}</p>
              <br />
              <p>{t('services_p2')}</p>
              <div
              // data-aos="zoom-in-up"
              // data-aos-duration="1000"
              // data-aos-delay="750"
              // data-aos-once="true"
              >
                <Button path="contact" darkBg={false}>
                  {t('contact_button_text')}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
