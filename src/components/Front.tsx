"use client"
import React, { useState } from "react";

const FrontPage = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  const backgroundImageUrl =
    "https://cdn.pixabay.com/photo/2024/08/13/19/02/ai-generated-8966887_1280.jpg";

  return (
    <div className="flex justify-center items-center h-screen bg-gradient-to-br from-indigo-400 to-purple-400 p-5">
      <div className={`flex w-[800px] h-[500px] bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-500 ${isLogin ? "order-2" : "order-1"}`}>
        <div
          className="flex-1 bg-cover bg-center bg-no-repeat relative"
          style={{ backgroundImage: `url(${backgroundImageUrl})` }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex flex-col justify-center items-center text-white text-center p-5">
            <h1 className="text-4xl">OrateMe</h1>
            <p className="text-lg mt-2">Master the Art of Speaking</p>
          </div>
        </div>
        <div className="flex-1 p-10 flex flex-col justify-center">
          {isLogin ? (
            <form>
              <h2 className="text-2xl mb-5 text-gray-800">Login</h2>
              <div className="mb-4">
                <label className="block mb-1 text-sm text-gray-600">Email</label>
                <input type="email" required className="w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <div className="mb-4">
                <label className="block mb-1 text-sm text-gray-600">Password</label>
                <input type="password" required className="w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <div className="flex justify-between items-center mb-4">
                <div className="flex items-center">
                  <input type="checkbox" id="rememberMe" className="mr-2" />
                  <label htmlFor="rememberMe" className="text-sm text-gray-600">Remember Me</label>
                </div>
                <p className="text-sm text-gray-600">
                  <a href="#" className="text-indigo-400 hover:underline">Forgot Password?</a>
                </p>
              </div>
              <button type="submit" className="bg-indigo-400 text-white rounded-md p-2 mt-2">Login</button>
              <p className="mt-4 text-sm text-gray-600">
                Don&apos;t have an account? <span onClick={toggleForm} className="text-indigo-400 cursor-pointer">Register</span>
              </p>
            </form>
          ) : (
            <form>
              <h2 className="text-2xl mb-5 text-gray-800">Register</h2>
              <div className="flex gap-2 mb-4">
                <input type="text" className="flex-1 p-2 border border-gray-300 rounded-md" placeholder="First Name" />
                <input type="text" className="flex-1 p-2 border border-gray-300 rounded-md" placeholder="Last Name" />
              </div>
              <div className="mb-4">
                <label className="block mb-1 text-sm text-gray-600">Email</label>
                <input type="email" required className="w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <div className="mb-4">
                <label className="block mb-1 text-sm text-gray-600">Password</label>
                <input type="password" required className="w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <div className="mb-4">
                <label className="block mb-1 text-sm text-gray-600">Confirm Password</label>
                <input type="password" required className="w-full p-2 border border-gray-300 rounded-md" />
              </div>
              <button type="submit" className="bg-indigo-400 text-white rounded-md p-2 mt-2">Register</button>
              <p className="mt-4 text-sm text-gray-600">
                Already have an account? <span onClick={toggleForm} className="text-indigo-400 cursor-pointer">Login</span>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};

export default FrontPage;
