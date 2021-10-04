import React from 'react';
import ImageWithLoadBg from '../../components/ImageWithLoadBg/ImageWithLoadBg';
import SectionPadding from '../../components/SectionPadding/SectionPadding';
import StepBox from '../../components/StepBox/StepBox';
import './NftStepsSection.scss';
import NftImage from '../../assests/images/nft.png';

const NftStepsSection = props =>{
    return(
        <div className = "nft-steps-section">
            <SectionPadding>
                <div className = 'container'>
                    <div className = "boxes-container">
                        <StepBox
                            number = '01'
                            text = "Mint our Honey NFT"
                        />
                        <StepBox
                            number = '02'
                            text = 'Hold the NFT in your wallet'
                        />
                        <StepBox
                            number = "03"
                            text = "Earn passive rewards"
                        />
                    </div>
                    <div className = "image-container">
                        <div className = "image-inner">
                            <ImageWithLoadBg
                                src = {NftImage}
                                aspectRatio = {1.1}
                                alt = ""
                            />                            
                        </div>
                        <div className = "image-inner">
                            <ImageWithLoadBg
                                src = {NftImage}
                                aspectRatio = {1.1}
                                alt = ""
                            />                            
                        </div>
                        <div className = "image-inner">
                            <ImageWithLoadBg
                                src = {NftImage}
                                aspectRatio = {1.1}
                                alt = ""
                            />                            
                        </div>
                    </div>
                </div>
            </SectionPadding>
        </div>
    )
}

export default NftStepsSection