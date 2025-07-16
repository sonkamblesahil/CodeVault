import React from "react";
import Cards from "./Cards";

const MainContainer = () => {
  return (
    <div className="relative flex flex-col flex-1 h-[calc(100vh-4rem)] py-4 m-4 bg-gray-100 rounded-2xl overflow-y-hidden">
      
      {/* Sticky Heading */}
      <div className="py-3 px-4">
        <h1 className="text-2xl flex justify-center font-bold text-gray-600">
          Your LeetCode Solutions
        </h1>
      </div>

      {/* Scrollable Cards Section */}
      <div className=" flex flex-col gap-10 p-4 bg-gray-100 rounded-2xl overflow-y-scroll">
        <Cards />
        <Cards />
      </div>

    </div>
  );
};

export default MainContainer;
