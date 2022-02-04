import React from 'react';
import PsychiatricConsult from '../../media/psychiatric_consult.jpg';
import EatingDisorderProgram from '../../media/eating_disorders_program.jpg';
import DialecticalBehaviorTherapy from '../../media/dialectical_behavior_therapy.jpg';
import AcutePartialHospitalizationProgram from '../../media/acute_partial_hospitalization_program.jpg';
import ServicesStyle from './services.module.scss';

export const Services = () => {
    const medicalServiceTitle1 = "Psychiatric Consult";
    const medicalServiceTitle2 = "Eating Disorders Program";
    const medicalServiceTitle3 = "Dialectical Behavior Therapy";
    const medicalServiceTitle4 = "Acute Partial Hospitalization Program";
    const medicalServiceTitle5 = "Service Offered";
    const medicalServiceTitle6 = "Service Offered";
    const medicalServicePrice1 = "30$";
    const medicalServicePrice2 = "150$";
    const medicalServicePrice3 = "115$";
    const medicalServicePrice4 = "50$";
    const medicalServicePrice5 = "50$";
    const medicalServicePrice6 = "50$";

    return (
        <div className={ServicesStyle.servicesContainer} id="servicesHash">
            <h1 className={ServicesStyle.titleStyle}>Services</h1>
            <div className={ServicesStyle.servicesGroupContainer}>
                <div className={ServicesStyle.soloServicesContainer}>
                    <img className={ServicesStyle.servicesImage} src={PsychiatricConsult} alt="Image of the service offered" />
                    <h4 className={ServicesStyle.servicesTitle}>{medicalServiceTitle1}</h4>
                </div>
                <div className={ServicesStyle.soloServicesContainer}>
                    <img className={ServicesStyle.servicesImage} src={EatingDisorderProgram} alt="Image of the service offered" />
                    <h4 className={ServicesStyle.servicesTitle}>{medicalServiceTitle2}</h4>
                </div>
                <div className={ServicesStyle.soloServicesContainer}>
                    <img className={ServicesStyle.servicesImage} src={DialecticalBehaviorTherapy} alt="Image of the service offered" />
                    <h4 className={ServicesStyle.servicesTitle}>{medicalServiceTitle3}</h4>
                </div>
                <div className={ServicesStyle.soloServicesContainer}>
                    <img className={ServicesStyle.servicesImage} src={AcutePartialHospitalizationProgram} alt="Image of the service offered" />
                    <h4 className={ServicesStyle.servicesTitle}>{medicalServiceTitle4}</h4>
                </div>
            </div>
        </div>
    )
}