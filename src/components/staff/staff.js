import React from 'react';
import StaffStyle from './staff.module.scss';
import DoctorImg from '../../media/doctor_image.jpg';

export const Staff = () => {
    const doctorName1 = "Doctor 1";
    const doctorName2 = "Doctor 2";
    const doctorName3 = "Doctor 3";
    const doctorName4 = "Doctor 4";
    const doctorName5 = "Doctor 5";

    const doc1Qual1 = "Qualification 1"
    const doc1Qual2 = "Qualification 2"
    const doc1Qual3 = "Qualification 3"
    const doc1Qual4 = "Qualification 4"

    const doc2Qual1 = "Qualification 1"
    const doc2Qual2 = "Qualification 2"
    const doc2Qual3 = "Qualification 3"
    const doc2Qual4 = "Qualification 4"

    const doc3Qual1 = "Qualification 1"
    const doc3Qual2 = "Qualification 2"
    const doc3Qual3 = "Qualification 3"
    const doc3Qual4 = "Qualification 4"

    const doc4Qual1 = "Qualification 1"
    const doc4Qual2 = "Qualification 2"
    const doc4Qual3 = "Qualification 3"
    const doc4Qual4 = "Qualification 4"

    const doc5Qual1 = "Qualification 1"
    const doc5Qual2 = "Qualification 2"
    const doc5Qual3 = "Qualification 3"
    const doc5Qual4 = "Qualification 4"

    return (
        <div className={StaffStyle.meetStaffContainer} id='meetStaffHash'>
            <h1 className={StaffStyle.titleStyle}>Meet Our Staff</h1>
            <div className={StaffStyle.staffContainer}>
                <img className={StaffStyle.imgStyle} src={DoctorImg} alt="Image of Doctor" />
                <div className={StaffStyle.infoContainer}>
                    <h2 className={StaffStyle.tabletPortraitTitle}>{doctorName1}</h2>
                    <p><strong className={StaffStyle.strongStyle}>Qualifications: </strong>{doc1Qual1}, {doc1Qual2}, {doc1Qual3}, {doc1Qual4}</p>
                    <p className={StaffStyle.desktopOnly}><strong className={StaffStyle.strongStyle}>About me: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor leo vel neque ultrices, ornare malesuada lacus congue. Morbi sagittis consectetur auctor. Integer quis tincidunt orci. Nam posuere varius nisl, a convallis mi varius vel. Aenean ullamcorper interdum justo, quis posuere diam gravida ut. Quisque ut odio ut nulla pulvinar volutpat et non enim. Donec nec hendrerit nunc. Phasellus arcu magna, elementum nec egestas sodales, ultricies ut nisl.</p>
                </div>
            </div>
            <div className={StaffStyle.staffContainer}>
                <img className={StaffStyle.imgStyle} src={DoctorImg} alt="Image of Doctor" />
                <div className={StaffStyle.infoContainer}>
                    <h2 className={StaffStyle.tabletPortraitTitle}>{doctorName2}</h2>
                    <p><strong className={StaffStyle.strongStyle}>Qualifications: </strong>{doc2Qual1}, {doc2Qual2}, {doc2Qual3}, {doc2Qual4}</p>
                    <p className={StaffStyle.desktopOnly}><strong className={StaffStyle.strongStyle}>About me: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla vitae fringilla augue, ut facilisis purus. Fusce vulputate dignissim lacus quis eleifend. Nunc facilisis eu risus vitae faucibus. Maecenas hendrerit felis non orci elementum suscipit. Vestibulum non mauris at diam dignissim luctus. Aliquam bibendum, dolor eget lobortis scelerisque, diam est scelerisque tortor, id egestas augue nibh fermentum dolor. Vivamus ullamcorper vel sem a tincidunt.</p>
                </div>            
            </div>
            <div className={StaffStyle.staffContainer}>
                <img className={StaffStyle.imgStyle} src={DoctorImg} alt="Image of Doctor" />
                <div className={StaffStyle.infoContainer}>
                    <h2 className={StaffStyle.tabletPortraitTitle}>{doctorName3}</h2>
                    <p><strong className={StaffStyle.strongStyle}>Qualifications: </strong>{doc3Qual1}, {doc3Qual2}, {doc3Qual3}, {doc3Qual4}</p>
                    <p className={StaffStyle.desktopOnly}><strong className={StaffStyle.strongStyle}>About me: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam interdum pharetra nibh, consequat volutpat lorem viverra vehicula. Nunc vulputate ipsum id lacus gravida, sit amet feugiat nibh pretium. Vivamus maximus fringilla massa vel accumsan. Curabitur eu porta neque. Suspendisse malesuada turpis ac sapien rhoncus, non tristique lorem malesuada. In cursus pellentesque sapien. Etiam nulla purus, accumsan non felis semper, mattis imperdiet nisl.</p>
                </div>
            </div>
            <div className={StaffStyle.staffContainer}>
                <img className={StaffStyle.imgStyle} src={DoctorImg} alt="Image of Doctor" />
                <div className={StaffStyle.infoContainer}>
                    <h2 className={StaffStyle.tabletPortraitTitle}>{doctorName4}</h2>
                    <p><strong className={StaffStyle.strongStyle}>Qualifications: </strong>{doc4Qual1}, {doc4Qual2}, {doc4Qual3}, {doc4Qual4}</p>
                    <p className={StaffStyle.desktopOnly}><strong className={StaffStyle.strongStyle}>About me: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce et dui et lorem vestibulum lobortis. In vel feugiat augue, in molestie tellus. Integer sed diam non mauris aliquam luctus nec vel lacus. Morbi ultrices dictum maximus. Cras eu laoreet nisl. Integer orci nibh, laoreet eu auctor sed, dictum eget nibh. Duis feugiat et odio eu facilisis. Morbi rutrum non libero non malesuada.</p>
                </div>            
            </div>
            <div className={StaffStyle.staffContainer}>
                <img className={StaffStyle.imgStyle} src={DoctorImg} alt="Image of Doctor" />
                <div className={StaffStyle.infoContainer}>
                    <h2 className={StaffStyle.tabletPortraitTitle}>{doctorName5}</h2>
                    <p><strong className={StaffStyle.strongStyle}>Qualifications: </strong>{doc5Qual1}, {doc5Qual2}, {doc5Qual3}, {doc5Qual4}</p>
                    <p className={StaffStyle.desktopOnly}><strong className={StaffStyle.strongStyle}>About me: </strong>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce tempus consequat odio sit amet rutrum. Nunc egestas commodo cursus. Nullam maximus eros quis ipsum lobortis dictum. Donec cursus quam quis facilisis pulvinar. Nunc tristique vitae odio at faucibus. Nullam finibus est et quam bibendum facilisis. Fusce vitae malesuada dui. Aenean metus erat, pulvinar hendrerit finibus eu, ultricies placerat ipsum. Fusce nec turpis malesuada, vulputate dui ornare, mollis neque.</p>
                </div>
            </div>
        </div>
    )
}