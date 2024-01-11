import React from 'react';
import '../contactmodale/ContactModale.css';

const ContactModale = ({closeModale}) => {
  return (
      <div className='contact-modale contact-modale-m'>
          <div style={{position:'relative'}} className='intro-contents-right'>
              <div className='contact-form contact-form-m'>
              <svg onClick={closeModale} className='cancel-icon' width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M6.75827 17.2426L12.0009 12M17.2435 6.75736L12.0009 12M12.0009 12L6.75827 6.75736M12.0009 12L17.2435 17.2426" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg>
                  <div className='contact-form-title'>Grow your brand now</div>
                  <div className='contact-form-description'>Get a quote today for results-driven strategies
                      that stand out in the digital landscape.</div>
                  <input placeholder='Your name' className='contact-form-name' />
                  <input placeholder='Your email' className='contact-form-email' />
                  <textarea style={{height:'70px'}} placeholder='Your message' className='contact-form-email' />
                  <div onClick={closeModale} className='contact-form-button'>Get a Free Quote</div>
                  <div className='contact-form-agreement'>By submitting, you agree with our <b><u>Terms of License</u></b></div>
              </div>
          </div>
      </div>
  )
}

export default ContactModale