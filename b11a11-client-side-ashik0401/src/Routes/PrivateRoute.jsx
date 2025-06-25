
import { Navigate, useLocation } from 'react-router';

import useAuth from '../hooks/useAuth';


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation();


    if (loading) {
        return <div className='flex justify-center min-h-screen items-center'>
            <span className="loading loading-ring loading-xl "></span>
        </div>
    }

    if (user) {
        return children;
    }

    return <Navigate state={location.pathname}
        to="/login" replace />;
};

export default PrivateRoute;