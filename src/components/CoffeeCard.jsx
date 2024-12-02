import React from 'react';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const CoffeeCard = ({coffee, coffees, setCoffees}) => {
    const {_id, name, quantity, taste, details, supplier, category, photo} = coffee

const handleDelete=(_id)=>{
    console.log(_id)
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
            fetch(`https://coffee-store-server2-tan.vercel.app/coffee/${_id}`, {
                method: 'DELETE'
            })
            .then(res =>res.json())
            .then(data=>{
                console.log(data)
                if(data.deletedCount > 0){
                    Swal.fire({
                            title: "Deleted!",
                            text: "Your coffee has been deleted.",
                            icon: "success"
                          });   
                }
                const remaining =coffees.filter(coff=>coff._id !== _id)
                setCoffees(remaining)
            })
            // console.log('delete confirmed')
        //   Swal.fire({
        //     title: "Deleted!",
        //     text: "Your file has been deleted.",
        //     icon: "success"
        //   });
        }
      });
}

    return (
        <div className='flex justify-around border-2 bg-slate-100'>
           <div>
            <img src={photo} alt="" />
           </div>
           <div className='py-4'>
            <h1>{name}</h1>
            <p>{quantity}</p>
            <p>{taste}</p>
            <p>{details}</p>
            <p>{supplier}</p>
            <p>{category}</p>
           </div>
           <div className='py-4'>
           <div className="join join-vertical space-y-4">
           <button className="btn join-item bg-[#D2B48C] text-white">Details</button>
           <Link to={`updateCoffee/${_id}`}><button className="btn join-item bg-[#3C393B] text-white">Edit</button></Link>
           <button onClick={()=>handleDelete(_id)} className="btn join-item bg-red-500 text-white">Delete</button>
           </div>
           </div>
        </div>
    );
};

export default CoffeeCard;