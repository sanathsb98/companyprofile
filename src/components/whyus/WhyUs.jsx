import React from 'react';
import '../whyus/WhyUs.css';
import advancedtech from '/src/images/advancedtech.svg';
import customsolutions from '/src/images/customsolutions.svg';
import smartchoices from '/src/images/smartchoices.svg';


const WhyUs = () => {
  return (
    <div className='why-us-section'>
        <div className='why-us-sectioncontent'>
        <div className='why-us-heading'>Why Us ?</div>
        <div className='why-us-boxes'>
            <div className='why-us-box'>
                <img src={smartchoices} className='why-us-image'/>
                <div className='why-us-title'>Smart Choices</div>
                <div className='why-us-description'>Utilizing data insights to inform strategic decisions and optimize outcomes.</div>
            </div>
            <div className='why-us-box'>
            <img src={customsolutions} className='why-us-image'/>
                <div className='why-us-title'>Custom Solutions</div>
                <div className='why-us-description'>Crafting customized answers to fit the unique needs of diverse industries.</div>
            </div>
            <div className='why-us-box'>
            <img src={advancedtech} className='why-us-image'/>
                <div className='why-us-title'>Advanced Tech</div>
                <div className='why-us-description'>Embracing continuous innovation and adapting to stay ahead in a dynamic landscape.</div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default WhyUs