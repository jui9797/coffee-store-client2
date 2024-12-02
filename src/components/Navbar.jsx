import React from 'react';
import logoimg from '../assets/images/more/logo1.png'
import { NavLink } from 'react-router-dom';


const Navbar = () => {
    const link =<>
    <li><NavLink to='/'>Home</NavLink></li>
    <li><NavLink to='/addCoffee'>Add coffee</NavLink></li>
    <li><NavLink to='/signUp'>SignUp</NavLink></li>
    <li><NavLink to='/users'>Users</NavLink></li>
    <li><NavLink to='/login'>Login</NavLink></li>
    </>
    return (
        <div className=' bg-orange-800 py-4'>
            <div className='flex justify-center items-center'>
            <img className='w-16 h-16' src={logoimg} alt="" />
            <h2 className='text-white text-xl'>Espresso Emporium</h2>
            </div>
           <div className='list-none flex justify-center items-center gap-4  text-white'>
            {link}
           </div>
        </div>
    );
};

export default Navbar;