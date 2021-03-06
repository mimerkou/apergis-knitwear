import React from 'react';
import { useTranslation } from 'react-i18next';
import './Eshop.css';

const Eshop = () => {
  const { t } = useTranslation();

  return (
    <section className="eshop between">
      <div className="container">
        <div className="global-headline">
          <div className="animate-top">
            <h2 className="sub-headline eshop-sub-headline">
              <span className="first-letter">A</span>pergis Knitwear
            </h2>
          </div>
          <div className="animate-bottom">
            <h1 className="headline">{t('eshop_text')}</h1>
            {/* <a
              href="https://www.nithoknit.gr/"
              className="eshop-btn"
              target="_blank"
              rel="noreferrer"
            >
              Eshop
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Eshop;
