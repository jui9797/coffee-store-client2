import React from 'react';
import bannerimg from '../assets/images/more/3.png'

const Banner = () => {
    return (
        <div className='md:mb-20'>
            <div
                className="hero min-h-screen"
                style={{
                    backgroundImage: `url(${bannerimg})`,
                    backgroundPosition:'center',
                    backgroundSize:'cover'
                }}>
                <div className="hero-overlay bg-opacity-30"></div>
                <div className="hero-content text-neutral-content text-center">
                    <div className="max-w-2xl">
                        <h1 className="mb-5 text-3xl font-bold">Would you like a Cup of Delicious Coffee?</h1>
                        <p className="mb-5">
                        It's coffee time - Sip & Savor - Relaxation in every sip! Get the nostalgia back!! Your companion of every moment!!! Enjoy the beautiful moments and make them memorable.
                        </p>
                        <button className="btn text-black bg-[#E3B577]">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;