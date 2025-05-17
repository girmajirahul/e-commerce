import React, { useState } from 'react';

export default function Signup() {
  const [showSignup, setShowSignup] = useState(false);

  const toggleForm = () => setShowSignup((prev) => !prev);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 shadow-md rounded-lg">
        <div className="text-blue-900 font-bold text-2xl text-center mb-6">
          <h3>{showSignup ? 'Create A New Account' : 'Already a member? Login'}</h3>
        </div>

        <form method="post" className="space-y-4">
          {showSignup && (
            <>
              <div className="flex flex-col">
                <label htmlFor="username" className="mb-1 font-medium">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter username"
                  className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="fullname" className="mb-1 font-medium">Full Name</label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  placeholder="Enter full name"
                  className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </>
          )}

          <div className="flex flex-col">
            <label htmlFor="email" className="mb-1 font-medium">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Enter email"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1 font-medium">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="Enter password"
              className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
            >
              {showSignup ? 'Sign Up Now' : 'Login'}
            </button>
          </div>

          <div className="text-center">
            <h4>
              {showSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
              <button
                type="button"
                onClick={toggleForm}
                className="text-blue-800 font-semibold underline ml-1"
              >
                {showSignup ? 'Login' : 'Sign up'}
              </button>
            </h4>
          </div>
        </form>
      </div>
    </div>
  );
}
