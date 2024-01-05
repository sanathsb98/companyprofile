import React from 'react';
import '../home/Home.css';
import IntroSec from '../../components/intro/IntroSec';
import DigitalMarketing from '../../components/digitalMarketing/DigitalMarketing';
import InfideckOffers from '../../components/infideckOffers/infideckOffers';
import WhyUs from '../../components/whyus/WhyUs';


const Home = () => {
  return (
    <div className='home-page'>
      <IntroSec />
      <DigitalMarketing />
      <InfideckOffers />
      <WhyUs/>
    </div>
  )
}

export default Home