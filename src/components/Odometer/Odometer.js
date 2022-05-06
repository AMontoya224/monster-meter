import React from 'react';
import './Odometer.css';
import odometer from './../../images/odometer.jpg'
import aguja from './../../images/aguja.png'


function Odometer( props ){
    const {valueOdometer} = props;

    return (
        <div className='odometer'>
            <img src={odometer} className='odometer-base' alt='odometer-base'/>
            <img src={aguja} className='odometer-aguja' style={{transform: `rotate(${valueOdometer*1.8+35}deg)`}} alt='odometer-aguja'/>
            <h4 className={(valueOdometer>=0 && valueOdometer<=20) ? 'h4-green' : (valueOdometer>=80 && valueOdometer<=100) ? 'h4-red' : ''}>{valueOdometer}%</h4>
        </div>
    )
};

export default Odometer;