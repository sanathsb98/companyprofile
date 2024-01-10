import React,{useRef} from 'react';
import '../navbar/Navbar.css';
import logo from '/src/images/logo.svg';
import {motion} from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const Navbar = () => {

  const interactiveDivRef = useRef(null);

    const animation = {
        initial : {y : "-60%"},
        enter: i => ({y: "20%", transition: {duration: 1.95, ease: [0.33, 1, 0.68, 1],  delay: 0.075 * i}})
    }
    const { ref, inView, entry } = useInView({
      threshold: 0.75,
      triggerOnce: true
    });

  return (
    <div className='navbar'>
       <motion.div ref={ref} variants={animation} initial="initial" animate={inView ? "enter" : ""} className='navbar-content'>
       <div className='nav-left'>
          <img src={logo} width='100%' height='70%'/>
        </div>
        <div className='nav-middle'>
            <div className='nav-tab'>About</div>
            <div className='nav-tab'>Work</div>
            <div className='nav-tab'>Services</div>
            <div className='nav-tab'>Plans</div>
        </div>
        <div className='nav-right'>
            <motion.div whileHover={{scale : 1.04}} className='nav-button'>Let's talk</motion.div>
            <div className='nav-collapse'><svg width="24px" height="24px" stroke-width="1.5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" color="#000000"><path d="M3 5H11" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 12H16" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path><path d="M3 19H21" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path></svg></div>
        </div>
       </motion.div>
    </div>
  )
}

export default Navbar