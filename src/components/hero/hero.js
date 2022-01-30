import React from 'react';
import ClinicLogo from "../../media/clinic_logo.png";
import ClinicBuilding from "../../media/clinic_building.jpg";
import HeroStyle from "./hero.module.scss";
import { HashLink } from 'react-router-hash-link';

export const Hero = () => {
    const clinicName = 'Appletree Medical Centre'

    return (
        <header className={HeroStyle.heroContainer} id="topHash">
            <div className={HeroStyle.clinicInfoContainer}>
                <h1>{clinicName}</h1>
                <p><img src={ClinicLogo} alt="Clinic Logo" />
                Lorem ipsum dolor sit amet, consectetur 
                adipiscing elit. Phasellus molestie nec odio 
                id auctor. Aenean quis rhoncus orci. Fusce 
                rhoncus, nulla nec aliquet bibendum, mi nulla 
                iaculis nibh, ut venenatis dui erat vel nibh. 
                Quisque egestas pulvinar ex sit amet scelerisque. 
                Donec vel massa velit. Donec et urna purus. 
                Vivamus facilisis ultrices dignissim.</p>
                <div className={HeroStyle.buttonContainer}>
                    <button className={HeroStyle.buttonPushable}>
                        <HashLink 
                            className={HeroStyle.buttonFront}
                            to="#topHash">
                            Virtual Care
                        </HashLink>
                        </button>
                    <button className={HeroStyle.buttonPushable}>
                        <HashLink
                            className={HeroStyle.buttonFront}
                            to="#topHash">
                            Patient Portal
                        </HashLink>
                    </button>
                </div>
            </div>
            <div className={HeroStyle.clinicImgContainer}>
                <img className={HeroStyle.imgStyle} src={ClinicBuilding} alt="Image of the clinic's building" />
            </div>
            <div className={HeroStyle.backToTopContainer}>
                <button className={HeroStyle.backToTopButton}>
                    <HashLink
                        className={HeroStyle.linkStyle}
                        to="#topHash">
                        Back to top
                    </HashLink>
                </button>
            </div>
        </header>
    )
}