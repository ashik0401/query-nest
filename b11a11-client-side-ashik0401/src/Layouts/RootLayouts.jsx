import React from 'react';
import Navbar from '../Shared/Navbar';
import { Outlet } from 'react-router';
import Footer from '../Shared/Footer';

const RootLayouts = () => {
    return (
        <div className=' '>
            <Navbar />
            <div className='md:px-10  mx-5 md:w-10/12 md:mx-auto'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default RootLayouts;