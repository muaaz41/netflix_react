import React from 'react';

const MovieCard = ({ movie, index }) => {
    return (
        <div className="movie-card bg-gray-900 relative p-0 rounded-lg mx-2">
            <img src={movie.Poster} alt={movie.Title} className="w-full h-60 object-cover rounded-lg" />
            <span className="absolute top-1 left-1 text-white bg-red-600 px-1 rounded text-xs md:text-sm lg:text-base">TOP 10</span>
            <span className="absolute bottom-1 left-0 right-0 text-center bg-red-600 text-white text-xs md:text-sm lg:text-base">Recently Added</span>
            <span className="absolute top-1 right-1 text-white font-bold text-xs md:text-sm lg:text-base">{index + 1}</span>
        </div>
    );
};

export default MovieCard;