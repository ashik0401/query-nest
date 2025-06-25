import React, { useEffect, useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link } from 'react-router';
import { FaArrowRight } from 'react-icons/fa';
import useAxiosSecure from '../../hooks/useAxiosSecure';

const ForMe = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const [myQueries, setMyQueries] = useState([]);
    const [allRecommendations, setAllRecommendations] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            if (!user?.email) return;
            setLoading(true);

            try {
                const [queriesRes, recsRes] = await Promise.all([
                    axiosSecure.get(`/my-queries/${user.email}`),
                    axiosSecure.get(`/recommendations-for-user/${user.email}`)
                ]);

                setMyQueries(Array.isArray(queriesRes.data) ? queriesRes.data : []);
                setAllRecommendations(Array.isArray(recsRes.data) ? recsRes.data : []);
            } catch (error) {
                console.error('Error fetching data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, [user?.email, axiosSecure]);

    const myQueryIds = myQueries.map(q => q._id.toString());
    const recommendationsForMe = allRecommendations.filter(rec => myQueryIds.includes(rec.queryId));

    if (loading) {
        return (
            <div className="flex justify-center items-center mt-20">
                <span className="loading loading-ring loading-xl"></span>
            </div>
        );
    }

    return (
        <div className="md:min-h-[600px] min-h-[500px]">
            <div className="max-w-6xl mt-5 mx-auto md:p-4 shadow-md rounded-2xl">
                <h2 className="md:text-4xl font-bold mb-4 text-sm Cursive text-primary">[💬] Recommendations For Me</h2>
                {recommendationsForMe.length === 0 ? (
                    <p>No recommendations found for your queries.</p>
                ) : (
                    <div className="overflow-x-auto">
                        <table className="min-w-full bg-white border rounded shadow">
                            <thead>
                                <tr className="bg-gray-200 text-left">
                                    <th className="p-3">Product Name</th>
                                    <th className="p-3 text-center">Recommendation</th>
                                    <th className="p-3 text-center">Recommender</th>
                                    <th className="p-3 text-center">Date</th>
                                    <th className="p-3">View</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recommendationsForMe.map(rec => {
                                    const query = myQueries.find(q => q._id.toString() === rec.queryId);
                                    return (
                                        <tr key={rec._id} className="border-t hover:bg-gray-50">
                                            <td className="p-3 font-semibold">{query?.productName || 'Untitled'}</td>
                                            <td className="p-3 text-center">{rec.recommendedProductName}</td>
                                            <td className="p-3 text-center">{rec.recommenderName}</td>
                                            <td className="p-3 text-sm text-center">{new Date(rec.createdAt).toLocaleString()}</td>
                                            <td className="p-3">
                                                <Link to={`/queries/${query?._id}`} className="text-blue-600 hover:underline flex items-center gap-1">
                                                    View <FaArrowRight />
                                                </Link>
                                            </td>
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
};

export default ForMe;
