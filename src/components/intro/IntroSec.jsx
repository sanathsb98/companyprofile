import React, { useRef } from 'react';
import '../intro/IntroSec.css';
import stars from '/src/images/stars.svg';
import personone from '/src/images/personone.png';
import persontwo from '/src/images/persontwo.png';
import personthree from '/src/images/personthree.png';
import personfour from '/src/images/personfour.png';
import homeline from '/src/images/homeline.png';
import homescribble1 from '/src/images/homescribble1.png';
import homescribble2 from '/src/images/homescribble2.png';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const IntroSec = () => {

    const interactiveDivRef = useRef(null);

    const animation = {
        initial: { y: "30%" },
        enter: i => ({ y: "0", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } })
    }
    const formanimation = {
        initial: { x: "30%" },
        enter: i => ({ x: "0", transition: { duration: 0.75, ease: [0.33, 1, 0.68, 1], delay: 0.075 * i } })
    }

    const { ref, inView, entry } = useInView({
        threshold: 0.75,
        triggerOnce: true
    });

    return (
        <div className='intro-section'>
            <div className='intro-contents'>
                <div ref={ref} className='intro-contents-left'>
                    <motion.div variants={animation} initial="initial" animate={inView ? "enter" : ""} className='intro-updates'>
                        <div className='intro-updates-pill'>Updates</div>
                        <div className='intro-updates-text'>Exciting things are on this way</div>
                        <div className='intro-updates-arrow'><svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" viewBox="0 0 17 17" fill="none">
                            <path d="M4.16333 8.79997H13.4967M13.4967 8.79997L8.83 4.1333M13.4967 8.79997L8.83 13.4667" stroke="#667085" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg></div>
                    </motion.div>
                    <motion.div variants={animation} initial="initial" animate={inView ? "enter" : ""} className='intro-title'>Crafting Digital Experiences that Matters
                        <img className='home-line' src={homeline} />
                    </motion.div>
                    <motion.div variants={animation} initial="initial" animate={inView ? "enter" : ""} className='intro-description'>We're a dynamic team of experts in digital
                        marketing, Ai Marketing, UI/UX design,web design,
                        Custom Software development, and more.</motion.div>
                    <motion.div variants={animation} initial="initial" animate={inView ? "enter" : ""} className='intro-rating'>
                        <div className='rating-images'>
                            <img src={personone} />
                            <img style={{ marginLeft: '-8px' }} src={persontwo} />
                            <img style={{ marginLeft: '-8px' }} src={personthree} />
                            <img style={{ marginLeft: '-8px' }} src={personfour} />
                        </div>
                        <div className='rating-stars'>
                            <img src={stars} />
                        </div>
                    </motion.div>
                </div>
                <div className='intro-contents-right'>
                    <motion.div variants={formanimation} initial="initial" animate={inView ? "enter" : ""} className='contact-form'>
                        <div className='contact-form-title'>Grow your brand now</div>
                        <div className='contact-form-description'>Get a quote today for results-driven strategies
                            that stand out in the digital landscape.</div>
                        <input placeholder='Your name' className='contact-form-name' />
                        <input placeholder='Your email' className='contact-form-email' />
                        <motion.div whileHover={{ scale: 1.04 }} className='contact-form-button'>Get a Free Quote</motion.div>
                        <div className='contact-form-agreement'>By submitting, you agree with our <b><u>Terms of License</u></b></div>
                    </motion.div>
                    <img className='home-scribble-1 home-scribble' src={homescribble1} />
                    <img className='home-scribble-2 home-scribble' src={homescribble2} />
                </div>
            </div>
        </div>
    )
}

export default IntroSec