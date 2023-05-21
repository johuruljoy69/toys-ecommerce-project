import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';
import MyToysRow from './MyToysRow';
import useTitle from '../../hooks/useTitle';
import Swal from "sweetalert2";

const MyToys = () => {
    const { user } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([])
    const [ascending, setAscending] = useState(true)
    useTitle('My Toys')

    const url = `https://b7a11-toy-marketplace-server-side-johuruljoy69.vercel.app/addedtoys?email=${user?.email}&sort=${ascending ? 'ascending' : 'descending '}`
    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => {
                setMyToys(data)
            })
    }, [url])


    const handleDelete = id => {
        const proceed = confirm('Are you sure you want to delete')
        if (proceed) {
            fetch(`https://b7a11-toy-marketplace-server-side-johuruljoy69.vercel.app/addedtoys/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        Swal.fire(
                            'Deleted!',
                            'Your Toy has been deleted.',
                            'success'
                        )
                        const remaining = myToys.filter(myToy => myToy._id !== id);
                        setMyToys(remaining);
                    }
                })
        }
    }



    return (
        <div className="mt-10">
            <div className='text-center space-y-5'>
                <h2 className="text-5xl text-center font-bold pb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-700 to-pink-600"> My All Added Toys</h2>

                <button onClick={() => setAscending(!ascending)} className='px-3 py-2 flex items-center mx-auto text-white font-semibold rounded-lg bg-blue-500 hover:bg-blue-700'>{ascending ? 'Price high to low' : 'Price low to high'}</button>
                
            </div>

            <div className="overflow-x-auto w-full mt-7">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>Seller Name</th>
                            <th>Toy Name</th>
                            <th>Sub-category</th>
                            <th>price</th>
                            <th>Quantity</th>
                            <th>Update</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myToys.map(myToy => <MyToysRow
                                key={myToy._id}
                                myToy={myToy}
                                handleDelete={handleDelete}
                            ></MyToysRow>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyToys;