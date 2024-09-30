import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import './movies.css'; 

const API_KEY = 'da066f6e'; 

const MovieDetail = () => {
    const { id } = useParams(); 
    const [movie, setMovie] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchMovieDetail = async () => {
            const response = await axios.get(`https://www.omdbapi.com/?i=${id}&apikey=${API_KEY}`);
            setMovie(response.data);
            setLoading(false);
        };

        fetchMovieDetail();
    }, [id]);

    if (loading) return <div>Loading...</div>;
    if (!movie) return <div>Movie not found.</div>;

    return (
        <div className="movie-detail p-4">
            <h1 className="text-3xl font-bold mb-4">{movie.Title} ({movie.Year})</h1>
            <table className="movie-table">
                <tbody>
                    <tr>
                        <th className='text-black'>Director</th>
                        <td>{movie.Director}</td>
                    </tr>
                    <tr>
                        <th className='text-black'>Genre</th>
                        <td>{movie.Genre}</td>
                    </tr>
                    <tr>
                        <th className='text-black'>Actors</th>
                        <td>{movie.Actors}</td>
                    </tr>
                    <tr>
                        <th className='text-black'>Plot</th>
                        <td>{movie.Plot}</td>
                    </tr>
                    <tr>
                        <th className='text-black'>Rating</th>
                        <td>{movie.imdbRating}</td>
                    </tr>
                    <tr>
                        <th className='text-black'>Runtime</th>
                        <td>{movie.Runtime}</td>
                    </tr>
                    <tr>
                        <th className='text-black'>Release Date</th>
                        <td>{movie.Released}</td>
                    </tr>
                </tbody>
            </table>
            {movie.Poster && <img src={movie.Poster} alt={movie.Title} className="movie-poster" />}
        </div>
    );
};

export default MovieDetail;