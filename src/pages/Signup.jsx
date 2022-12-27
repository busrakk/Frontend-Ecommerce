import axios from "axios";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Signup = () => {

  const [registerInput, setRegister] = useState({
    name: "",
    email: "",
    password: "",
    error_list: []
  });

  const handleInput = (e) => {
    e.presist();
    setRegister({...registerInput, [e.target.name]: e.target.value});
  }

  const registerSubmit = (e) => {
    e.preventDefault();

    const data = {
      name: registerInput.name,
      email: registerInput.email,
      password: registerInput.password,
    }

    axios.get('/sanctum/csrf-cookie').then(response => {
      axios.post(`/api/register`, data).then(res => {
        if(res.data.status === 200)
        {

        }
        else
        {
          setRegister({...registerInput, error_list: res.data.validation_errors});
        }
      });
    });
    

  }

  return (
    <div>
      <section className="bg-white mt-20">
        <div className="container flex items-center justify-center min-h-screen px-6 mx-auto">
          
          <form onSubmit={registerSubmit} className="w-full max-w-md">

            <div className="relative flex items-center mt-8">
              <input
                onChange={handleInput}
                value={registerInput.name}
                type="text"
                className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Username"
              />
              <span>{registerInput.error_list.name}</span>
            </div>


            <div className="relative flex items-center mt-6">
              <input
                onChange={handleInput}
                value={registerInput.email}
                type="email"
                className="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Email address"
              />
              <span>{registerInput.error_list.email}</span>
            </div>

            <div className="relative flex items-center mt-4">
              <input
                onChange={handleInput}
                value={registerInput.password}
                type="password"
                className="block w-full px-10 py-3 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Password"
              />
              <span>{registerInput.error_list.password}</span>
            </div>

            <div className="mt-6">
              <button type="submit" className="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Sign Up
              </button>

              <div className="mt-6 text-center ">
                <NavLink to="../login" className="text-sm text-blue-500 hover:underline">
                  Already have an account?
                </NavLink>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default Signup;
