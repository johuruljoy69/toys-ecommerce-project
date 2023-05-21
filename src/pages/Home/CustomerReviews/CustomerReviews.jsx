import React from 'react';
import { Rating } from '@smastrom/react-rating'

const CustomerReviews = () => {
    return (
        <div className='mt-24 mx-10'>
            <div className='text-center mb-20'>
                <h2 className='text-5xl font-bold pb-6'>What They Say</h2>
                <p className='text-xl font-semibold'>Customer Testimonial</p>
            </div>
            <div className='grid md:grid-cols-3 gap-10'>

                <div className="card w-96 bg-base-100 shadow-xl transform transition duration-500 hover:scale-110">
                    <figure className="px-10 pt-10">
                        <div className="avatar">
                            <div className="w-32 rounded-full">
                                <img src="https://img.freepik.com/free-photo/pretty-smiling-joyfully-female-with-fair-hair-dressed-casually-looking-with-satisfaction_176420-15187.jpg?w=1380&t=st=1684615734~exp=1684616334~hmac=ff19b05ed37333e16d32fbbd28ccfc411d81e80473c4252b4cb7da48d87ee048" />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body">
                        <div className='flex justify-between items-center mb-3'>
                            <h2 className="card-title">Lucy Hale</h2>
                            <Rating style={{ maxWidth: 100 }} value={5} readOnly />
                        </div>
                        <p>I recently purchased a toy car for my nephew, and I must say it has exceeded all expectations. The level of detail and craftsmanship put into this toy is truly remarkable. The car's design is sleek and realistic, making it incredibly appealing to young car enthusiasts</p>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl transform transition duration-500 hover:scale-110">
                    <figure className="px-10 pt-10">
                        <div className="avatar">
                            <div className="w-32 rounded-full">
                                <img src="https://img.freepik.com/free-photo/young-bearded-man-with-striped-shirt_273609-5677.jpg?w=1380&t=st=1684616651~exp=1684617251~hmac=487b899c738ff53515962a8f84b4f722e1cf39bd98eb346ebbfb8430f752c216" />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body">
                        <div className='flex justify-between items-center mb-3'>
                            <h2 className="card-title">Raul Julia</h2>
                            <Rating style={{ maxWidth: 100 }} value={5} readOnly />
                        </div>
                        <p>I recently purchased a toy car for my nephew, and I must say it has exceeded all expectations. The level of detail and craftsmanship put into this toy is truly remarkable. The car's design is sleek and realistic, making it incredibly appealing to young car enthusiasts</p>
                    </div>
                </div>

                <div className="card w-96 bg-base-100 shadow-xl transform transition duration-500 hover:scale-110">
                    <figure className="px-10 pt-10">
                        <div className="avatar">
                            <div className="w-32 rounded-full">
                                <img src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg?w=1380&t=st=1684616762~exp=1684617362~hmac=598bc637443e0de7d77c0f05457c23189603764724ba996d09657c41bd2b4def" />
                            </div>
                        </div>
                    </figure>
                    <div className="card-body">
                        <div className='flex justify-between items-center mb-3'>
                            <h2 className="card-title">Julia Winter</h2>
                            <Rating style={{ maxWidth: 100 }} value={5} readOnly />
                        </div>
                        <p>I recently purchased a toy car for my nephew, and I must say it has exceeded all expectations. The level of detail and craftsmanship put into this toy is truly remarkable. The car's design is sleek and realistic, making it incredibly appealing to young car enthusiasts</p>
                    </div>
                </div>


            </div>
        </div>
    );
};

export default CustomerReviews;