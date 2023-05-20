import React from 'react';
import { Link } from 'react-router-dom';

const MyToysRow = ({ myToy, handleDelete }) => {
    const { _id, toyPhoto, sellerName, toyName, category, price, quantity } = myToy;
    return (
        <tr>
            <th>
                <label>
                    <button onClick={() => handleDelete(_id)} className="btn btn-md btn-circle">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg>
                    </button>
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
                <Link to={`/update/${_id}`}><button className='btn' >Update Toy</button></Link>
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
        </tr>
    );
};

export default MyToysRow;