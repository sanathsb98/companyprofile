import React from 'react';
import '../mertics/Metrics.css';

const Metrics = () => {
  return (
    <div className='metrics-section'>
        <div className='metrics-content'>
        <div className='metrics-heading'>METRICS</div>
        <div className='metrics-title'>You can bet on it</div>
        <div className='metrics-statistics'>
            <div className='metrics-box'>
                <div className='metrics-count'>100%</div>
                <div className='metrics-des'>Customer Sastisfaction</div>
            </div>
            <div className='metrics-box metr-margin'>
                <div className='metrics-count'>30+</div>
                <div className='metrics-des'>Successful Campaigns</div>
            </div>
            <div className='metrics-box metrics-final-box'>
                <div className='metrics-count'>3+</div>
                <div className='metrics-des'>Operating countries</div>
            </div>
        </div>
        </div>
    </div>
  )
}

export default Metrics