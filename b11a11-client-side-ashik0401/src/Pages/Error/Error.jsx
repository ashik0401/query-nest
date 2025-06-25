import React from 'react';
import img from '../../assets/error-4O4.png'
import { Link } from 'react-router';

const Error = () => {
    return (
        <div className=''>
            <div className='flex bg-white flex-col  items-center  space-y-3 p-15 min-h-screen'>
                <div className=''>
                    <img className='w-96 bg-transparent bg-none' src={img}
                        alt="4O4" />
                </div>
                <h2 className='text-2xl md:text-5xl font-bold text-red-500'>4O4 - Page Not Found</h2>
                <p className='font-bold text-lg opacity-80 text-black'>Oops! The page you are looking for was not found.</p>
                <Link to='/'>
                    <a href="#_" class="relative inline-block text-lg group">
                        <span class="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-primary transition-colors duration-300 ease-out border-2 border-base-300 rounded-lg group-hover:text-white">
                            <span class="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
                            <span class="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-base-300 group-hover:-rotate-180 ease"></span>
                            <span class="relative">Home Page</span>
                        </span>
                        <span class="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-base-300 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
                    </a>
                </Link>
            </div>
        </div>
    );
};

export default Error;