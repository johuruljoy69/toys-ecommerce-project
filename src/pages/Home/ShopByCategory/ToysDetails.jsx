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
            <div className="space-y-3">
                <h2 className="text-start text-2xl font-semibold">Toy Name: {toyName}</h2>
                <h2 className="text-start text-2xl font-semibold">Seller Name: {sellerName}</h2>
                <p className='text-start text-xl font-semibold'>Email: {email}</p>
                <p className='text-start text-xl font-semibold'>Price: ${price}</p>
                <p className='text-start text-xl font-semibold'>Quantity: {quantity}</p>
                <p className='text-start text-xl font-semibold'>Description: {description}</p>
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