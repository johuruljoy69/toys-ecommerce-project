import React, { useState } from 'react';

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
        // Handle form submission logic here (e.g., sending data to a server)
        // You can access the form data using the state variables (name, email, message)
        // Reset the form state after submission if needed
        setName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className='mx-10'>
            <div className='text-center mt-12 mb-20'>
                <h2 className='text-5xl font-bold'>Contact With Us</h2>
            </div>
            <div className='md:flex justify-between gap-10'>
                
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
                
                <div className=''>
                    <img className='w-3/4' src="https://img.freepik.com/free-vector/contact-center-abstract-concept_335657-3032.jpg?w=826&t=st=1684668830~exp=1684669430~hmac=b85e3ed0c2ed75dce5278145ca8047a7f3a84704525ceb0a6b10ae6e5ea20d12" alt="" />
                </div>
            </div>
        </div>
    );
};

export default ContactForm;
