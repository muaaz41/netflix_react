import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; 

const SignUp = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("Passwords don't match");
      return;
    }

    const newUser = { email, password };

    try {
      const response = await axios.post('http://localhost:5000/signup', newUser);
      console.log(response.data); // Log the response from the server
      alert('User registered successfully!'); 
      navigate('/signin'); 
    } catch (error) {
      alert(error.response?.data?.message || 'An error occurred'); 
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center bg-[url('https://assets.nflxext.com/ffe/siteui/vlv3/04bef84d-51f6-401e-9b8e-4a521cbce3c5/null/PK-en-20240903-TRIFECTA-perspective_f209a29a-799d-4c4c-9190-b2a410cbfa06_large.jpg')]">
      <h1 className="text-white text-4xl mb-6">Sign Up</h1>
      <form className="bg-black bg-opacity-70 p-6 rounded-lg w-80" onSubmit={handleSignUp}>
        <div className="mb-4">
          <label className="block text-white text-sm mb-2">Email or mobile number</label>
          <input
            type="text"
            className="w-full py-2 px-4 rounded-md text-black outline-none focus:ring-2 focus:ring-red-500"
            placeholder="example@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm mb-2">Password</label>
          <input
            type="password"
            className="w-full py-2 px-4 rounded-md outline-none text-black focus:ring-2 focus:ring-red-500"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block text-white text-sm mb-2">Confirm Password</label>
          <input
            type="password"
            className="w-full py-2 px-4 rounded-md text-black outline-none focus:ring-2 focus:ring-red-500"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-red-600 text-white py-2 rounded-md hover:bg-red-700 transition-colors"
        >
          Sign Up
        </button>
        <button
          type="button"
          className="text-white mt-4 text-center block hover:underline"
          onClick={() => navigate('/signin')}
        >
          Already have an account? Sign In
        </button>
      </form>
    </div>
  );
};

export default SignUp;