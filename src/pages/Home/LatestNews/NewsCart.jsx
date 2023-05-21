import React from 'react';
import { Link } from 'react-router-dom';
import { BiRightArrowAlt } from 'react-icons/bi';
import { FcLike } from 'react-icons/fc';
import { FaArrowRight } from 'react-icons/fa';

const NewsCart = ({ toyNew }) => {
    const { _id, toyPhoto, toyName, date, description } = toyNew;
    return (
        <div className="card w-100 h-100 bg-base-100 border" data-aos="fade-up" data-aos-duration="3000">
            <div className='flex items-center justify-center'>
                <figure><img className='w-72 p-5' src={toyPhoto} alt="Album" /></figure>
            </div>
            <div className="card-body text-start">
                <div className='flex items-center justify-between'>
                    <p><span className='font-semibold'>Publish date: </span>{date}</p>
                    <div className="badge badge-secondary">NEW</div>
                </div>
                <h2 className="font-semibold">{toyName}</h2>
                <div className='flex items-center'><FaArrowRight /><h2 className="ps-2"><small>{description}</small></h2></div>
                <div className="md:flex justify-between items-center gap-6">
                    <div className='flex items-center'>
                        <span className='pr-2 text-xl font-semibold'>Like</span>
                        <FcLike size={'1.5rem'} />
                    </div>

                    <Link to={`/toy-details/${_id}`}><button className='px-3 py-2 flex items-center text-white font-semibold rounded-lg bg-blue-500 hover:bg-blue-700' ><span className='pr-3'>Details</span> <BiRightArrowAlt /></button></Link>
                </div>
            </div>
        </div>
    );
};

export default NewsCart;