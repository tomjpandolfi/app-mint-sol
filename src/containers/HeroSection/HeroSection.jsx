import React from 'react';
import BodyText from '../../components/BodyText/BodyText';
import SectionPadding from '../../components/SectionPadding/SectionPadding';
import TitleText from '../../components/TitleText/TitleText';
import './HeroSection.scss';

const HeroSection = props =>{
    return(
        <div className = 'hero-section'>
            <SectionPadding>
                <TitleText>Solana’s most powerful NFTs</TitleText>
                <BodyText>Liquidity mining NFTs</BodyText>
            </SectionPadding>
        </div>
    )
}

export default HeroSection;