import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Moviepost from './Movieposter'; 
import './movies.css';

const API_KEY = 'da066f6e'; 

const MoviesPage = () => {
    const [moviesData, setMoviesData] = useState({});
    const genres = ['action', 'comedy', 'kids'];

    useEffect(() => {
        const fetchMoviesByGenre = async (genre) => {
            const response = await axios.get(`http://www.omdbapi.com/?s=${genre}&apikey=${API_KEY}`);
            return response.data.Search || []; 
        };

        const fetchMovies = async () => {
            const moviesPromises = genres.map((genre) => fetchMoviesByGenre(genre));
            const results = await Promise.all(moviesPromises);
            const moviesObject = genres.reduce((acc, genre, index) => {
                acc[genre] = results[index];
                return acc;
            }, {});
            setMoviesData(moviesObject);
        };

        fetchMovies();
    }, []);

    return (
        <div className="p-4">
            <h1 className="text-3xl font-bold mb-4 text-center underline text-red-800">NETFLIX MOVIES</h1>
            {Object.entries(moviesData).map(([genre, movieList]) => (
                <div key={genre} className="mb-4">
                    <h2 className="text-xl font-bold mb-2 text-left">{genre.charAt(0).toUpperCase() + genre.slice(1)}</h2>
                    <div className="scroll-container">
                        {movieList.length === 0 ? (
                            <p>No movies found.</p>
                        ) : (
                            movieList.map((movie, index) => (
                                <Moviepost key={movie.imdbID} movie={movie} index={index} />
                            ))
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default MoviesPage;