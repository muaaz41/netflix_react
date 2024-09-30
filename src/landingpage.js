import React, { useState, useEffect, useRef } from "react";
import { Link, Navigate } from 'react-router-dom';
import { faTv, faDownload, faBullhorn, faUser } from "@fortawesome/free-solid-svg-icons";
import './landingpage.css';
import ReasonCard from "./ReasonCard";
import FAQ from "./FAQ";
import MovieCard from "./MovieCard";
import Footer from "./Footer";
import  axios from  "axios"

const apiKey = 'da066f6e';
const reasons = [
    { title: "Enjoy on your TV", description: "Watch on Smart TVs, PlayStation, Xbox, Chromecast, Apple TV, and more.", icon: faTv },
    { title: "Downloads to watch offline", description: "Save your favorites movies easily and always have something to watch.", icon: faDownload },
    { title: "Watch everywhere", description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.", icon: faBullhorn },
    { title: "Create profiles for kids", description: "Send kids on adventures with their favorite characters in a space made just for them — free with your membership.", icon: faUser }
];

const LandingPage = () => {
    const [movies, setMovies] = useState([]);
    const [loading, setLoading] = useState(false);
    const scrollContainerRef = useRef(null);

    useEffect(() => {
        const fetchMovies = async () => {
            setLoading(true);
            try {
                const response = await axios.get(`https://www.omdbapi.com/?s=Guardians&apikey=${apiKey}`);
                const data=response.data;
                if (data.Response === 'True') {
                    setMovies(data.Search);
                } else {
                    console.error(data.Error);
                }
            } catch (error) {
                console.error('Error fetching movies:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchMovies();
    }, []);

    // Scroll functions
    const handleScrollLeft = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: -200, behavior: 'smooth' });
        }
    };

    const handleScrollRight = () => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
        }
    };

    const handleMovieClick = (movie) =>{
        Navigate("singleMovie",movie);
    }

    return (
        <div className="text-white flex flex-col items-center">
            <div className="bg-custom h-screen flex flex-col justify-center items-center relative">
                <div className="gradient-overlay"></div>
                <div className="gradient-overlay"></div>
                <div className="text-center mt-28 mb-16 z-10">
                    <h1 className="text-5xl font-bold mb-6">Unlimited movies, TV</h1>
                    <h1 className="text-5xl font-bold mb-6">shows, and more</h1>
                    <h3 className="font-semibold mb-6">Starts at Rs 250. Cancel anytime.</h3>
                    <h3 className="font-semibold mb-4">Ready to watch? Enter your email to create or restart your membership.</h3>
                    <div className="flex justify-center mb-6">
                        <input type="email" placeholder="Email address" className="px-4 py-2 text-black rounded-l-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500" />
                        <button className="bg-red-600 text-white font-bold py-2 px-4 rounded-r-md hover:bg-red-700 transition duration-300 ml-2">Get Started &gt;</button>
                    </div>
                    <div className="text-red-600 absolute top-8 left-12">
                        <h1 className="text-3xl font-semibold mb-6">NETFLIX</h1>
                    </div>
                    <div className="absolute top-8 right-12">
                        <Link to="/signin">
                            <button className="bg-red-600 text-white font-semibold py-2 px-4 rounded transition duration-300 hover:bg-red-800">
                                Sign In
                            </button>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Trending Now Section */}
            <div className="footer-background w-full">
                <div className="w-full pt-10 pb-6">
                    <div className="mt-16 mb-4 max-w-screen-lg mx-auto">
                        <h3 className="text-1xl font-bold mb-4 text-left justify-center">Trending Now</h3>
                    </div>

                    <div className="bg-gray-800 flex flex-col justify-center mx-auto" style={{ maxWidth: '1000px' }}>
                        <div className="flex items-center footer-background">
                            <button
                                onClick={handleScrollLeft}
                                className="scroll-button bg-gray-800 text-white border border-gray-600 rounded h-24 flex items-center justify-center"
                                style={{ marginRight: '5px' }}
                            >
                                <span className="arrow text-xl">&lt;</span>
                            </button>

                            <div className="scroll-container" id="movieScroll" ref={scrollContainerRef} style={{ overflowX: 'auto', whiteSpace: 'nowrap' }}>
                                {loading ? (
                                    <p>Loading...</p>
                                ) : (
                                    movies.map((movie, index) => (
                                        <MovieCard key={index} movie={movie} index={index} onClick={ () => handleMovieClick(movie)} />
                                    ))
                                )}
                            </div>

                            <button
                                onClick={handleScrollRight}
                                className="scroll-button bg-gray-800 text-white border border-gray-600 rounded h-24 flex items-center justify-center"
                                style={{ marginLeft: '10px' }}
                            >
                                <span className="arrow text-xl">&gt;</span>
                            </button>
                        </div>
                    </div>

                    <div className="mt-16 w-full mb-4 max-w-screen-lg mx-auto">
                        <h3 className="text-1xl font-bold mb-4 text-left">More Reasons to Join</h3>
                        <div className="flex flex-wrap justify-center">
                            {reasons.map((reason, index) => (
                                <ReasonCard key={index} title={reason.title} description={reason.description} icon={reason.icon} />
                            ))}
                        </div>
                    </div>

                    <FAQ />

                    <div className="text-center mt-10 mb-6 w-full">
                        <h3 className="font-semibold">Ready to watch? Enter your email to create or restart your membership.</h3>
                        <br />
                        <div className="flex justify-center mb-6">
                            <input type="email" placeholder="Email address" className="px-4 py-2 text-black border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500" />
                            <button className="bg-red-600 text-white font-bold py-2 px-4 rounded-r-md hover:bg-red-700 transition duration-300 ml-2">Get Started &gt;</button>
                        </div>
                    </div>

                    <Footer /> {/* Include the Footer component */}
                </div>
            </div>
        </div>
    );
};

export default LandingPage;