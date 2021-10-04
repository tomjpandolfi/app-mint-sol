import React from 'react';
import './TitleText.scss'

const TitleText = props =>{
    return(
        <h2 small = {props.small ? 'true' : 'false'}>{props.children}</h2>
    )
}

export default TitleText;