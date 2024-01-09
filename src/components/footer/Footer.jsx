import React from 'react';
import '../footer/Footer.css';

const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-content'>
        <div className='footer-left'>
          <div className='company-name'>Infideck Technologies</div>
          <div className='company-address'>5/1148-7, Technology Business Incubator, Sreekariyam, College of engineering, Trivandum - 695016</div>
          <div className='company-contact'>
            <div className='company-email'>hello@infideck.com | +91 8590313343</div>
          </div>
        </div>
        <div className='footer-right'>About | Work | Services | Plans</div>
      </div>
    </div>
  )
}

export default Footer