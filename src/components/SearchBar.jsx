import { useState, useEffect } from 'react';
import searchSVG from '../assets/search.svg'
import MovieCardsTray from './MovieCardsTray';

const SearchBar = () => {
    const [searchTerm, setSearchTerm] = useState('')
    const [movies, setMovies] = useState([])
    const searchMovies = async (searchTerm) => {
        const response = await fetch(`https://www.omdbapi.com/?apikey=${import.meta.env.VITE_API_KEY}&s=${searchTerm}`);
        const data = await response.json();
        setMovies(data.Search)
        setSearchTerm('');
    };
    useEffect(() => {
        searchMovies('superman')
    }, [])
    return (
        <>
            <div className='searchBar'>
                <form onSubmit={(e) => {
                    e.preventDefault()
                    searchMovies(searchTerm)
                }}>
                    <div className="flex gap-3 justify-center">
                        <input className='bg-gray-800 rounded-lg text-white md:w-[59rem]' type="text" value={searchTerm} onChange={(e) => { setSearchTerm(e.target.value) }} />
                        <img type='submit' className='hover:cursor-pointer' src={searchSVG} alt="" onClick={() => { searchMovies(searchTerm) }} />
                    </div>
                </form>
            </div>
            <MovieCardsTray movies={movies} />
        </>
    )
}
export default SearchBar