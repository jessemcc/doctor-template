import React from 'react';
import ClinicLogo from "../../media/clinic_logo.png";
import ClinicBuilding from "../../media/clinic_building.jpg";
import HeroStyle from "./hero.module.scss";

export const Hero = () => {
    const clinicName = 'Appletree Medical Centre'

    return (
        <header className={HeroStyle.heroContainer}>
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
                    <button>Virtual Care</button>
                    <button>Patient Portal</button>
                </div>
            </div>
            <div className={HeroStyle.clinicImgContainer}>
                <img className={HeroStyle.imgStyle} src={ClinicBuilding} alt="Image of the clinic's building" />
            </div>
            <div className={HeroStyle.backToTopContainer}>
                <button className={HeroStyle.backToTopButton}>Back to top</button>
            </div>
        </header>
    )
}