import React from 'react';
import { useNavigate } from 'react-router-dom';
const Moviepost = ({ movie, index }) => {
    const navigate = useNavigate();
    return (
        <div className="movie-card bg-gray-900 relative p-0 rounded-lg mx-2" onClick={() => navigate(`/movies/${movie.imdbID}`)}>
            <img src={movie.Poster} alt={movie.Title} className="w-full h-60 object-cover rounded-lg" />
            <span className="absolute top-1 right-1 text-red-700 font-bold text-xl md:text-sm lg:text-2xl">{index + 1}</span>
        </div>
    );
};

export default Moviepost;