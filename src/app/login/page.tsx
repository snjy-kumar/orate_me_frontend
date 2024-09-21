"use client";
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaGoogle, FaGithub } from 'react-icons/fa';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt with:', email, password);
  };

  if (!isClient) {
    return null; // or a loading spinner
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-slate-500 text-gray-100">
      <div className="w-full max-w-md p-8 space-y-8 bg-gray-500 rounded-xl shadow-2xl">
        <div className="text-center">
          <h1 className="text-3xl font-bold">Welcome Back</h1>
          <p className="text-gray-400">Enter your credentials to access your account</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <input
              id="email"
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="password" className="text-sm font-medium">Password</label>
            <input
              id="password"
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-600 hover:bg-blue-700 rounded-md transition duration-200 ease-in-out"
          >
            Sign In
          </button>
        </form>

        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <div className="w-full border-t border-gray-600"></div>
          </div>
          <div className="relative flex justify-center text-sm">
            <span className="px-2 bg-gray-800 text-gray-400">Or continue with</span>
          </div>
        </div>

        <div className="flex space-x-4">
          <button className="flex-1 flex items-center justify-center py-2 bg-red-600 hover:bg-red-700 rounded-md transition duration-200 ease-in-out">
            <FaGoogle className="mr-2" /> Google
          </button>
          <button className="flex-1 flex items-center justify-center py-2 bg-gray-700 hover:bg-gray-600 rounded-md transition duration-200 ease-in-out">
            <FaGithub className="mr-2" /> GitHub
          </button>
        </div>

        <p className="text-center text-sm text-gray-400">
          Don&apos;t have an account?{' '}
          <Link href="/signup" className="text-blue-400 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </main>
  );
}

