import React from 'react';
import Link from 'next/link';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-6 py-3 flex justify-between items-center">
        <Link href="/" className="font-bold text-xl text-blue-600">
          SoftSkillsAI
        </Link>
        <div className="hidden md:flex space-x-4">
          <Link href="#features" className="text-gray-700 hover:text-blue-600">Features</Link>
          <Link href="#about" className="text-gray-700 hover:text-blue-600">About</Link>
          <Link href="#testimonials" className="text-gray-700 hover:text-blue-600">Testimonials</Link>
        </div>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition duration-300">
          Sign Up
        </button>
      </div>
    </nav>
  );
};

export default Navbar;