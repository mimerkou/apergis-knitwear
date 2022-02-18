import React from 'react';
import { Link } from 'react-scroll';
import './Footer.css';

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="back-to-top">
          <Link to="hero" spy={true} smooth={true} offset={-80}>
            <i className="fas fa-chevron-up"></i>
          </Link>
        </div>
        <div className="footer-content">
          <div className="footer-content-about animate-up">
            <h4>
              Apergis Knitwear <br />
              Βιοτεχνια πλεκτων ενδυματων
            </h4>
            <div className="asterisk">
              <i className="fas fa-asterisk"></i>
            </div>
            <p>
              Με περισσότερα από 30 χρόνια εμπειρίας και ενασχόλησης στο χώρο
              των πλεκτών ενδυμάτων, η βιοτεχνία μας διακρίνεται για την
              εξαιρετική ραφή και την ποιότητα των ρούχων της. <br />
              Σας ευχαριστούμε για την εμπιστοσύνη σας!
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
            <p>Copyright &copy; {year} Apergis Knitwear</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
