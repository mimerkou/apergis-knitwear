import React from 'react';
import { Link as LinkScroll } from 'react-scroll';
import { Link as LinkRouter } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  const { t } = useTranslation();

  return (
    <footer>
      <div className="container">
        <div className="back-to-top">
          <LinkScroll to="hero" spy={true} smooth={true} offset={-80}>
            <i className="fas fa-chevron-up"></i>
          </LinkScroll>
        </div>
        <div className="footer-content">
          <div className="footer-content-about animate-up">
            <h4>
              Apergis Knitwear <br />
              {t('craft')}
            </h4>
            <div className="asterisk">
              <i className="fas fa-asterisk"></i>
            </div>
            <p>
              {t('footer_text')} <br />
              {t('footer_trust')}
            </p>
          </div>
          <div className="social animate-bottom">
            <div className="social-media">
              <h4>Follow us</h4>
              <ul className="social-icons">
                <li>
                  <a
                    href="https://www.facebook.com/nitho.knitwear"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-facebook-f"></i>
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.instagram.com/nitho.knitwear/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="copyright">
            <p>
              &copy; {year} Apergis Knitwear |{' '}
              <LinkRouter to="/privacy-policy" className="privacy">
                {t('privacy_policy_link_text')}
              </LinkRouter>
            </p>
            <p>
              Created by{' '}
              <a className="creator" href="mailto:mimerkou@gmail.com">
                Michalis Merkouris
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
