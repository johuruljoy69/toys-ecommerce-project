import React from 'react';
import { Link } from 'react-router-dom';

const AllToysRow = ({ allToy }) => {
    const { _id, toyPhoto, sellerName, toyName, category, price, quantity } = allToy;
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
                <Link to={`/toy-details/${_id}`} ><button className="btn btn-ghost btn-xs">Views Details</button></Link>
            </th>
        </tr>

    );
};

export default AllToysRow;