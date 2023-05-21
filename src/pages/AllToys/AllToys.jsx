import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import AllToysRow from './AllToysRow';
import useTitle from '../../hooks/useTitle';

const AllToys = () => {
    const { user } = useContext(AuthContext);
    const [allToys, setAllToys] = useState([])
    const [searchText, setSearchText] = useState("");
    useTitle('All Toys')

    const url = 'http://localhost:5000/addedtoys'
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setAllToys(data)
            })
    }, [])

    const handleSearchText = () => {
        fetch(`http://localhost:5000/getToyByText/${searchText}`)
            .then((res) => res.json())
            .then((data) => {
                console.log('Search by text', data);
                setAllToys(data);
            });
    };


    return (
        <div className="mt-10">
            <h2 className="text-5xl mb-6 text-center"> Search Your Favorite Toys </h2>
            <div className="form-control mb-6 ">
                <div className="input-group flex justify-center items-center">
                    <input onChange={(e) => setSearchText(e.target.value)} type="text" placeholder="Search…" className="input input-bordered" />
                    <button onClick={handleSearchText} className="btn btn-square">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                    </button>
                </div>
            </div>
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
                            allToys.slice(0, 20).map(allToy => <AllToysRow
                                key={allToy._id}
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