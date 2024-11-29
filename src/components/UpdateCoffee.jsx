import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'

const UpdateCoffee = () => {
    const coffee =useLoaderData()
    // console.log(coffee)
    const {_id,name, quantity, supplier, taste, category, details, photo} =coffee

const handleUpdateCoffee =(e)=>{
e.preventDefault()
const form =e.target
const name =form.name.value
const quantity =form.quantity.value
const supplier =form.supplier.value
const taste =form.taste.value
const category =form.category.value
const details =form.details.value
const photo =form.photo.value
const updatedCoffee ={name, quantity, supplier, taste, category, details, photo}
console.log(updatedCoffee)
fetch(`http://localhost:5000/coffee/${_id}`, {
    method:'PUT',
    headers:{
        'content-type': 'application/json'
    },
    body:JSON.stringify(updatedCoffee)
})
.then(res=> res.json())
.then(data=>{
    console.log(data)
    if(data.modifiedCount >0){
        Swal.fire({
            title: "Updated!",
            text: "Your coffee has been updated.",
            icon: "success"
          });
    }
})
}

    return (
        <div>
            <h2 className='text-2xl'>update this coffee about : {name}</h2>
            <div className='my-10 bg-slate-400 p-8'>
                <h2 className='text-xl text-center font-bold mb-4'>Update this Coffee</h2>

                <form onSubmit={handleUpdateCoffee} className='w-2/3 mx-auto'>
                {/* 1st row */}
               <div className='md:flex gap-4 my-4'>
               <input type="text" defaultValue={name} name='name' className="input input-bordered w-full " />
               <input type="text" defaultValue={quantity} name='quantity' className="input input-bordered w-full " />
               </div>
                {/* 2nd row */}
               <div className='md:flex gap-4 my-4'>
               <input type="text" defaultValue={supplier} name='supplier' className="input input-bordered w-full " />
               <input type="text" defaultValue={taste} name='taste' className="input input-bordered w-full " />
               </div>
                {/* 3rd row */}
               <div className='md:flex gap-4 my-4'>
               <input type="text" defaultValue={category} name='category' className="input input-bordered w-full " />
               <input type="text" defaultValue={details} name='details' className="input input-bordered w-full " />
               </div>
               <input className='input input-bordered w-full mb-4' type="text" name='photo'  defaultValue={photo} />
               <input className='btn  w-full' type="submit" value='Update Coffee' />
                </form>
            </div>
        </div>
    );
};

export default UpdateCoffee;