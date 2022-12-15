import React from 'react';
import './style.scss';

export default function Contact() {
  return (
    <div className="contact-container" id="contact">
      <p className="contact-title">Contact info</p>
      <div className="contact-info">
        <i className="far fa-envelope fa-3x" />
        <p>alejandro.a.lopez.cochachi.23@dartmouth.edu</p>
      </div>
      <div className="contact-info">
        <i className="fas fa-mobile-alt fa-3x" />
        <p>(603) 277 - 8656</p>
      </div>
      <div className="contact-buttons">
        <i className="fab fa-linkedin fa-5x" />
        <i className="fab fa-github fa-5x" />
      </div>
    </div>
  );
}
