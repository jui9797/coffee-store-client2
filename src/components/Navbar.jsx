import React from 'react';
import logoimg from '../assets/images/more/logo1.png'

const Navbar = () => {
    return (
        <div className='flex justify-center bg-orange-800 items-center'>
            <img className='w-16 h-16' src={logoimg} alt="" />
            <h2 className='text-white text-xl'>Espresso Emporium</h2>
        </div>
    );
};

export default Navbar;