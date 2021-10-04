import React from 'react';
import BodyText from '../../components/BodyText/BodyText';
import DefiCompBox from '../../components/DefiCompBox/DefiCompBox';
import SectionPadding from '../../components/SectionPadding/SectionPadding';
import TitleText from '../../components/TitleText/TitleText';
import './DefiSection.scss';
import YieldIcon from '../../assests/images/yieldIcon.png';
import CollateralIcon from '../../assests/images/solanaIcon.png';
import StakingIcon from '../../assests/images/stakingIcon.png';

const DefiSection = props => {
    return (
        <div className="defi-section">
            <SectionPadding>
                <TitleText small>Honey’s DeFi NFTs</TitleText>
                <BodyText>Our NFTs allow you to receive $HONEY, the utility token which powers our DeFi ecosystem</BodyText>
                <div className="boxes-container">
                    <DefiCompBox
                        iconSrc={StakingIcon}
                        iconAlt='Staking icon'
                        text="NFT staking"
                        shadowDirection="right"
                    />
                    <DefiCompBox
                        iconSrc={CollateralIcon}
                        iconAlt='Solana icon'
                        text="NFT collateral"
                    />
                    <DefiCompBox
                        iconSrc={YieldIcon}
                        iconAlt='Yield graph'
                        text="NFT yield"
                        shadowDirection='left'
                    />
                </div>
            </SectionPadding>
        </div>
    )
}

export default DefiSection;