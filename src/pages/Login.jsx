import React from "react";
import { NavLink } from "react-router-dom";

const Login = () => {
  return (
    <div>
      <section class="bg-white mt-20">
        <div class="container flex items-center justify-center min-h-screen px-6 mx-auto">
          <form class="w-full max-w-md">
            <img
              class="object-cover w-24 h-24 mx-auto rounded-full"
              src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
              alt="user avatar"
            />

            <div class="flex items-center justify-center mt-6 space-x-8">
              <NavLink
                to="#"
                class="w-1/3 pb-4 font-medium text-center text-gray-500 capitalize border-b"
              >
                Giriş Yap
              </NavLink>

              <NavLink
                to="../signup"
                class="w-1/3 pb-4 font-medium text-center text-gray-800 capitalize border-b-2 border-blue-500"
              >
                Kayıt Ol
              </NavLink>
            </div>

            <div class="relative flex items-center mt-8">
              <span class="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 mx-3 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </span>

              <input
                type="text"
                class="block w-full py-3 text-gray-700 bg-white border rounded-md px-11 focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Username"
              />
            </div>

            <div class="relative flex items-center mt-4">
              <span class="absolute">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="w-6 h-6 mx-3 text-gray-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                  />
                </svg>
              </span>

              <input
                type="password"
                class="block w-full px-10 py-3 text-gray-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
                placeholder="Password"
              />
            </div>

            <div class="mt-6">
              <button class="w-full px-6 py-3 text-sm font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-500 rounded-md hover:bg-blue-400 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-50">
                Sign Up
              </button>

              <div class="mt-6 text-center ">
                <NavLink to="#" class="text-sm text-blue-500 hover:underline">
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

export default Login;
