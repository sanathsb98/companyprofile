import React from 'react';
import '../home/Home.css';
import IntroSec from '../../components/intro/IntroSec';
import DigitalMarketing from '../../components/digitalMarketing/DigitalMarketing';
import InfideckOffers from '../../components/infideckOffers/InfideckOffers';
import WhyUs from '../../components/whyus/WhyUs';
import Metrics from '../../components/mertics/Metrics';


const Home = () => {
  return (
    <div className='home-page'>
      <IntroSec />
      <DigitalMarketing />
      <InfideckOffers />
      <WhyUs />
      <Metrics />
    </div>
  )
}

export default Home