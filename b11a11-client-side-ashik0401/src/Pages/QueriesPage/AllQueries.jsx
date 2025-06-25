import { Link, useLoaderData } from 'react-router';
import { useState, useEffect } from 'react';

const AllQueries = () => {
    const data = useLoaderData();
    const [searchText, setSearchText] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [gridCols, setGridCols] = useState(3);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setFilteredData(data);
        setLoading(false);
    }, [data]);

    const handleSearch = () => {
        const filtered = data.filter(query =>
            query.productName.toLowerCase().includes(searchText.toLowerCase())
        );
        setFilteredData(filtered);
    };

    useEffect(() => {
        handleSearch();
    }, [searchText]);

    if (loading) {
        return (
            <div className="flex justify-center items-center mt-20">
                <span className="loading loading-ring loading-xl"></span>
            </div>
        );
    }

    return (
        <div className="mt-5 min-h-[600px]">
            <div className="mb-6 w-full mx-auto flex gap-2 items-center">
                <div className='md:w-8/12 mx-auto flex justify-center gap-2'>
                    <input
                        type="text"
                        placeholder="Search by product name"
                        value={searchText}
                        onChange={(e) => setSearchText(e.target.value)}
                        className="input input-bordered w-full"
                    />
                    <button
                        onClick={handleSearch}
                        className="btn bg-base-300 text-white"
                    >
                        Search
                    </button>
                </div>
                <div className="border rounded-md border-gray-300 p-2 hidden md:block">
                    <div>
                        <h2 className='text-2xl font-semibold text-center mb-1'>Layouts</h2>
                    </div>
                    <div className="hidden sm:flex gap-2">
                        <button
                            onClick={() => setGridCols(1)}
                            className={`btn ${gridCols === 1 ? 'btn bg-base-300 text-white' : 'bg-white'}`}
                        >
                            1
                        </button>
                        <button
                            onClick={() => setGridCols(2)}
                            className={`btn ${gridCols === 2 ? 'btn bg-base-300 text-white' : 'bg-white'}`}
                        >
                            2
                        </button>
                        <button
                            onClick={() => setGridCols(3)}
                            className={`btn ${gridCols === 3 ? 'btn bg-base-300 text-white' : 'bg-white'}`}
                        >
                            3
                        </button>
                    </div>
                </div>
            </div>

            <div className={`grid grid-cols-1 md:grid-cols-${gridCols} gap-5`}>
                {filteredData.map((query, index) => (
                    <div
                        key={index}
                        className={`w-full ${gridCols === 1 ? 'max-w-md mx-auto' : ''}`}
                    >
                        <div className="card bg-base-100 shadow-sm h-[600px] sm:h-[680px] md:h-[500px] lg:h-[600px] overflow-hidden">
                            <figure className="h-full">
                                <img
                                    className="w-full  object-cover"
                                    src={query.imageUrl}
                                    alt={query.productBrand}
                                />
                            </figure>
                            <div className="card-body h-3/5 flex flex-col justify-between px-4 py-3 text-sm">
                                <div>
                                    <h2 className="text-lg sm:text-xl font-semibold mb-1">
                                        {query.productName}
                                    </h2>
                                    <p className="text-gray-700"><strong>Brand:</strong> {query.productBrand}</p>
                                    <p className="truncate"><strong>Title:</strong> {query.queryTitle}</p>
                                    <p className="line-clamp-2"><strong>Reason:</strong> {query.reason}</p>
                                </div>
                                <div className="flex justify-between items-center gap-3 mt-2">
                                    <div className="badge rounded-md border-none h-full font-medium w-[50%]">
                                        <span>Total</span> {query.recommendationCount || 0}
                                    </div>
                                    <Link
                                        to={`/queries/${query._id}`}
                                        className="badge hover:bg-base-300 rounded-md border-none h-full hover:text-white btn text-xs sm:text-sm"
                                    >
                                        Recommend
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AllQueries;
