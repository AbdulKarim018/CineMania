import MovieCard from './MovieCard';

const MovieCardsTray = ({ movies }) => {
    return (
        <div className="tray">
            {movies?.length > 0 ? (
                <div className="moviecards md:flex md:flex-wrap">
                    {movies.map((singleMovie) => <MovieCard movie={singleMovie} />)}
                </div>
            ) : (
                <div className="no-movies">
                    <h2 className='text-center text-2xl md:text-6xl text-white pt-[15rem] pb-[32rem]'>No Movies Found!</h2>
                </div>
            )}
        </div>
    )
}
export default MovieCardsTray