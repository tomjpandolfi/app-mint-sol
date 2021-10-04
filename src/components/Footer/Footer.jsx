import React from 'react';
import SectionPadding from '../SectionPadding/SectionPadding';
import './Footer.scss'

const Footer = props =>{
    return(
        <SectionPadding>
            <footer>
                Built with ❤️ by <a target = "_blank" rel = "noreferrer" href = "https://raincloud.me">raincloud.me</a>
            </footer>            
        </SectionPadding>
    )
}

export default Footer;