import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { AuthContext } from '../../contexts/AuthProvider';
import { useLoaderData } from 'react-router-dom';

const UpdateToyModal = () => {
    const updateToy = useLoaderData()
    const { _id, toyPhoto, sellerName, email, toyName, category, price, quantity, description, rating } = updateToy;
    const { user } = useContext(AuthContext)
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data);
        fetch(`http://localhost:5000/addedtoys/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.modifiedCount > 0) {
                    alert('Add toy successfully')
                }
            })
    };

    return (
        <div className='mt-12'>
            <form onSubmit={handleSubmit(onSubmit)} className=" mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                    {/* toy name */}
                    <div className="mb-4">
                        <label htmlFor="toyName" className="block text-gray-700 text-sm font-bold mb-2">
                            Toy Name
                        </label>
                        <input
                            type="text"
                            id="toyName"
                            placeholder="Toy Name"
                            defaultValue={toyName}
                            {...register('toyName', { required: true })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.toyName && <p className="text-red-500 text-xs italic">Toy name is required</p>}
                    </div>
                    {/* toy Photo */}
                    <div className="mb-4">
                        <label htmlFor="toyPhoto" className="block text-gray-700 text-sm font-bold mb-2">
                            Toy Photo
                        </label>
                        <input
                            type="text"
                            id="toyPhoto"
                            placeholder="Toy Photo"
                            defaultValue={toyPhoto}
                            {...register('toyPhoto', { required: true })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.toyPhoto && <p className="text-red-500 text-xs italic">Photo URL is required</p>}
                    </div>
                    {/* Seller Name */}
                    <div className="mb-4">
                        <label htmlFor="sellerName" className="block text-gray-700 text-sm font-bold mb-2">
                            Seller Name
                        </label>
                        <input
                            type="text"
                            id="sellerName"
                            placeholder="Seller Name"
                            defaultValue={user?.displayName}
                            {...register('sellerName', { required: true })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.sellerName && <p className="text-red-500 text-xs italic">Seller name is required</p>}
                    </div>
                    {/* Email*/}
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
                            Your Email
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Your Email"
                            defaultValue={user?.email}
                            {...register('email', { required: true })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.email && <p className="text-red-500 text-xs italic">Email is required</p>}
                    </div>
                    {/* Category */}
                    <div className="mb-4">
                        <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">
                            Chose Categories
                        </label>
                        <select
                            id="category"
                            defaultValue={category}
                            {...register('category', { required: true })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        >
                            <option value="">Select a category</option>
                            <option value="Sports Car" >Sports Car</option>
                            <option value="Police Car" >Mini Police Car</option>
                            <option value="Fire Truck">Mini Fire Truck</option>
                        </select>
                        {errors.category && <p className="text-red-500 text-xs italic">Category is required</p>}
                    </div>
                    {/* Price*/}
                    <div className="mb-4">
                        <label htmlFor="price" className="block text-gray-700 text-sm font-bold mb-2">
                            Price
                        </label>
                        <input
                            type="number"
                            id="price"
                            placeholder="Price"
                            defaultValue={price}
                            {...register('price', { required: true, min: 0})}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.price && <p className="text-red-500 text-xs italic">Price is required</p>}
                    </div>
                    {/* Quantity */}
                    <div className="mb-4">
                        <label htmlFor="quantity" className="block text-gray-700 text-sm font-bold mb-2">
                            Available quantity
                        </label>
                        <input
                            type="number"
                            id="quantity"
                            defaultValue={quantity}
                            {...register('quantity', { required: true, min: 0 })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.quantity && <p className="text-red-500 text-xs italic">Quantity is required</p>}
                    </div>
                    {/* Rating */}
                    <div className="mb-4">
                        <label htmlFor="rating" className="block text-gray-700 text-sm font-bold mb-2">
                            Rating
                        </label>
                        <input
                            type="number"
                            id="rating"
                            defaultValue={rating}
                            {...register('rating', { required: true, min: 0 })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.rating && <p className="text-red-500 text-xs italic">Rating is required</p>}
                    </div>

                    {/* Detail description */}
                    <div className="mb-4">
                        <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                        Detail Description
                        </label>
                        <input
                            type="text"
                            id="description"
                            defaultValue={description}
                            {...register('description', { required: true})}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.description && <p className="text-red-500 text-xs italic">Description is required</p>}
                    </div>

                    {/* Date */}
                    <div className="mb-4">
                        <label htmlFor="date" className="block text-gray-700 text-sm font-bold mb-2">
                            Date
                        </label>
                        <input
                            type="date"
                            id="date"
                            {...register('date', { required: true, min: 0 })}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        />
                        {errors.date && <p className="text-red-500 text-xs italic">Date is required</p>}
                    </div>

                </div>

                <div className="text-center">
                    <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white w-full font-bold py-3 px-7 rounded focus:outline-none focus:shadow-outline"
                    >
                        Update Toy Product
                    </button>
                </div>
            </form>
        </div>
    );
};

export default UpdateToyModal;
