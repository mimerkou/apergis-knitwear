import React from 'react';
import Button from '../Button/Button';
import image02 from '../../assets/image02.jpg';
import './About.css';

const About = () => {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="company-info">
          <div className="company-description padding-right animate-left">
            <div className="global-headline">
              <h2 className="sub-headline">
                <span className="first-letter">I</span>nfo
              </h2>
              <h1 className="headline headline-dark">Η εταιρεια μας</h1>
              <div className="asterisk">
                <i className="fas fa-asterisk"></i>
              </div>
            </div>
            <p>
              Καλώς ήλθατε στην ιστοσελίδα της Βιοτεχνίας Πλεκτών Ενδυμάτων του
              Γιώργου και Λευτέρη Απέργη. Η εταιρεία μας εδρεύει στην Νέα Ιωνία
              Αττικής και δραστηριοποιείται στην παραγωγή ενδυμάτων υψηλής
              ποιότητας. Οι δημιουργίες μας είναι κυρίως γυναικεία ενδύματα σε
              διάφορα μοντέρνα σχέδια και χρώματα.
            </p>
            <br />
            <p>
              Η βιοτεχνία μας ιδρύθηκε το 1980 και ως τις μέρες μας διακρίνεται
              για την εξαιρετική ραφή και ποιότητα των ρούχων της. Προσφέρουμε
              χονδρική και λιανική πώληση των πλεκτών μας. Στον χώρο της
              εταιρείας μας λειτουργεί και show room για την επίδειξη των
              ενδυμάτων μας.
            </p>
            <Button path="services" darkBg={false}>
              Οι υπηρεσιες μας
            </Button>
          </div>
          <div className="company-info-img animate-right">
            <img src={image02} alt="Apergis Knitwear Creation" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
