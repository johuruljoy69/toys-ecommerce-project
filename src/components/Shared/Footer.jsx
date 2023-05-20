import React from 'react';
import logo from '../../assets/logo.svg'
import {  } from 'react-icons/bi';

const Footer = () => {
    return (
        <footer className="footer p-10 bg-slate-700 text-base-content  mt-12">
            <div className='avatar text-white'>
                {/* <div className="w-28 rounded">
                    <img src={logo} alt="" />
                </div> */}
                <p><span className='text-4xl font-bold'>JS ToyHub Ltd.</span></p>
                <p>A kids toy shop is a store that <br /> specializes in selling toys and <br /> games designed specifically for children.</p>
                <p>Addresss: Jashore Sador, Khulna, Bangladesh</p>
                <p>Email: contact@jstoyhum.com</p>
                <p>Phone: +8801753215648</p>
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
                <span className="footer-title">Follow Us On</span>
                <a className="link link-hover">Facebook</a>
                <a className="link link-hover">Twitter</a>
                <a className="link link-hover">Instagram</a>
                <a className="link link-hover">Youtube</a>
                <a className="link link-hover">Pinterest</a>
            </div>
        </footer>
    );
};

export default Footer;