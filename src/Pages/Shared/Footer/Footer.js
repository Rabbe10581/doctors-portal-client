import React from 'react';
import { Link } from 'react-router-dom';
import footerImg from '../../../assets/images/footer.png'

const Footer = () => {
    return (
        <footer className="p-10"
            style={{
                background: `url(${footerImg})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                // backgroundAttachment: 'fixed'
            }}>
            <div className='footer'>
                <div>
                    <span className="footer-title">Services</span>
                    <Link to="/" className="link link-hover">Emergency Checkup</Link>
                    <Link to="/" className="link link-hover">Monthly Checkup</Link>
                    <Link to="/" className="link link-hover">Weekly Checkup</Link>
                    <Link to="/" className="link link-hover">Deep Checkup     </Link>
                </div>
                <div>
                    <span className="footer-title">ORAL HEALTH</span>
                    <Link to="/" className="link link-hover">Fluoride Treatment</Link>
                    <Link to="/" className="link link-hover">Cavity Filling</Link>
                    <Link to="/" className="link link-hover">Teath Whitening</Link>
                </div>
                <div>
                    <span className="footer-title">OUR ADDRESS</span>
                    {/* <Link to="/" className="link link-hover">Terms of use</Link>
                    <Link to="/" className="link link-hover">Privacy policy</Link> */}
                    <Link to="/" className="link link-hover">Dhaka - Bangladesh</Link>
                </div>
            </div>
            <div className='text-center mt-32'>
                <p>Copyright © 2022 - All right reserved by ACME Industries Ltd</p>
            </div>
        </footer >
    );
};

export default Footer;