import React from "react";
import Collection from "../component/Collection";
import HomeLayout from "../layout/HomeLayout";

export default function Collections() {
  return (
    <div>
      <HomeLayout>
        <div className="flex justify-center">
          <div className="w-2/5">
            <div className="flex justify-between items-center">
              <header className="my-10 font-semibold text-xl">
                Collections
              </header>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM12.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM18.75 12a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
            </div>
            <div className="flex gap-x-4 mb-5 text-gray-100">
              <button
                type="button"
                className=" flex gap-x-3 focus:outline-none items-center border border-gray-700 px-3 py-1 rounded-xl focus:border-gray-700 font-medium focus:bg-gray-700"
                
            >
                Favorites
            </button>
              <button
                type="button"
                className="flex gap-x-3 focus:outline-none items-center border border-gray-700 px-3 py-1 rounded-xl focus:border-gray-700 font-medium focus:bg-gray-700"
                
            >
                All Collections
            </button>
            </div>

            <section className=" flex flex-wrap gap-x-7 gap-y-4">
              <Collection/>
              <Collection/>
              <Collection/>
              <Collection/>
              <Collection/>
              <Collection/>
              
            </section>
          </div>
        </div>
      </HomeLayout>
    </div>
  );
}
