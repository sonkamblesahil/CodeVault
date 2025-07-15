import React from "react";
import { Code2, Star } from "lucide-react";
const LeftSideBar = () => {
  return (
    <div className="sticky top-20 left-0 w-1/6  bg-white border border-gray-100 rounded-xl py-8">
      <div className="flex justify-center ">
        <button className=" text-m font-semibold rounded-lg bg-blue-500 text-white w-[80%] py-[0.5rem] hover:bg-blue-600 hover:cursor-pointer transition ">
          + New Solution
        </button>
      </div>

      <div className="flex flex-col px-4 py-4">
        <h2 className="text-gray-400  px-4 py-4">Filters</h2>

        <div className="flex flex-col gap-2">
          {/* All Solutions */}
          <button className="flex items-center gap-2 px-8 py-3 rounded-lg hover:bg-gray-100 transition">
            <Code2 size={16} />
            <span className="">All Solutions</span>
          </button>

          {/* Favorites */}
          <button className="flex items-center gap-2 px-8 py-3 rounded-lg hover:bg-gray-100 transition">
            <Star size={16} className="text-gray-600" />
            <span className=" ">Favorites</span>
          </button>
        </div>
      </div>
      <div className="flex flex-col px-4 py-4">
  <h2 className="text-gray-400 px-4 py-4">Difficulty</h2>

  <div className="flex flex-col gap-2">
    {/* Hard */}
    <button className="flex items-center gap-3 px-8 py-2 rounded-lg hover:bg-gray-100 transition">
      <span className="w-2 h-2 rounded-full bg-red-500"></span>
      <span>Hard</span>
    </button>

    {/* Medium */}
    <button className="flex items-center gap-3 px-8 py-2 rounded-lg hover:bg-gray-100 transition">
      <span className="w-2 h-2 rounded-full bg-yellow-400"></span>
      <span>Medium</span>
    </button>

    {/* Easy */}
    <button className="flex items-center gap-3 px-8 py-2 rounded-lg hover:bg-gray-100 transition">
      <span className="w-2 h-2 rounded-full bg-green-500"></span>
      <span>Easy</span>
    </button>
  </div>
</div>

      
    </div>
  );
};

export default LeftSideBar;
