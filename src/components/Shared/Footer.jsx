import React from 'react';
import logo from '../../assets/logo.svg'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content">
            <div className='avatar'>
                <div className="w-28 rounded">
                    <img src={logo} alt="" />
                </div>
                <p><span className='text-3xl text-purple-700 font-semibold'>JS ToyHub Ltd.</span><br />Providing reliable tech since 1992</p>
            </div>
            <div>
                <span className="footer-title">Services</span>
                <a className="link link-hover">Branding</a>
                <a className="link link-hover">Design</a>
                <a className="link link-hover">Marketing</a>
                <a className="link link-hover">Advertisement</a>
            </div>
            <div>
                <span className="footer-title">JS ToyHub</span>
                <a className="link link-hover">About</a>
                <a className="link link-hover">Contact</a>
                <a className="link link-hover">Jobs</a>
                <a className="link link-hover">Press kit</a>
            </div>
            <div>
                <span className="footer-title">Legal</span>
                <a className="link link-hover">Terms of use</a>
                <a className="link link-hover">Privacy policy</a>
                <a className="link link-hover">Cookie policy</a>
            </div>
        </footer>
    );
};

export default Footer;