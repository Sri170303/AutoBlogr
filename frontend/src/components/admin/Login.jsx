import React, { useState } from 'react'
import { useAppContext } from '../../../context/AppContext';
import toast from 'react-hot-toast';

const Login = () => {
    const {axios, setToken} = useAppContext();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
          const {data} = await axios.post('/api/admin/login', {email, password});
          if (data.success) {
            setToken(data.token);
            localStorage.setItem('adminToken', data.token);
            axios.defaults.headers.common['Authorization'] = data.token;
          }
          else {
            toast.error(data.message);
          }
        }
        catch (error) {
            toast.error(error.message);
        }
    }
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-50">
      <div className="bg-white shadow-lg p-8 rounded-xl w-80 sm:w-96 border border-purple-100">
        <h2 className="text-2xl font-semibold text-center">
          <span className="text-primary font-bold">Admin</span> <span className="text-black">Login</span>
        </h2>
        <p className="text-center text-sm text-gray-500 mt-1">
          Enter your credentials to access the admin panel
        </p>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-4">
          <div>
            <label className="block text-sm mb-1 text-gray-700">Email</label>
            <input
                onChange={ e => setEmail(e.target.value)}
                value={email}
              type="email"
              placeholder="admin@example.com"
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <div>
            <label className="block text-sm mb-1 text-gray-700">Password</label>
            <input
                onChange={ e => setPassword(e.target.value)}
                value={password}
              type="password"
              placeholder="••••••••"
              className="w-full px-4 py-2 border border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-primary"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-primary hover:bg-primary/80 text-white font-medium py-2 rounded-md transition duration-200"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login