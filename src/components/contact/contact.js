import React from 'react';
import AnswerPhone from '../../media/receptionist_answering_phone.jpg'

export const Contact = () => {
    return (
        <div>
            <div>
                <h1>Contact Us</h1>
            </div>
            <div>
                <p><h4>Location: </h4>123 Fake Street</p>
                <p><h4>Phone Number: </h4>123-456-7890</p>
                <p><h4>Fax Number: </h4>098-765-4321</p>
                <p>SOCIAL MEDIA LINKS GO HERE</p>
            </div>
            <div>
                <img src={AnswerPhone} alt="A recpetionist answering a phone" />
            </div>
        </div>
    )
}