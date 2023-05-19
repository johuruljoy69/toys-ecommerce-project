import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const CategoryCart = ({ categoryToy }) => {
    const { _id, toyPhoto, toyName, price, rating } = categoryToy;
    return (
        <div className="card w-100 h-100 glass">
            <div className='flex items-center justify-center'>
                <figure><img className='w-72 p-5' src={toyPhoto} alt="Album" /></figure>
            </div>
            <div className="card-body">
                <h2 className="card-title">Toy Name: {toyName}</h2>
                <p className='text-start text-2xl font-semibold'>Price: ${price}</p>
                <div className="flex justify-between items-center">
                    <div className='flex justify-center items-center'>
                        <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
                        <span className='ps-2 text-2xl font-semibold'>{rating}</span>
                    </div>
                    <button className="btn btn-primary">Views Details</button>
                </div>
            </div>
        </div>
    );
};

export default CategoryCart;