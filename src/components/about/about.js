import React from 'react';
import AboutStyle from './about.module.scss';
import DoctorImage from '../../media/doctor_image.jpg';
import ClinicImage from '../../media/clinic_building.jpg';

export const About = () => {
    const headDoctorName = "Dr. Placeholder";
    const clinicBuildingName = "Placeholder Clinic";

    return (
        <div className={AboutStyle.mainContainer}>
            <div className={AboutStyle.aboutContainer}>
                <h1>About {headDoctorName}</h1>
                <img 
                    className={AboutStyle.imageStyle} 
                    src={DoctorImage} 
                    alt="Image of the head Doctor" />
                <p className={AboutStyle.pStyle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit. Quisque non suscipit lorem, at laoreet nisl. 
                    Mauris vehicula ex vel tortor sagittis dapibus 
                    pharetra venenatis est. Vivamus ut augue sit amet 
                    erat tincidunt hendrerit quis semper ipsum. Phasellus 
                    varius ante quis rhoncus venenatis. Cras malesuada, 
                    neque vitae imperdiet fermentum, dolor metus luctus 
                    metus, sit amet porttitor eros elit a turpis. Quisque 
                    semper ac nisl eget dignissim. Praesent turpis risus, 
                    rhoncus vel aliquam sed, condimentum at felis.
                </p>
            </div>
            <div className={AboutStyle.aboutContainer}>
                <h1>About {clinicBuildingName}</h1>
                <img 
                    className={AboutStyle.imageStyle} 
                    src={ClinicImage} 
                    alt="Image of the main clinic" />
                <p className={AboutStyle.pStyle}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing 
                    elit. Cras eros purus, molestie ac bibendum ut, 
                    rhoncus id ipsum. Morbi et nulla nulla. Pellentesque 
                    ultrices enim et diam convallis, ut mollis nunc 
                    pulvinar. Mauris euismod dui ac tellus fermentum 
                    sodales. Aenean et venenatis lectus, a porttitor sem. 
                    Vivamus vulputate suscipit nulla in posuere. Interdum 
                    et malesuada fames ac ante ipsum primis in faucibus. 
                    Aliquam ut tempus quam.
                </p>
            </div>
        </div>
    )
}