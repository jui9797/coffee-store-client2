import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Navbar from './Navbar';
import 'sweetalert2/src/sweetalert2.scss'
import Swal from 'sweetalert2';

const Users = () => {
    const loadedUsers = useLoaderData()
    const [users, setUsers] = useState(loadedUsers)

    const handleDelete = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            
            if (result.isConfirmed) {
                fetch(`https://coffee-store-server2-tan.vercel.app/users/${id}`, {
                    method: 'DELETE'
                })
                    .then(result =>result.json()
                    )
                    .then(data => {

                        console.log('delete is done', data)
                        if (data.deletedCount> 0) {
                              Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                              });
                              const remaining =users.filter(user=>user._id !== id)
                              setUsers(remaining)
                        }
                    })

            }
        });
    }

    return (
        <div>
            <Navbar></Navbar>
            <h2 className='text-3xl my-10 md:my-20 text-center font-bold'>Users:{users.length}</h2>
            {/* user table */}
            <div className="overflow-x-auto w-2/3 mx-auto border-2">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Last Sign time</th>
                            <th>Sign up Time</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}

                        {users.map((user, index) => (
                            <tr key={user._id}>
                                <th>{index + 1}</th>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.lastSignInTime
                                }</td>
                                <td>{user.createdAt}
                                    <button onClick={() => handleDelete(user._id)} className='btn ml-4'>Delete</button>
                                </td>
                            </tr>
                        ))}


                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default Users;