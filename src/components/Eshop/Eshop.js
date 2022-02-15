import React from 'react';
import './Eshop.css';

const Eshop = () => {
  return (
    <section className="eshop between">
      <div className="container">
        <div className="global-headline">
          <div className="animate-top">
            <h2 className="sub-headline">
              <span className="first-letter">S</span>hopping
            </h2>
          </div>
          <div className="animate-bottom">
            <h1 className="headline">
              Συντομα κοντα σας και
              <br />
              με ηλεκτρονικο καταστημα
            </h1>
            {/* <a href="#" className="eshop-btn">
              Eshop
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eshop;
