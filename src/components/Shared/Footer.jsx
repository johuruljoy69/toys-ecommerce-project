import React from 'react';
import logo from '../../assets/logo.svg'
import {  MdLocationPin, MdEmail, MdPhone} from 'react-icons/md';
import {  FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPinterest} from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-slate-700 text-base-content  mt-12">
            <div className='avatar text-white'>
                {/* <div className="w-28 rounded">
                    <img src={logo} alt="" />
                </div> */}
                <p><span className='text-4xl font-bold'>JS ToyHub Ltd.</span></p>
                <p>A kids toy shop is a store that <br /> specializes in selling toys and <br /> games designed specifically for children.</p>
                <p className='flex items-center'><MdLocationPin size={'1rem'} /> <span className='ps-2'>Jashore Sador, Khulna, Bangladesh</span></p>
                <p className='flex items-center'><MdEmail size={'1rem'} /> <span className='ps-2'>contact@jstoyhum.com</span></p>
                <p className='flex items-center'><MdPhone size={'1rem'} /> <span className='ps-2'>+8801753215648</span></p>
            </div>
            <div className='text-white'>
                <span className="footer-title">Quick Links</span>
                <a className="link link-hover">Help Center</a>
                <a className="link link-hover">Redeem Voucher</a>
                <a className="link link-hover">Contact Us</a>
                <a className="link link-hover">Policies & Rules</a>
                <a className="link link-hover">Check Offer List</a>
            </div>
            <div className='text-white'>
                <span className="footer-title">Information</span>
                <a className="link link-hover">Product Support</a>
                <a className="link link-hover">Checkout</a>
                <a className="link link-hover">License Policy</a>
                <a className="link link-hover">Affiliate</a>
                <a className="link link-hover">About Us</a>
            </div>
            <div className='text-white'>
                <span className="footer-title"> Follow Us On</span>
                <a className="link link-hover flex items-center"> <FaFacebook size={'1rem'} /> <span className='ps-3'>Facebook</span> </a>
                <a className="link link-hover flex items-center"> <FaTwitter size={'1rem'} /> <span className='ps-3'>Twitter</span> </a>
                <a className="link link-hover flex items-center"> <FaInstagram size={'1rem'} /> <span className='ps-3'>Instagram</span> </a>
                <a className="link link-hover flex items-center"> <FaYoutube size={'1rem'} /> <span className='ps-3'>Youtube</span> </a>
                <a className="link link-hover flex items-center"> <FaPinterest size={'1rem'} /> <span className='ps-3'>Pinterest</span> </a>             

            </div>
        </footer>
    );
};

export default Footer;