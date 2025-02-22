import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');
        try {
            const response = await fetch('http://localhost:5000/api/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                credentials: 'include',
                body: JSON.stringify({ email, password })
            });

            const data = await response.json();
            if (!response.ok) {
                setError(data.message || 'Login failed');
            } else {
                navigate('/');
            }
        } catch (err) {
            setError('An error occurred during login');
        }
    };

    return (
      <div className="min-h-screen flex items-center justify-center bg-indigo-50">
        <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md border border-indigo-100">
          <h1 className="text-2xl font-bold mb-6 text-center text-indigo-900">
            Login
          </h1>

          {error && <p className="text-rose-500 text-center mb-4">{error}</p>}

          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="email" className="block mb-1 text-indigo-800">
                Email
              </label>
              <input
                id="email"
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border border-indigo-200 rounded-md p-2 
                       focus:outline-none focus:ring-2 focus:ring-emerald-400 
                       focus:border-emerald-400 bg-indigo-50"
                required
              />
            </div>

            <div className="mb-6">
              <label htmlFor="password" className="block mb-1 text-indigo-800">
                Password
              </label>
              <input
                id="password"
                type="password"
                placeholder="Enter your password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border border-indigo-200 rounded-md p-2 
                       focus:outline-none focus:ring-2 focus:ring-emerald-400 
                       focus:border-emerald-400 bg-indigo-50"
                required
              />
            </div>

            <button
              type="submit"
              className="w-full bg-emerald-500 text-white p-3 rounded-md 
                     hover:bg-emerald-600 transition-colors duration-300 
                     font-medium shadow-sm"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-center text-indigo-700">
            Don't have an account?{" "}
            <a
              href="/signup"
              className="text-emerald-600 hover:text-emerald-700 font-medium"
            >
              Sign Up
            </a>
          </p>
        </div>
      </div>
    );
};

export default Login;
