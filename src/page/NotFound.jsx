import React from "react";
import { NavLink } from "react-router-dom";
import HomeNavbar from "../component/HomeNavbar";

export default function NotFound() {
  return (
    <div className="h-screen w-full dark:bg-gray-900">
      <HomeNavbar />
      <div className=" pt-16 pb-12 flex flex-col bg-white dark:bg-gray-900">
        <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16 mt-14">
            <div className="text-center ">
              <p className="text-4xl font-semibold dark:text-white tracking-wide">
                404 - Looks like you're lost.
              </p>
              <div className="mt-6 flex justify-center">
                <h1 className="text-sm text-gray-900 dark:text-gray-400 tracking-tight w-96 ">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
                  aut fugiat natus similique explicabo. Repudiandae expedita
                </h1>
              </div>
              <div className="mt-6">
                <NavLink
                  to="/"
                  className="text-base flex justify-center "
                >
                  <button
                    type="button"
                    className="py-1.5 px-3 rounded-xl focus:outline-none font-bold bg-gradient-to-r from-purple-500 to-pink-500  hover:bg-gradient-to-l hover:from-indigo-500 hover:to-purple-500 focus:ring-2 focus: ring-indigo-600 flex justify-center items-center"
                  >
                    Return Home
                  </button>
                </NavLink>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
