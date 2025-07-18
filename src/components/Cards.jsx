import React from "react";
import "./Cards.css"; 
import ViewSolution from "./ViewSolution";
const Cards = () => {
  const [showSolution, setShowSolution] = React.useState(false);
  return (
    <div className="  bg-white p-4 rounded-2xl border border-gray-100 border-l-4 border-l-blue-500 shadow-md hover:shadow-md transition-shadow duration-300">
      <div className="title flex items-center justify-between py-3 m-4">
        <div className="flex items-center justify-between gap-3">
          <div className="text-lg font-semibold bg-blue-300 px-1 rounded-xl">
            #1
          </div>
          <h2 className="text-xl font-bold">Two Sum</h2>
          <button className="bg-green-200 text-green-400 font-bold px-3 py-1 text-sm rounded-xl">
            Easy
          </button>
           <div className="description px-3 py-1 flex items-center text-blue-600 font-semibold font-sm hover:cursor-pointer hover:text-blue-800">
        <img src="./src/icons/open.svg" className="hover:text-blue-500" alt="" />
        <a href="#">View On LeetCode</a>
      </div>
        </div>

        <div>
          <button className=" text-white px-2 ml-2 rounded-xl hover:cursor-pointer" onClick={()=>setShowSolution(true)}>
            <img src="./src/icons/view.svg" alt="" />
          </button>
          <button className=" text-white px-2 rounded-xl hover:cursor-pointer">
            <img src="./src/icons/edit.svg" alt="" />
          </button>
          <button className=" text-white px-2 ml-2 rounded-xl hover:cursor-pointer">
            <img src="./src/icons/delete.svg" alt="" />
          </button>
        </div>
      </div>
     

      <div className="flex flex-row gap-4 p-2 ">
        {/* Solution Code section */}
        <div className="bg-white  py-2 px-6 w-full md:w-1/2 h-max">
          <div className="font-bold p-1 text-gray-800">
            <p>Solution Code</p>
          </div>
          {/* Code display area with hidden scrollbar */}
          <div className="bg-gray-800 text-gray-100 rounded-md p-4 h-64 overflow-y-scroll custom-scrollbar-hide">
            <pre className="whitespace-pre-wrap text-sm">
              <code>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam id exercitationem debitis doloremque, autem totam sapiente officiis ducimus dolor vero voluptatem quam nobis eaque praesentium! Optio nisi laborum culpa doloremque tenetur quidem tempore incidunt minus, esse illum deleniti pariatur, quibusdam quas, facere asperiores dignissimos possimus impedit sed officia quasi laboriosam.
              </code>
            </pre>
          </div>
        </div>
        <div className="bg-white  px-4 py-1  w-1/2 max-w-2xl mx-auto mt-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-4 px-4 ">Notes</h3>

          <div className="text-gray-700 mb-4 p-3 h-32 overflow-y-scroll custom-scrollbar-hide">
            <p className="mb-2 border border-gray-50 p-3 bg-gray-100 rounded-lg">
              The Two Sum problem is a classic algorithmic challenge where you are given an array of integers and a target sum. The goal is to find two numbers in the array that add up to the target sum and return their indices.
            </p>
          </div>
            <div className="text-gray-600 text-m p-3">
              <p className="font-medium">Time Complexity: O(n)</p>
              <p className="font-medium">Space Complexity: O(n)</p>
            </div>

          <div className="text-gray-800 font-semibold mb-2 p-1 px-3">Tags</div>
          <div className="flex flex-wrap gap-2 px-3">
            <span className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm">
              Array
            </span>
            <span className="bg-gray-200 text-gray-700 px-4 py-1 rounded-full text-sm">
              Hash Table
            </span>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-4 p-3">
        <button className="text-blue-600 font-semibold hover:cursor-pointer  " onClick={()=>setShowSolution(true)}>View Full Solution</button>
      </div>
      <div>
        
      </div>
      {showSolution && <ViewSolution setShowSolution={setShowSolution} /> }
      
    </div>
  );
};

export default Cards;
