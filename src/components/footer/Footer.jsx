import React from 'react';
import './footer.css';

import fbIcon from './../../img/socials/fb.svg';
import inIcon from './../../img/socials/in.svg';
import instIcon from './../../img/socials/inst.svg';
import twIcon from './../../img/socials/tw.svg';

const Footer = () => {
  return (
    <section className="footer">
      <div className="footer-content">
        <div className="footer__block">
          <div className="footer__brand">
            <h1 className="footer__brand-title">YOUR CHOICE</h1>
            <p className="footer__brand-desc">Complete your style with awesome<br/>clothes from us.</p>
          </div>
          <div className="footer__socials">
            <div className="footer__social-icon">
              <img src={fbIcon} alt="Facebook" />
            </div>
            <div className="footer__social-icon">
              <img src={inIcon} alt="LinkedIn" />
            </div>
            <div className="footer__social-icon">
              <img src={instIcon} alt="Instagram" />
            </div>
            <div className="footer__social-icon">
              <img src={twIcon} alt="Twitter" />
            </div>
          </div>
        </div>
        <div className="footer__block footer__block--right">
          <h2 className="footer__block-title">Company</h2>
          <ul className="footer__list">
            <li>About</li>
            <li>Contact us</li>
            <li>Support</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="footer__block footer__block--right">
          <ul className="footer__list">
            <li>Quick Link</li>
            <li>Share Location</li>
            <li>Orders Tracking</li>
            <li>Size Guide</li>
          </ul>
        </div>
        <div className="footer__block footer__block--right">
          <ul className="footer__list">
            <li>Legal</li>
            <li>Terms & conditions</li>
            <li>Privacy Policy</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Footer;
