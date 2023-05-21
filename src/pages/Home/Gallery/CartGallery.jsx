import Aos from 'aos';
import React from 'react';

const CartGallery = ({ gallery }) => {
    const { title, img } = gallery;
    Aos.init();
    return (
        <div className="card w-100 bg-base-100 shadow-xl p-2 transform transition duration-500 hover:scale-110">
            <figure><img className='w-3/4' src={img} alt="toy" /></figure>
            {/* <div className="card-body">
                <h2 className="card-title">{title}</h2>
            </div> */}
        </div>
    );
};

export default CartGallery;