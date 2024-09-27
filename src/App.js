import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './landingpage';
import SignInPage from './signin';
import SignUp from './signup'; 
import MoviesPage from './movies';
import MovieDetail from './MovieDetails'; 

const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignInPage />} />
                <Route path="/movies" element={<MoviesPage />} />
                <Route path="/movies/:id" element={<MovieDetail />} />

            </Routes>
        </Router>
    );
};
export default App;