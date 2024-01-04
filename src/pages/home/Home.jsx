import React from 'react';
import '../home/Home.css';
import IntroSec from '../../components/intro/IntroSec';
import DigitalMarketing from '../../components/digitalMarketing/DigitalMarketing';

const Home = () => {
  return (
    <div className='home-page'>
        <IntroSec/>
        <DigitalMarketing/>
    </div>
  )
}

export default Home