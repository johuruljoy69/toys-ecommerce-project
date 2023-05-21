import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const ToysDetails = () => {
    const toyDetails = useLoaderData();
    const { _id, toyPhoto, toyName, sellerName, email, price, quantity, rating, description } = toyDetails;

    return (
        <div className="md:flex justify-around items-center gap-10 bg-base-100 shadow-xl p-10 mt-20 mb-20">
            <figure><img className='w-80' src={toyPhoto} alt="Movie" /></figure>
            <div className="text-start space-y-1">
                <h2 className=" text-2xl font-semibold"><span className='text-purple-700'>Toy Name:</span> {toyName}</h2>
                <h2 className="text-2xl font-semibold"><span className='text-purple-700'>Seller Name:</span> {sellerName}</h2>
                <p className='text-xl font-semibold'><span className='text-purple-700'>Email:</span> {email}</p>
                <p className='text-xl font-semibold'><span className='text-purple-700'>Price:</span> ${price}</p>
                <p className='text-xl font-semibold'><span className='text-purple-700'>Quantity:</span> {quantity}</p>
                <p><span className='font-semibold text-purple-700'>Description:</span> {description}</p>
                <div className="flex justify-between items-center">
                    <div className='flex justify-center items-center'>
                        <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
                        <span className='ps-2 text-2xl font-semibold'>{rating}</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ToysDetails;