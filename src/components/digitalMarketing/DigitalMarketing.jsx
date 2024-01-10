import React,{useRef} from 'react';
import '../digitalMarketing/DigitalMarketing.css';
import designimg from '/src/images/designimg.svg';
import evolveimg from '/src/images/evolveimg.svg';
import promoteimg from '/src/images/promoteimg.svg';
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const DigitalMarketing = () => {

  const interactiveDivRef = useRef(null);

  const animation = {
    initial: { y: "150%" },
    enter: i => ({ y: "0", transition: { duration: 1.95, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } })
  }
  const boxanimation1 = {
    initial: { y: "150%" },
    enter: i => ({ y: "0", transition: { duration: 1.95, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } })
  }
  const boxanimation2 = {
    initial: { y: "150%" },
    enter: i => ({ y: "0", transition: { duration: 1.95, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } })
  }
  const boxanimation3 = {
    initial: { y: "150%" },
    enter: i => ({ y: "0", transition: { duration: 1.95, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } })
  }

  const { ref, inView, entry } = useInView({
    threshold: 0.0015,
    triggerOnce: true
  });

  return (
    <div className='digital-marketing-space'>
      <div  className='digital-marketing-content'>

        <motion.div ref={ref}  variants={animation} initial="initial" animate={inView ? "enter" : ""} className='digital-title-description'>
          <div className='digital-title'>Good-bye to traditional Digital Marketing.</div>
          <div className='digital-description'>Join us on a journey beyond boundaries as we transform your vision into a limitless digital reality.</div>
        </motion.div>

        <div className='digital-boxes'>
          <motion.div whileHover={{scale : 1.04}}  variants={boxanimation1} initial="initial" animate={inView ? "enter" : ""} className='digital-design digibox'>
            <img src={designimg} className='design-circle' />
            <div className='design-title-des'>
              <div className='design-title'>Design</div>
              <div className='design-description'>We are creatives at heart. We go beyond
                conventional design, crafting designs
                that seamlessly merge beauty with
                functionality and business needs.</div>
            </div>
          </motion.div>

          <motion.div  whileHover={{scale : 1.04}} variants={boxanimation2} initial="initial" animate={inView ? "enter" : ""} className='digital-promote digibox'>
            <img src={promoteimg} className='design-circle' />
            <div className='design-title-des'>
              <div className='design-title'>Promote</div>
              <div className='design-description'>We specialize in propelling your brand to
                the forefront. Through targeted ads and
                savvy social media campaigns, we
                amplify your reach authentically.</div>
            </div>
          </motion.div>

          <motion.div  whileHover={{scale : 1.04}} variants={boxanimation3} initial="initial" animate={inView ? "enter" : ""}  className='digital-evolve digibox'>
            <img src={evolveimg} className='design-circle' />
            <div className='design-title-des'>
              <div className='design-title'>Evolve</div>
              <div className='design-description'>In the digital race, evolution is key.
                Infideck helps your brand stay ahead by
                embracing the latest trends and refining
                strategies based on data.</div>
            </div>
          </motion.div>
        </div>

      </div>
    </div>
  )
}

export default DigitalMarketing