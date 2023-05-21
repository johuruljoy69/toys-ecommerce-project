import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';

const MyToysRow = ({ myToy, handleDelete }) => {
    const { _id, toyPhoto, sellerName, toyName, category, price, quantity, index } = myToy;
    return (
        <tr>
            <td>
                <div className="avatar">
                    <div className="rounded w-20 h-20">
                        {toyPhoto && <img src={toyPhoto} alt="Avatar Tailwind CSS Component" />}
                    </div>
                </div>
            </td>
            <td>{sellerName}</td>
            <td>{toyName}</td>
            <td>{category}</td>
            <td>${price}</td>
            <td>{quantity}</td>
            <th>
                <Link to={`/update/${_id}`}><button className='px-3 py-2 text-white font-semibold rounded-lg bg-blue-500 hover:bg-blue-700 '>Update Toy</button></Link>
            </th>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-md bg-red-500 hover:bg-red-800 border-0 btn-circle">
                        <AiFillDelete className='text-black' size={'2rem'} />
                    </button>
                </label>
            </th>
        </tr>
    );
};

export default MyToysRow;