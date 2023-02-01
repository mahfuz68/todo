import React from "react";

export default function Collection() {
  return (
    <div className="w-40 relative bg-opacity-80 bg-gray-900 h-36 rounded-2xl shadow-xl block">
      <div className="m-4 absolute">
        <div className="mb-6 top-0 left-0 flex h-9 w-9 items-center justify-center bg-pink-400 rounded-xl ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-[22px] h-[22px]"
          >
            <path d="M11.25 4.533A9.707 9.707 0 006 3a9.735 9.735 0 00-3.25.555.75.75 0 00-.5.707v14.25a.75.75 0 001 .707A8.237 8.237 0 016 18.75c1.995 0 3.823.707 5.25 1.886V4.533zM12.75 20.636A8.214 8.214 0 0118 18.75c.966 0 1.89.166 2.75.47a.75.75 0 001-.708V4.262a.75.75 0 00-.5-.707A9.735 9.735 0 0018 3a9.707 9.707 0 00-5.25 1.533v16.103z" />
          </svg>
        </div>

        <div className="text-lg font-semibold mb-1">School</div>
        <div>
          <p className="text-sm font-semibold text-gray-400 font-sans">
            4/8 done
          </p>
        </div>
      </div>
    </div>
  );
}
