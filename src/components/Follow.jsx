import React from 'react';
import grid1 from '../assets/images/cups/Rectangle 10.png'
import grid2 from '../assets/images/cups/Rectangle 11.png'
import grid3 from '../assets/images/cups/Rectangle 12.png'
import grid4 from '../assets/images/cups/Rectangle 13.png'
import grid5 from '../assets/images/cups/Rectangle 14.png'
import grid6 from '../assets/images/cups/Rectangle 15.png'
import grid7 from '../assets/images/cups/Rectangle 16.png'
import grid8 from '../assets/images/cups/Rectangle 9.png'

const Follow = () => {
    return (
        <div className='md:my-20 my-10'>
            <h2 className='text-2xl font-bold text-center mb-10'>Follow on Instagram</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 w-2/3 mx-auto'>
                <div>
                    <img src={grid1} alt="" />
                </div>
                <div>
                <img src={grid2} alt="" />
                </div>
                <div>
                <img src={grid3} alt="" />
                </div>
                <div>
                <img src={grid4} alt="" />
                </div>
                <div>
                <img src={grid5} alt="" />
                </div>
                <div>
                <img src={grid6} alt="" />
                </div>
                <div>
                <img src={grid7} alt="" />
                </div>
                <div>
                <img src={grid8} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Follow;