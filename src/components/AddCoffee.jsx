import React from 'react';
import Navbar from './Navbar';

const AddCoffee = () => {

const handleAddCoffee=(e)=>{
e.preventDefault()
const form =e.target
const name =form.name.value
const quantity =form.quantity.value
const supplier =form.supplier.value
const taste =form.taste.value
const category =form.category.value
const details =form.details.value
const photo =form.photo.value
const newCoffee ={name, quantity, supplier, taste, category, details, photo}
console.log(newCoffee)

fetch(`http://localhost:5000/coffee`, {
    method:'POST',
    headers:{
        'content-type': 'application/json'

    },
    body:JSON.stringify(newCoffee)
})
.then(res=>res.json())
.then(data =>{
    console.log(data)
})
}


    return (
        <div>
            <Navbar></Navbar>
            <div className='my-10 bg-slate-400 p-8'>
                <h2 className='text-xl text-center font-bold mb-4'>Add New Coffee</h2>

                <form onSubmit={handleAddCoffee} className='w-2/3 mx-auto'>
                {/* 1st row */}
               <div className='md:flex gap-4 my-4'>
               <input type="text" placeholder="name" name='name' className="input input-bordered w-full " />
               <input type="text" placeholder="quantity" name='quantity' className="input input-bordered w-full " />
               </div>
                {/* 2nd row */}
               <div className='md:flex gap-4 my-4'>
               <input type="text" placeholder="supplier" name='supplier' className="input input-bordered w-full " />
               <input type="text" placeholder="taste" name='taste' className="input input-bordered w-full " />
               </div>
                {/* 3rd row */}
               <div className='md:flex gap-4 my-4'>
               <input type="text" placeholder="category" name='category' className="input input-bordered w-full " />
               <input type="text" placeholder="details" name='details' className="input input-bordered w-full " />
               </div>
               <input className='input input-bordered w-full mb-4' type="text" name='photo'  placeholder='photo URL' />
               <input className='btn  w-full' type="submit" value='Add Coffee' />
                </form>
            </div>
        </div>
    );
};

export default AddCoffee;