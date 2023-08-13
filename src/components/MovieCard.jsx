import React from 'react';

const MovieCard = ({ movie: { imdbID, Year, Poster, Title, Type } }) => {
    return (
        <div key={imdbID} className="xl:w-1/4 md:w-1/2 p-4">
            <div className="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
                <img
                    className="h-full w-full rounded-lg object-cover object-center mb-6"
                    src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"}
                    alt={Title + ' Poster'} />
                <h3 className="tracking-widest text-indigo-400 text-xs font-medium title-font">
                    {Type.toUpperCase()}
                </h3>
                <h2 className="text-lg text-white font-medium title-font mb-1">
                    {Title}
                </h2>
                <p className='text-white '>Year Of Release: {Year}</p>
            </div>
        </div>

    );
}

export default MovieCard;












{/* <div className="movie" key={imdbID}>
            <div className='text-white'>
                <p className='text-white'>{Year}</p>
            </div>

            <div className='relative overflow-hidden'>
                <img height={400} width={400} className="h-40 rounded w-full object-cover object-center mb-6" src={Poster !== "N/A" ? Poster : "https://via.placeholder.com/400"} alt={Title} />
                <div className='bg-gray-600 rounded-lg absolute bottom-0 w-full'>
                    <span className='font-extrabold font-mono text-gray-900 '>{Type}</span>
                    <h3 className='font-semibold font-serif text-yellow-600'>{Title}</h3>
                </div>
            </div>
        </div> */}