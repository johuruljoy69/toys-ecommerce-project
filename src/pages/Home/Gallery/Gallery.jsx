import React, { useEffect, useState } from 'react';
import CartGallery from './CartGallery';

const Gallery = () => {
    const [galleries, setGalleries] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/gallery')
            .then(res => res.json())
            .then(data => setGalleries(data))
            .catch(error => error.message)
    }, [])
    return (
        <div className='text-center mt-24 mb-12'>
            <h2 className='text-5xl font-bold mb-6'>Our Toys Gallery</h2>
            <p>New Arrival</p>
            <div className='grid md:grid-cols-6 gap-10 mt-10 mx-10'>
                {
                    galleries.map(gallery => <CartGallery
                    key={gallery._id}
                    gallery={gallery}
                    ></CartGallery> )
                }
            </div>
        </div>
    );
};

export default Gallery;