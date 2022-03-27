import React from 'react';
import Button from '../Button/Button';
import image02 from '../../assets/image02.jpg';
import 'aos/dist/aos.css';
import './About.css';

const About = () => {
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
              <h1 className="headline headline-dark">Η εταιρεια μας</h1>
              <div className="asterisk">
                <i className="fas fa-asterisk"></i>
              </div>
            </div>
            <p data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
              Καλώς ήλθατε στην ιστοσελίδα της Βιοτεχνίας Πλεκτών Ενδυμάτων της
              οικογένειας Απέργη. Η εταιρεία μας εδρεύει στην Νέα Ιωνία Αττικής
              και δραστηριοποιείται στην παραγωγή πλεκτών ενδυμάτων υψηλής
              ποιότητας. Οι δημιουργίες μας είναι κυρίως γυναικεία ενδύματα σε
              διάφορα μοντέρνα σχέδια και χρώματα.
            </p>
            <br />
            <p data-aos="zoom-in" data-aos-duration="1000" data-aos-once="true">
              Η βιοτεχνία μας ιδρύθηκε το 1982 και ως τις μέρες μας διακρίνεται
              για την εξαιρετική ραφή και ποιότητα των ρούχων της. Προσφέρουμε
              χονδρική και λιανική πώληση των πλεκτών μας. Στον χώρο της
              εταιρείας μας λειτουργεί και show room για την επίδειξη των
              ενδυμάτων μας.
            </p>
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              data-aos-once="true"
            >
              <Button path="services" darkBg={false}>
                Οι υπηρεσιες μας
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
