import React from 'react';
import appointment from "../../../assets/images/appointment.png";
import PrimaryButton from '../../../components/PrimaryButton/PrimaryButton';

const ContactUs = () => {
    return (
        <section className='text-center px-4 py-10'
            style={{
                background: `url(${appointment})`
            }}>
            <div>
                <h2 className='text-xl font-bold text-primary'>Contact Us</h2>
                <h3 className='text-4xl text-white'>Stay connected with us</h3>
            </div>
            <div className='my-5 lg:my-10'>
                <input type="email" placeholder="Your Email" className="input input-bordered w-full max-w-xs" /><br />
                <input type="text" placeholder="Subject" className="input my-4 input-bordered w-full max-w-xs" /><br />
                <textarea className="textarea mb-3 w-full max-w-xs textarea-bordered" placeholder="Your Messages"></textarea><br />
                <PrimaryButton>Submit</PrimaryButton>
            </div>
        </section>
    );
};

export default ContactUs;