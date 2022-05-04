import React from 'react';
import '../assets/css/Home.css';
import HomeNavbar from '../component/HomeNavbar';

export default function Home() {
    return (
        <div className="h-full w-full dark:bg-gray-900">
            <HomeNavbar />
            <div className="my-36 dark:text-white text-center">
                <h1 className="text-2xl md:text-5xl font-bold">Tsks, just tasks.</h1>
                <div className="md:w-1/2 lg:w-1/5 xl:w-[315px] text-center mx-auto">
                    <p className="my-4 mx-4 lg:mx-0">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    </p>
                    <div className="flex flex-wrap gap-y-4 flex-col md:justify-between md:flex-row ">
                        <button
                            type="button"
                            className=" button-primary bg-gradient-to-r from-purple-500 to-pink-500  hover:bg-gradient-to-l hover:from-indigo-500 hover:to-purple-500"
                        >
                            Get Started
                        </button>
                        <button
                            type="button"
                            className="button-primary bg-gradient-to-r from-gray-500 to-zinc-500  hover:bg-gradient-to-l hover:from-indigo-500 hover:to-purple-500"
                        >
                            Learn More
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
