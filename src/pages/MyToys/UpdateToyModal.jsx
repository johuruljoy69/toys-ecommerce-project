import React, { useContext } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const UpdateToyModal = ({ myToy }) => {
    const { _id, toyPhoto, sellerName, email, toyName, category, price, quantity, description, rating } = myToy;
    const { user } = useContext(AuthContext)

    const handleUpdateToy = event => {
        event.preventDefault();

        const form = event.target;
        const price = form.price.value;
        const quantity = form.quantity.value;
        const description = form.description.value;

        const updatedToy = { _id, price, quantity, description }

        fetch(`http://localhost:5000/addedtoys/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(updatedToy)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('Updated toy successfully')
                }

            })

    }

    return (
        <div className="mt-20">
            <div className='md:flex justify-between gap-5 mx-auto px-14 mb-6'>
                <div>
                    <img className='w-60' src={toyPhoto} alt="" />
                </div>
                <div className='text-start'>
                    <h2 className="text-xl  mb-5">Toy Name: {toyName} </h2>
                    <h2 className="text-xl  mb-5">Category: {category} </h2>
                    <h2 className="text-xl  mb-5">Seller Name: {sellerName} </h2>
                    <h2 className="text-xl  mb-5">Seller Email: {email} </h2>
                    <div className='flex justify-start items-center'>
                        <Rating style={{ maxWidth: 150 }} value={rating} readOnly />
                        <span className='ps-2 text-2xl font-semibold'>{rating}</span>
                    </div>
                </div>
            </div>
            <form onSubmit={handleUpdateToy}>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name='price' defaultValue={price} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Quantity</span>
                        </label>
                        <input type="text" name='quantity' defaultValue={quantity} className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Description</span>
                        </label>
                        <input type="text" name='description' defaultValue={description} className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control mt-6">
                    <input className="btn btn-primary btn-block" type="submit" value="Update A Toy" />
                </div>
            </form>
            <div className="card-body">

            </div>
        </div>
    );
};

export default UpdateToyModal;