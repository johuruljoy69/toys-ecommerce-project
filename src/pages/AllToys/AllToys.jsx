import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import AllToysRow from './AllToysRow';
import useTitle from '../../hooks/useTitle';

const AllToys = () => {
    const { user } = useContext(AuthContext);
    const [allToys, setAllToys] = useState([])
    useTitle('All Toys')

    const url = 'http://localhost:5000/addedtoys'
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
            })
    }, [])

    return (
        <div className="mt-10">
            <h2 className="text-5xl mb-6"> All Toys: {allToys.length} </h2>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>
                                <label>

                                </label>
                            </th>
                            <th>Photo</th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>price</th>
                            <th>Quantity</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allToys.map(allToy => <AllToysRow
                                key={ allToy._id}
                                allToy={allToy}
                            ></AllToysRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default AllToys;