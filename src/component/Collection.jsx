import React from "react";

export default function Collection() {
  return (
    <div className="w-40 relative bg-opacity-80 bg-gray-900 h-36 rounded-2xl shadow-xl block">
      <div className="m-4 absolute">
        <div className="mb-6 top-0 left-0 flex h-9 w-9 items-center justify-center bg-pink-400 rounded-xl ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-[22px] h-[22px]"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
            />
          </svg>
        </div>

        <div className="text-lg font-semibold mb-1">School</div>
        <div>
            <p className="text-sm font-semibold text-gray-400 font-sans">4/8 done</p>
        </div>
      </div>
    </div>
  );
}
