import React from 'react';
import useTitle from '../../hooks/useTitle';
import { Link } from 'react-router-dom';

const About = () => {
    useTitle('About')
    return (
        <div className="hero min-h-screen bg-base-200 px-20">
            <div className="md:flex justify-evenly items-center">
                <div className='gird md:grid-cols-2 gap-10'>
                    <div><img src="https://i.ibb.co/z2k0M75/Growsland-Remote-Control-Car.jpg" className="w-3/4 rounded-lg shadow-2xl" /></div>
                </div>
                <div>
                    <h1 className="text-5xl font-extrabold pb-5 pt-5 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600">JS ToyHub</h1>
                    <p className="py-6">JS ToyHub is a renowned and innovative company specializing in the design, development, and manufacturing of cutting-edge toys and entertainment products. With a passion for creating joyful experiences for children and adults alike, JS ToyHub has established itself as a leader in the toy industry.                       
                        </p>
                    <Link to='/contact' ><button className="btn btn-primary">Contact us</button></Link>
                </div>
            </div>
        </div>

    );
};

export default About;