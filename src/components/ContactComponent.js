import React from 'react';
import Summary from './SummaryComponent';
import { CONTACT_TEXT } from '../shared/SummaryData';

const ContactContent = () => {
    return(
        <div className='contact-content'>

        </div>
    );
}

const ContactMe = () => {
    return(
        <>
            <Summary info={CONTACT_TEXT.text} ques={CONTACT_TEXT.ques} url={CONTACT_TEXT.imgUrl} isImageLeft={false} />
            <ContactContent />
        </>
    );
}

export default ContactMe;