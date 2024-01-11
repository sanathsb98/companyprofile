import React, { useState } from 'react';
import '../mertics/Metrics.css';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';

const Metrics = () => {

    const [counterOn, setCounterOn] = useState(false)

    return (
        <div className='metrics-section'>
            <div className='metrics-content'>
                <div className='metrics-heading'>METRICS</div>
                <div className='metrics-title'>You can bet on it</div>

                <div className='metrics-statistics'>
                    <div className='metrics-box'>
                        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => { setCounterOn(false) }}>
                            <div className='metrics-count'>{counterOn && <CountUp start={0} end={100} />}%</div>
                        </ScrollTrigger>
                        <div className='metrics-des'>Customer Sastisfaction</div>
                    </div>
                    <div className='metrics-box metr-margin'>
                        <div className='metrics-count'>{counterOn && <CountUp start={0} end={30} />}+</div>
                        <div className='metrics-des'>Successful Campaigns</div>
                    </div>
                    <div className='metrics-box metrics-final-box'>
                        <div className='metrics-count'>{counterOn && <CountUp start={0} end={3} />}+</div>
                        <div className='metrics-des'>Operating countries</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Metrics