import React from "react";

export default function ViewSolution({setShowSolution}) {
  return (
    <div className=" inset-0 fixed  z-100  bg-opacity-50 backdrop-blur-sm items-center justify-center flex ">
      <div className="w-[80%] h-[80%] mx-auto bg-white rounded-xl shadow-lg p-8 relative">
        {/* Header */}
        <div className="flex justify-between items-center">
          <h2 className="text-2xl font-semibold">Solution Details</h2>
          <a
            href="https://leetcode.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline font-medium text-base"
          >
            View on LeetCode
          </a>
        </div>
        {/* Content */}
        <div className="flex flex-col md:flex-row gap-8 mt-6">
          {/* Solution Code */}
          <section className="flex-1">
            <div>
              <div className="text-base font-semibold mb-3 ">Solution Code</div>
              <div className="relative bg-[#222536] text-white rounded-lg text-sm py-6 px-5 min-h-[260px] ">
                <span className="absolute top-5 right-6 text-xs text-gray-400">javascript</span>
                <pre className="whitespace-pre-wrap m-0 w-1/2">
                  <code>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam reiciendis officiis maxime doloribus neque magnam ratione id consequatur dolor sit veritatis ame Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus a perferendis voluptatem odio facere magnam labore sapiente minima aliquam sit suscipit quasi sed hic voluptate fugit quos magni atque fuga cum quibusdam, vitae ducimus repellendus natus. Molestias dolore obcaecati impedit autem a reprehenderit, odit, labore voluptas doloremque laudantium magni excepturi?.</code>
                </pre>
              </div>
            </div>
          </section>
          {/* Notes & Tags */}
          <aside className="flex-1 min-w-[220px]">
            <div className="font-semibold text-base mb-3 text-gray-700">Notes</div>
            <div className="bg-[#f3f4f8] rounded-md p-4 text-gray-700 text-sm mb-7 leading-relaxed">
              This solution uses a hash map to store the numbers we've seen so far and their indices. For each number, we check if its complement (target - current number) exists in the map. If it does, we've found our pair.
              <br /><br />
              <b>Time Complexity:</b> O(n)<br />
              <b>Space Complexity:</b> O(n)
            </div>
            <div className="font-semibold text-gray-500 text-sm mb-2">Tags</div>
            <div className="flex flex-wrap gap-2">
              <span className="bg-[#eef2fa] text-[#596b89] rounded-full px-4 py-1 text-xs">Array</span>
              <span className="bg-[#eef2fa] text-[#596b89] rounded-full px-4 py-1 text-xs">Hash Table</span>
              <span className="bg-[#eef2fa] text-[#596b89] rounded-full px-4 py-1 text-xs">Two Pointers</span>
            </div>
          </aside>
        </div>
        {/* Footer Buttons */}
        <div className="flex justify-end gap-3 mt-8">
          <button className="bg-[#efeff5] text-gray-700 font-medium rounded-md px-6 py-2 text-base hover:bg-[#e0e0e7] transition hover:cursor-pointer" onClick={() => setShowSolution(false)}>Close</button>
          <button className="bg-blue-500 text-white font-medium rounded-md px-6 py-2 text-base hover:bg-blue-600 transition">Edit Solution</button>
        </div>
      </div>
    </div>
  );
}



