import React from 'react';

const MyToysRow = ({myToy, handleDelete}) => {
    const { _id, toyPhoto, sellerName, toyName, category, price, quantity } = myToy;
    return (
        <tr>
            <th>
                <label>
                <button onClick={() => handleDelete (_id)} className="btn btn-md btn-circle">
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
                <button className="btn btn-ghost btn-xs">Update</button>
            </th>
        </tr>
    );
};

export default MyToysRow;