import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillDelete } from 'react-icons/ai';

const MyToysRow = ({ myToy, handleDelete }) => {
    const { _id, toyPhoto, sellerName, toyName, category, price, quantity, index } = myToy;
    return (
        <tr>
            <th>
                <label>
                    <input type="checkbox" className="checkbox" />
                </label>
            </th>
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
                {/* <button><label htmlFor="my-modal-5" className="btn">Update Toy</label></button>
                <input type="checkbox" id="my-modal-5" className="modal-toggle" />
                <div className="modal">
                    <div className="modal-box w-11/12 max-w-5xl">
                        <div className="modal-action">
                            <label htmlFor="my-modal-5" className="btn">Close</label>
                        </div>
                    </div>
                </div> */}
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