import { useEffect } from "react"
import { LockClosedIcon, EnvelopeIcon, UserIcon , EyeIcon} from "@heroicons/react/24/solid";
import {FcGoogle } from 'react-icons/fc'
import {FaGithub} from 'react-icons/fa'
import { useState } from "react";
 

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };
     
    useEffect(() => {
         
        document.body.style.overflow = "hidden";
    
        return () => {
           
          document.body.style.overflow = "auto";
        };
      }, []);   

  return (
    <div className="absolute top-0 left-0 flex min-h-screen w-screen justify-center items-center bg-gradient-to-br from-white via-blue-900 to-black">
      <div className="bg-black/50 backdrop-blur-md md:max-w-[1000px] sm:max-w-[700px] text-center p-10 rounded-xl border border-white shadow-2xl">
        <h2 className="text-white text-3xl font-bold mb-2">
          Create an account
        </h2>
        <p className="mb-5 text-sm text-white">
          Already have an account?{" "}
          <a href="#" className="text-blue-400 hover:text-blue-500 underline">
            Login
          </a>
        </p>

        <form method="#" action="#" className="flex flex-col">
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="relative">
              <UserIcon className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="First Name"
                className="p-3 pl-12 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-400"
                required
              />
            </div>
            <div className="relative">
              <input
                type="text"
                placeholder="Last Name"
                className="p-3 pl-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-400"
                required
              />
            </div>
          </div>

          <div className="relative mb-4">
            <EnvelopeIcon className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="email"
              placeholder="Email"
              className="p-3 pl-12 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-400"
              required
            />
          </div>

          <div className="relative mb-4">
            <UserIcon className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Username"
              className="p-3 pl-12 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-400"
            />
          </div>

          <div className="relative mb-4">
            <LockClosedIcon className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className="p-3 pl-12 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-400"
              required
            />
            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 focus:outline-none"
            >
              <EyeIcon className={`w-6 h-6 ${showPassword ? 'text-blue-400' : 'text-gray-400'} hover:text-blue-500 transition-colors`} />
              </button>
            
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between mb-4">
            <div className="flex items-center mb-2 sm:mb-0">
              <input
                type="checkbox"
                className="w-4 h-4 text-blue-500 bg-gray-700 border-gray-600 rounded focus:ring-2 focus:ring-blue-500 focus:ring-offset-gray-800"
              />
              <p className="ml-2 text-white text-sm">
                I agree to the{" "}
                <a href="#" className="text-blue-400 hover:text-blue-500 underline">
                  Terms&Conditions
                </a>
              </p>
            </div>
            <p className="text-white text-sm">
              Already a Member?{" "}
              <a href="/login" className="text-blue-400 hover:text-blue-500 underline">
                Login Here
              </a>
            </p>
          </div>

          <button className="mt-4 p-3 w-full sm:w-1/3 mx-auto cursor-pointer font-semibold bg-gradient-to-r from-blue-500 to-blue-700 hover:scale-105 hover:brightness-110 rounded-lg shadow-lg   text-white">
            Sign up
          </button>

          <div className="grid grid-cols-2 gap-4 mt-4">
            <button className="relative p-3 pl-12 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-400 text-white hover:bg-gray-700 transition-colors">
              <FcGoogle className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2" />
              Google
            </button>
            <button className="relative p-3 pl-12 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400 border border-gray-400 text-white hover:bg-gray-700 transition-colors">
              <FaGithub className="w-6 h-6 absolute left-3 top-1/2 transform -translate-y-1/2" />
              Github
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login