import React,{useRef} from 'react';
import '../infideckOffers/InfideckOffers.css';
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const InfideckOffers = () => {

    const interactiveDivRef = useRef(null);

    const animation = {
        initial : {y : "150%"},
        enter: i => ({y: "0", transition: {duration: 1.95, ease: [0.33, 1, 0.68, 1],  delay: 0.075 * i}})
    }
    const boxanimation = {
        initial : {opacity : "0%"},
        enter: i => ({opacity: "100%", transition: {duration: 12.95, ease: [0.33, 1, 0.68, 1],  delay: 0.075 * i}})
    }

    const { ref, inView, entry } = useInView({
        threshold: 0.75,
        triggerOnce: true
      });
      const { ref2, inview, entrys } = useInView({
        threshold: 0.75,
        triggerOnce: true
      });
      const { ref3, inviews, entr } = useInView({
        threshold: 0.75,
        triggerOnce: true
      });
      const { ref4, inviews1, ent1 } = useInView({
        threshold: 0.75,
        triggerOnce: true
      });
    

    return (
        <div className='infideck-offer-page'>
            <div  className='infideck-offer-contents'>
                <motion.div  ref={ref} variants={animation} initial="initial" animate={inView ? "enter" : ""} className='offer-service'>SERVICES</motion.div>
                <motion.div  ref={ref2} variants={animation} initial="initial" animate={inView ? "enter" : ""} className='offer-title'>Boost your online visibility with our extensive range of offerings.</motion.div>
                <motion.div  ref={ref3} variants={animation} initial="initial" animate={inView ? "enter" : ""} className='offer-description'>From innovative digital marketing strategies to cutting-edge web design, seamless software development, and captivating design services</motion.div>

                <div className='offer-types-section'>
                    <motion.div  ref={ref4} variants={boxanimation} initial="initial" animate={inView ? "enter" : ""} className='offer-type-box digimark'>
                        <div className='offer-type-title'>Digital Marketing</div>
                        <div className='offer-type-description'>Elevate your brand with our comprehensive digital marketing strategies. From strategic planning to execution, we boost your online presence across platforms, ensuring your brand stands out in the digital landscape.</div>
                    </motion.div>

                    <motion.div  ref={ref4} variants={boxanimation} initial="initial" animate={inView ? "enter" : ""} className='offer-type-box seosmm'>
                        <div className='offer-type-title'>SEO & SMM</div>
                        <div className='offer-type-description'>Enhance your online visibility with our SEO services and captivate your audience through Social Media Marketing (SMM). From keyword optimization to strategic social campaigns, we maximize engagement and drive results</div>
                    </motion.div>

                    <motion.div ref={ref4} variants={boxanimation} initial="initial" animate={inView ? "enter" : ""} className='offer-type-box branding'>
                        <div className='offer-type-title'>Branding</div>
                        <div className='offer-type-description'>Unleash the power of a strong brand with Infideck. We craft distinctive brand identities that resonate with your audience, leaving a lasting impression and fostering brand loyalty.</div>
                    </motion.div>

                    <motion.div ref={ref4} variants={boxanimation} initial="initial" animate={inView ? "enter" : ""} className='offer-type-box visualprod'>
                        <div className='offer-type-title'>Visual Production</div>
                        <div className='offer-type-description'>Engage your audience through captivating visual content. Our video and visual production services bring your brand to life, telling compelling stories that leave a lasting impact across digital platforms.</div>
                    </motion.div>

                    <motion.div ref={ref4} variants={boxanimation} initial="initial" animate={inView ? "enter" : ""} className='offer-type-box softdev'>
                        <div className='offer-type-title'>Software Development</div>
                        <div className='offer-type-description'>We specializes in creating user-centric websites and applications. Our development services focus on delivering seamless digital experiences, from business websites to e-commerce platforms, ensuring your brand is digitally ahead.</div>
                    </motion.div>

                    <motion.div ref={ref4} variants={boxanimation} initial="initial" animate={inView ? "enter" : ""} className='offer-type-box uiuxdes'>
                        <div className='offer-type-title'>UI/UX Design</div>
                        <div className='offer-type-description'>We specialize in crafting intuitive interfaces, ensuring seamless interactions that captivate users. From wireframes to pixel-perfect designs, we transform concepts into visually appealing and user-friendly digital solutions.</div>
                    </motion.div>
                </div>
            </div>

        </div>
    )
}

export default InfideckOffers