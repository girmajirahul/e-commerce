import React, { useState } from 'react';
import Alert from './Alert';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate()
  const [showSignup, setShowSignup] = useState(false);
  const [formData, setformData] = useState({
    username: '',
    fullname: '',
    email: '',
    password: '',
  });
  const [alert, setAlert] = useState({ message: '', type: '' });
  const handleChange = (e) => {
    setformData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const endpoint = showSignup ? '/signup' : '/login';
    try {
      const response = await fetch(`http://localhost:3000/user${endpoint}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json()
      // alert(result.message || "Success");
      if (response.ok) {
        if (showSignup) {
          setAlert({ message: result.message || 'Signup Successful !', type: 'success' })
          setShowSignup(false)
        }
        else {
          localStorage.setItem('user', JSON.stringify(result.user));
          setTimeout(() => {
            navigate('/');
          }, 1000)
          setAlert({ message: result.message || 'Login Successful !', type: 'success' })
        }
        // setAlert({message:result.message || 'Success !' , type:'success'})
      }
      else {
        setAlert({ message: result.message || 'Failed  !', type: 'error' })
      }

    } catch (err) {
      console.log("error submit form ", err)
      setAlert({ message: 'Something Went Wrong!', type: 'error' })
    }

  }
  

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white p-8 shadow-md rounded-lg">
        {alert.message && (
          <Alert
            message={alert.message}
            type={alert.type}
            onClose={() => setAlert({ message: '', type: '' })}
          />
        )}
        <div className="text-blue-900 font-bold text-2xl text-center mb-6">
          <h3>{showSignup ? 'Create A New Account' : 'Already a member? Login'}</h3>
        </div>

        <form method="post" onSubmit={handleSubmit} className="space -y-4">
          {showSignup ? (
            <>
              <div className="flex flex-col">
                <label htmlFor="username" className="mb-1 font-medium">Username</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="Enter username"
                  value={formData.username}
                  onChange={handleChange}
                  className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="fullname" className="mb-1 font-medium">Full Name</label>
                <input
                  type="text"
                  name="fullname"
                  id="fullname"
                  value={formData.fullname}
                  onChange={handleChange}
                  placeholder="Enter full name"
                  className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 font-medium">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
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
                  value={formData.password}
                  onChange={handleChange}
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
              <div className="text-center mt-3">
                <h4>Already have account 
                <button
                  type="button"
                  onClick={() => setShowSignup(false)}
                  className="text-blue-800 font-semibold ml-1 hover:underline cursor-pointer"
                >
                  Login
                </button>
                </h4>
              </div>
            </>
          ) : (
            <>
              <div className="flex flex-col">
                <label htmlFor="email" className="mb-1 font-medium">Email</label>
                <input
                  type="text"
                  name="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Enter email"
                  className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="flex flex-col mt-2">
                <label htmlFor="password" className="mb-1 font-medium">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Enter password"
                  className="border border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

              <div className="pt-4">
                <button
                  type="submit"
                  className="w-full bg-blue-900 hover:bg-blue-800 text-white font-semibold py-2 px-4 rounded-full transition duration-300"
                >
                  Login
                </button>

              </div>
              <div className='text-center mt-3'>
                <h4>
                  Don't have an account
                  <button
                    type="button"
                    onClick={()=>setShowSignup(true)}
                    className="text-blue-800 font-semibold hover:underline cursor-pointer ml-1"
                  >
                    Sing up
                  </button>
                </h4>
              </div>
            </>
          )}
        </form>
      </div>
    </div>
  );
}
