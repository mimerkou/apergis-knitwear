import React from 'react';
import { useTranslation } from 'react-i18next';
import './Creations.css';

const Creations = () => {
  const { t } = useTranslation();

  return (
    <section className="creations between">
      <div className="container">
        <div className="global-headline">
          <div className="animate-top">
            <h2 className="sub-headline creations-sub-headline">
              <span className="first-letter">A</span>pergis Knitwear
              {/* <span className="first-letter">K</span>nitwear */}
            </h2>
          </div>
          <div className="animate-bottom">
            <h1 className="headline">{t('creations_text')}</h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Creations;
