import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { Link } from 'react-router-dom';
import { BiRightArrowAlt } from 'react-icons/bi';

const CategoryCart = ({ categoryToy }) => {
    const { _id, toyPhoto, toyName, price, rating } = categoryToy;
    return (
        <div className="card w-100 h-100 bg-base-100 shadow-xl" data-aos="fade-up"
            data-aos-duration="3000">
            <div className='flex items-center justify-center'>
                <figure><img className='w-72 p-5' src={toyPhoto} alt="Album" /></figure>
            </div>
            <div className="card-body text-start">
                <h2 className="text-xl font-semibold">{toyName}</h2>
                <p className=' text-2xl font-semibold'>Price: ${price}</p>
                <div className="grid justify-between items-center gap-5">
                    <div className='flex items-center'>
                        <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
                        <span className='ps-2 text-2xl font-semibold'>{rating}</span>
                    </div>
                    <div>
                        <Link to={`/toy-details/${_id}`}><button className='px-3 py-2 flex items-center text-white font-semibold rounded-lg bg-blue-500 hover:bg-blue-700' ><span className='pr-3'>View Details</span> <BiRightArrowAlt /></button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryCart;