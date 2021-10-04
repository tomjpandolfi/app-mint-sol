import React from 'react';
import BodyText from '../../components/BodyText/BodyText';
import TitleText from '../../components/TitleText/TitleText';
import './RoadmapSection.scss';

const roadmap = [
    'Launch  mint and generate NFTs',
    'Raise liquidity for our SOL/HONEY pool',
    'Raise liquidity for our Solana bridge',
    'Build NFT DAO',
    'NFT lending platform on Solana'
]

const RoadmapSection = props =>{
    return(
        <div className = 'roadmap-section'>
            <TitleText small>Roadmap</TitleText>
            <div className = "map-container">
                <div className = 'line'/>
                {
                    roadmap.map(text =>(
                        <div key = {text} className = 'text-container'>
                            <BodyText>{text}</BodyText>
                        </div>
                    ))
                }                
            </div>

        </div>
    )
}

export default RoadmapSection;