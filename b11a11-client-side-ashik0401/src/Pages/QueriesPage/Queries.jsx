import React from 'react';
import AddQueries from './AddQueries';
import Navbar from '../../Shared/Navbar';
import Footer from '../../Shared/Footer';
import { Outlet } from 'react-router';
import ScrollToTop from '../../Shared/ScrollToTop';

const Queries = () => {
    return (
        <div className=' '>
            <ScrollToTop />
            <Navbar />
            <div className='md:px-10  mx-5 md:w-10/12 md:mx-auto'>
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};

export default Queries;