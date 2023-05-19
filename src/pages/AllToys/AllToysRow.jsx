import React from 'react';

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
                <button className="btn btn-ghost btn-xs">Views Details</button>
            </th>
        </tr>

    );
};

export default AllToysRow;