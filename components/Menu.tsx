import React from "react";
import { useRouter } from "next/router";
import calls from "../utils/calls";

export const Menu = () => {
  const router = useRouter();

  return (
    <div className="relative">
      <div className="flex px-10 sm:px-20 text-xl whitespace-nowrap space-x-10 sm:space-x-20 overflow-x-scroll scrollbar-hide">
        {Object.entries(calls).map((call) => (
          <h2
            onClick={() => router.push(`/?genre=${call[0]}`)}
            key={call[0]}
            className="last:pr-20 cursor-pointer transition duration-100 
            transform hover:scale-125 hover:text-white"
          >
            {call[1].title}
          </h2>
        ))}
      </div>
      <div className="absolute top-0 right-0 bg-gradient-to-l from-[#1F1B24] h-10 w-1/12" />
    </div>
  );
};
