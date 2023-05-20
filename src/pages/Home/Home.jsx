import Aos from 'aos';
import React from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import Gallery from './Gallery/Gallery';
import ShopByCategory from './ShopByCategory/ShopByCategory';
import Support from './Support/Support';
import LatestNews from './LatestNews/LatestNews';
import useTitle from '../../hooks/useTitle';
import { Link } from 'react-router-dom';


const Home = () => {
    Aos.init();
    useTitle('Home')
    return (
        <>
            <div className="md:flex justify-around items-center gap-10 bg-[#ECE3E1] p-10 mb-10">
                <div className=" mx-auto items-center space-y-3" data-aos="fade-right" data-aos-duration="3000">
                    <button className='text-center font-semibold text-white text-2xl px-7 py-4 bg-orange-400'>New Arrival</button>
                    <h2 className="text-7xl font-extrabold ">One Box Toy</h2>
                    <p className='text-xl font-semibold pb-5'>Flat 10% Off On Order Above $29.99</p>
                    <Link to="/all-toys" ><button
                        type="button"
                        className=" flex items-center rounded-full bg-success px-7 py-4 text-xl font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#14a44d] transition duration-150 ease-in-out hover:bg-success-600 hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:bg-success-600 focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] focus:outline-none focus:ring-0 active:bg-success-700 active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.3),0_4px_18px_0_rgba(20,164,77,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(20,164,77,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(20,164,77,0.2),0_4px_18px_0_rgba(20,164,77,0.1)]">
                        <span className='pr-3'>Shop Now</span> <BiRightArrowAlt />
                    </button></Link>
                </div>
                <div className='flex justify-center items-center mt-5' data-aos="zoom-in-left" data-aos-duration="3000">
                    <img className='w-1/2' src="https://i.ibb.co/BC4zLKj/toy-banner.png" alt="Album" />
                </div>
            </div>
            <Gallery></Gallery>
            <ShopByCategory></ShopByCategory>
            <LatestNews></LatestNews>
            <Support></Support>

        </>
    );
};

export default Home;