import React, { useState } from 'react';
import { MdLocationPin, MdEmail, MdPhone } from 'react-icons/md';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube, FaPinterest } from 'react-icons/fa';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleNameChange = (e) => {
        setName(e.target.value);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleMessageChange = (e) => {
        setMessage(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className='mx-10'>
            <div className='text-center mt-12 mb-20'>
                <h2 className='text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-amber-600'>Contact With Us</h2>
            </div>
            <div className='md:flex justify-evenly gap-5'>
                <form onSubmit={handleSubmit} className="w-1/2">
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 font-bold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            value={name}
                            onChange={handleNameChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your name"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 font-bold mb-2">
                            Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={handleEmailChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your email"
                            required
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="message" className="block text-gray-700 font-bold mb-2">
                            Message
                        </label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={handleMessageChange}
                            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring focus:border-blue-300"
                            placeholder="Enter your message"
                            rows={4}
                            required
                        />
                    </div>

                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                    >
                        Send
                    </button>
                </form>
                <div>
                    <div className=''>
                        <div className='space-y-2'>
                            <p><span className='text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600'>JS ToyHub</span></p>

                            <p className='flex items-center'><MdLocationPin size={'1rem'} /> <span className='ps-2'>Jashore Sador, Khulna, Bangladesh</span></p>
                            <p className='flex items-center'><MdEmail size={'1rem'} /> <span className='ps-2'>contact@jstoyhum.com</span></p>
                            <p className='flex items-center'><MdPhone size={'1rem'} /> <span className='ps-2'>+8801753215648</span></p>
                        </div>
                    </div>
                    <div className=''>
                        <span className="footer-title"> Follow Us On</span>
                        <a className="link link-hover flex items-center"> <FaFacebook size={'1rem'} /> <span className='ps-3'>Facebook</span> </a>
                        <a className="link link-hover flex items-center"> <FaTwitter size={'1rem'} /> <span className='ps-3'>Twitter</span> </a>
                        <a className="link link-hover flex items-center"> <FaInstagram size={'1rem'} /> <span className='ps-3'>Instagram</span> </a>
                        <a className="link link-hover flex items-center"> <FaYoutube size={'1rem'} /> <span className='ps-3'>Youtube</span> </a>
                        <a className="link link-hover flex items-center"> <FaPinterest size={'1rem'} /> <span className='ps-3'>Pinterest</span> </a>

                    </div>
                </div>

            </div>
        </div>
    );
};

export default ContactForm;
