import React from 'react';
import MedicalService from '../../media/medical_service.png';

export const Services = () => {
    const medicalServiceTitle1 = "Service Offered";
    const medicalServiceTitle2 = "Service Offered";
    const medicalServiceTitle3 = "Service Offered";
    const medicalServiceTitle4 = "Service Offered";
    const medicalServiceTitle5 = "Service Offered";
    const medicalServiceTitle6 = "Service Offered";
    const medicalServicePrice1 = "50$";
    const medicalServicePrice2 = "50$";
    const medicalServicePrice3 = "50$";
    const medicalServicePrice4 = "50$";
    const medicalServicePrice5 = "50$";
    const medicalServicePrice6 = "50$";

    return (
        <div>
            <div>
                <img src={MedicalService} alt="Image of the service offered" />
                <h4>{medicalServiceTitle1}</h4>
                <p>Cost: {medicalServicePrice1}</p>
            </div>
            <div>
                <img src={MedicalService} alt="Image of the service offered" />
                <h4>{medicalServiceTitle2}</h4>
                <p>Cost: {medicalServicePrice2}</p>
            </div>
            <div>
                <img src={MedicalService} alt="Image of the service offered" />
                <h4>{medicalServiceTitle3}</h4>
                <p>Cost: {medicalServicePrice3}</p>
            </div>
            <div>
                <img src={MedicalService} alt="Image of the service offered" />
                <h4>{medicalServiceTitle4}</h4>
                <p>Cost: {medicalServicePrice4}</p>
            </div>
            <div>
                <img src={MedicalService} alt="Image of the service offered" />
                <h4>{medicalServiceTitle5}</h4>
                <p>Cost: {medicalServicePrice5}</p>
            </div>
            <div>
                <img src={MedicalService} alt="Image of the service offered" />
                <h4>{medicalServiceTitle6}</h4>
                <p>Cost: {medicalServicePrice6}</p>
            </div>
        </div>
    )
}