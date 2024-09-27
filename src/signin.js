import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import axios from 'axios'; 

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleSignIn = async (event) => {
    event.preventDefault();

    const userCredentials = { email, password };

    try {
      const response = await axios.post('http://localhost:5000/signin', userCredentials);
      console.log(response.data); 
      alert('Sign in successful!'); 
      navigate('/movies'); 
    } catch (error) {
      alert(error.response?.data?.message || 'An error occurred during sign in');
    }
  };

  const handleSignUp = () => {
    navigate('/signup'); // Navigate to the sign-up page
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/PK-en-20240903-TRIFECTA-perspective_f209a29a-799d-4c4c-9190-b2a410cbfa06_large.jpg')]">
      <form className="bg-black bg-opacity-70 p-6 rounded-lg w-80" onSubmit={handleSignIn}>
        <h1 className="text-white text-4xl mb-6">Sign In</h1>
        <div className="mb-4">
          <label className="block text-white text-sm mb-2">Email or mobile number</label>
          <input
            type="text"
            className="w-full flex-1 py-2 px-4 text-black rounded-md outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Enter email or phone number"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm mb-2">Password</label>
          <input
            type="password"
            className="w-full py-2 px-4 text-black rounded-md outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors"
        >
          Sign In
        </button>
        <div className="text-center my-4 text-white">OR</div>
        <button
          type="button"
          className="w-full bg-white bg-opacity-20 text-white py-2 rounded-md hover:bg-opacity-30 transition-colors"
        >
          Use a Sign-In Code
        </button>

        <button
          type="button"
          className="text-white mt-4 text-center block hover:underline"
          onClick={() => {}}
        >
          Forgot password?
        </button>

        <div className="flex items-center mt-4 text-white">
          <input
            type="checkbox"
            id="rememberMe"
            className="mr-2 focus:ring-red-500"
          />
          <label htmlFor="rememberMe">Remember me</label>
        </div>

        <p className="mt-4 text-white">New to Netflix?</p>
        <button
          type="button"
          className="mt-6 w-full py-2 rounded-md bg-gradient-to-r from-purple-500 to-red-500 text-white font-semibold hover:scale-105 transition-transform duration-300 shadow-lg"
          onClick={handleSignUp} 
        >
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignIn;