import React from 'react'
import MailchimpSubscribe from "react-mailchimp-subscribe";
import News from './news';
export default function Mailchimp() {
    const postUrl = `${process.env.REACT_APP_MAILCHIMP_URL}?u=${process.env.REACT_APP_MAILCHIMP_U}&id=${process.env.REACT_APP_MAILCHIMP_ID}`;
    
    return (
        <div >
            <MailchimpSubscribe
                url={postUrl}
                render={({ subscribe, status, message }) => (
                    <News
                        status={status} 
                        message={message}
                        onValidated={formData => subscribe(formData)}
                    />
                )}
            />
        </div>
    );
};

