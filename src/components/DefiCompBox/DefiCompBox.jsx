import React from 'react';
import BodyText from '../BodyText/BodyText';
import ThreeDShadow from '../ThreeDShadow/ThreeDShadow';
import './DefiCompBox.scss';

const DefiCompBox =props=>{
    const {iconSrc, iconAlt, text, shadowDirection} = props;
    return(
        <div className = 'defi-comp-box'>
            <ThreeDShadow shadowDirection = {shadowDirection}/>
            <div className = 'icon-container'>
                <img alt = {iconAlt} src = {iconSrc}/>
            </div>
            <BodyText>{text}</BodyText>
        </div>
    )
}

export default DefiCompBox;