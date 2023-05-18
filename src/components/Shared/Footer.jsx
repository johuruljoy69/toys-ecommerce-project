import React from 'react';
import logo from '../../assets/logo.svg'

const Footer = () => {
    return (
        <footer className="footer p-10 bg-base-200 text-base-content mt-12">
            <div className='avatar'>
                {/* <div className="w-28 rounded">
                    <img src={logo} alt="" />
                </div> */}
                <p><span className='text-4xl text-purple-700 font-bold'>JS ToyHub Ltd.</span></p>
                <p>A kids toy shop is a store that <br /> specializes in selling toys and <br /> games designed specifically for children.</p>
                <p>Addresss: 1800 Abbot Kinney Nebraska UK</p>
                <p>Email: hello@example.com</p>
                <p>Phone: (012) 345 6789</p>
            </div>
            <div>
                <span className="footer-title">Quick Links</span>
                <a className="link link-hover">Help Center</a>
                <a className="link link-hover">Redeem Voucher</a>
                <a className="link link-hover">Contact Us</a>
                <a className="link link-hover">Policies & Rules</a>
                <a className="link link-hover">Check Offer List</a>
            </div>
            <div>
                <span className="footer-title">Information</span>
                <a className="link link-hover">Product Support</a>
                <a className="link link-hover">Checkout</a>
                <a className="link link-hover">License Policy</a>
                <a className="link link-hover">Affiliate</a>
                <a className="link link-hover">About Us</a>
            </div>
            <div>
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