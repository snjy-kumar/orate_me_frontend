"use client"

import React, { useState, FormEvent } from "react";

const ResetPassword: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    // Simulate a password reset request
    if (email) {
      setSuccess(true);
      setError("");
      // Add your password reset logic here (e.g., API call)
    } else {
      setError("Please enter your email address.");
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-800">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl mb-6 text-gray-800 text-center">Reset Your Password</h2>
        {success ? (
          <p className="text-green-600 text-center">A reset link has been sent to your email.</p>
        ) : (
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block mb-1 text-sm text-gray-600">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full p-2 border border-gray-300 rounded-md"
              />
              {error && <p className="text-red-500 text-sm mt-1">{error}</p>}
            </div>
            <button type="submit" className="w-full bg-indigo-400 text-white rounded-md p-2 mt-4">
              Send Reset Link
            </button>
            <p className="mt-4 text-sm text-gray-600 text-center">
              Remembered your password? <a href="/login" className="text-indigo-400 hover:underline">Login</a>
            </p>
          </form>
        )}
      </div>
    </div>
  );
};

export default ResetPassword;
