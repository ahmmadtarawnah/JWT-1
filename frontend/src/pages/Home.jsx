import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await fetch("http://localhost:5173/api/logout", {
        method: "POST",
        credentials: "include",
      });
      if (response.ok) {
        navigate("/login");
      }
    } catch (error) {
      console.error("Error during logout:", error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-indigo-500 to-purple-700">
      <h1 className="text-4xl font-extrabold text-white mb-4">
        Welcome to Our Website
      </h1>
      <p className="text-lg text-white mb-8">Your journey begins here.</p>
      <div className="flex space-x-6">
        <a
          href="/login"
          className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors duration-200 transform hover:scale-105"
        >
          Login
        </a>
        <a
          href="/signup"
          className="bg-teal-500 text-white px-6 py-3 rounded-lg hover:bg-teal-600 transition-colors duration-200 transform hover:scale-105"
        >
          Sign Up
        </a>
        <a
          href="/profile"
          className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700 transition-colors duration-200 transform hover:scale-105"
        >
          Profile
        </a>
        <button
          onClick={handleLogout}
          className="bg-red-600 text-white px-6 py-3 rounded-lg hover:bg-red-700 transition-colors duration-200 transform hover:scale-105"
        >
          Logout
        </button>
      </div>
    </div>
  );
};

export default Home;
