import Aos from 'aos';
import React from 'react';
import { BiRightArrowAlt } from 'react-icons/bi';
import Gallery from './Gallery/Gallery';
import ShopByCategory from './ShopByCategory/ShopByCategory';
import Support from './Support/Support';
import LatestNews from './LatestNews/LatestNews';
import useTitle from '../../hooks/useTitle';


const Home = () => {
    Aos.init();
    useTitle('Home')
    return (
        <>
            <div className="md:flex justify-around items-center gap-10 bg-[#ECE3E1] p-10 mb-10">
                <div className=" mx-auto items-center space-y-3" data-aos="fade-right" data-aos-duration="3000">
                    <button className='text-center font-semibold text-white text-2xl px-7 py-4 bg-orange-400'>New Arrival</button>
                    <h2 className="text-7xl font-extrabold ">One Box Toy</h2>
                    <p>Flat 10% Off On Order Above $29.99</p>
                    <button className="bg-blue-500 flex items-center hover:bg-blue-700 text-white font-bold py-4 px-7 rounded-full">
                        <span className='pr-3'>Shop Now</span> <BiRightArrowAlt />
                    </button>
                </div>
                <div className='flex justify-center items-center' data-aos="zoom-in-left" data-aos-duration="3000">
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