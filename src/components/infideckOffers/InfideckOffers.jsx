import React from 'react';
import '../infideckOffers/InfideckOffers.css';

const InfideckOffers = () => {
    return (
        <div className='infideck-offer-page'>
            <div className='infideck-offer-contents'>
                <div className='offer-service'>SERVICES</div>
                <div className='offer-title'>Boost your online visibility with our extensive range of offerings.</div>
                <div className='offer-description'>From innovative digital marketing strategies to cutting-edge web design, seamless software development, and captivating design services</div>

                <div className='offer-types-section'>
                    <div className='offer-type-box digimark'>
                        <div className='offer-type-title'>Digital Marketing</div>
                        <div className='offer-type-description'>Elevate your brand with our comprehensive digital marketing strategies. From strategic planning to execution, we boost your online presence across platforms, ensuring your brand stands out in the digital landscape.</div>
                    </div>

                    <div className='offer-type-box seosmm'>
                        <div className='offer-type-title'>SEO & SMM</div>
                        <div className='offer-type-description'>Enhance your online visibility with our SEO services and captivate your audience through Social Media Marketing (SMM). From keyword optimization to strategic social campaigns, we maximize engagement and drive results</div>
                    </div>

                    <div className='offer-type-box branding'>
                        <div className='offer-type-title'>Branding</div>
                        <div className='offer-type-description'>Unleash the power of a strong brand with Infideck. We craft distinctive brand identities that resonate with your audience, leaving a lasting impression and fostering brand loyalty.</div>
                    </div>

                    <div className='offer-type-box visualprod'>
                        <div className='offer-type-title'>Visual Production</div>
                        <div className='offer-type-description'>Engage your audience through captivating visual content. Our video and visual production services bring your brand to life, telling compelling stories that leave a lasting impact across digital platforms.</div>
                    </div>

                    <div className='offer-type-box softdev'>
                        <div className='offer-type-title'>Software Development</div>
                        <div className='offer-type-description'>We specializes in creating user-centric websites and applications. Our development services focus on delivering seamless digital experiences, from business websites to e-commerce platforms, ensuring your brand is digitally ahead.</div>
                    </div>

                    <div className='offer-type-box uiuxdes'>
                        <div className='offer-type-title'>UI/UX Design</div>
                        <div className='offer-type-description'>We specialize in crafting intuitive interfaces, ensuring seamless interactions that captivate users. From wireframes to pixel-perfect designs, we transform concepts into visually appealing and user-friendly digital solutions.</div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default InfideckOffers