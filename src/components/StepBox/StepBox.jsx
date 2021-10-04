import React from 'react';
import BodyText from '../BodyText/BodyText';
import './StepBox.scss';

const StepBox = props =>{
    const {number, text} = props;
    return(
        <div className = 'step-box'>
            <div className = 'number'>
                <BodyText>{number}</BodyText>
            </div>
            <BodyText>{text}</BodyText>
        </div>
    )
}

export default StepBox;