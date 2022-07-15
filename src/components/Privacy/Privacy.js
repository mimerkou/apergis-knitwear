import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import './Privacy.css';

const Privacy = () => {
  const { t } = useTranslation();

  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="privacy-container">
      <Link to="/" className="privacy-logo">
        Apergis Knitwear
      </Link>

      <div className="privacy-title">
        <h3>{t('privacy_title')}</h3>
      </div>

      <div className="privacy-text">
        <h4>{t('privacy_text_h4_01')}</h4>
        <p>{t('privacy_text_p_01')}</p>

        <h4>{t('privacy_text_h4_02')}</h4>
        <p>{t('privacy_text_p_02')}</p>

        <h4>{t('privacy_text_h4_03')}</h4>
        <p>{t('privacy_text_p_03_1')}</p>
        <ul>
          <li>{t('privacy_text_p_03_li_1')}</li>
          <li>{t('privacy_text_p_03_li_2')}</li>
        </ul>
        <p>{t('privacy_text_p_03_2')}</p>

        <h4>{t('privacy_text_h4_04')}</h4>
        <p>{t('privacy_text_p_04')}</p>

        <h4>{t('privacy_text_h4_05')}</h4>
        <p>{t('privacy_text_p_05')}</p>
        <ul>
          <li>{t('privacy_text_p_05_li_1')}</li>
          <li>{t('privacy_text_p_05_li_2')}</li>
          <li>{t('privacy_text_p_05_li_3')}</li>
        </ul>

        <h4>{t('privacy_text_h4_06')}</h4>
        <p>{t('privacy_text_p_06')}</p>

        <h4>{t('privacy_text_h4_07')}</h4>
        <p className="privacy-last">{t('privacy_text_p_07')}</p>

        <Link to="/" className="btn-back-home">
          {t('privacy_btn_back_home')}
        </Link>
      </div>
    </div>
  );
};

export default Privacy;
