import React from 'react';
import '../digitalMarketing/DigitalMarketing.css';
import designimg from '/src/images/designimg.svg';
import evolveimg from '/src/images/evolveimg.svg';
import promoteimg from '/src/images/promoteimg.svg';

const DigitalMarketing = () => {
  return (
    <div className='digital-marketing-space'>
      <div className='digital-marketing-content'>

        <div className='digital-title-description'>
          <div className='digital-title'>Good-bye to traditional Digital Marketing.</div>
          <div className='digital-description'>Join us on a journey beyond boundaries as we transform your vision into a limitless digital reality.</div>
        </div>

        <div className='digital-boxes'>
          <div className='digital-design digibox'>
            <img src={designimg} className='design-circle' />
            <div className='design-title-des'>
              <div className='design-title'>Design</div>
              <div className='design-description'>We are creatives at heart. We go beyond
                conventional design, crafting designs
                that seamlessly merge beauty with
                functionality and business needs.</div>
            </div>
          </div>

          <div className='digital-promote digibox'>
            <img src={promoteimg} className='design-circle' />
            <div className='design-title-des'>
              <div className='design-title'>Promote</div>
              <div className='design-description'>We specialize in propelling your brand to
                the forefront. Through targeted ads and
                savvy social media campaigns, we
                amplify your reach authentically.</div>
            </div>
          </div>

          <div className='digital-evolve digibox'>
            <img src={evolveimg} className='design-circle' />
            <div className='design-title-des'>
              <div className='design-title'>Evolve</div>
              <div className='design-description'>In the digital race, evolution is key.
                Infideck helps your brand stay ahead by
                embracing the latest trends and refining
                strategies based on data.</div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default DigitalMarketing