import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../assets/icon/logo.png";
import ThemeToggle from "./ThemeToggle";

export default function HomeNavbar() {
  return (
    <div>
      <div className="max-w-full text-center pt-3 dark:text-white dark:bg-gray-900">
        <div className="px-3 sm:px-4  md:px-14 xl:px-36 flex justify-between items-center">
          <div className="flex space-x-4 lg:space-x-6 items-center">
            <NavLink to="/">
              <div className="flex space-x-1">
                <img className="w-7 h-7" src={Logo} alt="" />
                <p className="dark:text-white font-bold text-2xl">tsks.</p>
              </div>
            </NavLink>

            <NavLink
              to="/login"
              className="hidden md:block font-medium rounded-lg px-4 py-1 border-white hover:border-gray-600 dark:border-gray-900 border-2 dark:hover:border-indigo-700"
            >
              Features
            </NavLink>
          </div>
          <div className="flex items-center space-x-0 md:space-x-2 font-extrabold">
            <NavLink
              className="font-medium rounded-lg px-4  py-1 border-white hover:border-gray-600 dark:border-gray-900 border-2 dark:hover:border-indigo-700"
              to="/login"
            >
              Login
            </NavLink>

            <NavLink
              className="font-medium hidden md:block rounded-lg px-4  py-1 border-white hover:border-gray-600 dark:border-gray-900 border-2 dark:hover:border-indigo-700"
              to="/register"
            >
              Register
            </NavLink>

            <div>
              <ThemeToggle />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
