import React from "react";
const Navbar = () => {
  return (
    <div
      className="bg-white text-black flex fixed items-center justify-between h-20 p-3 top-0 left-0 w-full z-30 shadow-md border-b border-gray-200">
      <div
        className="right-nav w-1/2 flex items-center gap-4"
      >
        <div className="logo flex items-center hover:cursor-pointer px-3">
          <img src="./src/icons/logo.svg" className="h-14 w-14  " alt="logo" />
          <h1 className=" text-black text-3xl font-bold ml-2 hover:text-blue-600">CodeVault</h1>
        </div>
        <div className="pb-{0.5rem}
">
          <ul className="flex gap-6 text-lg font-semibold items-center justify-center p-3">
             <li className="group relative cursor-pointer">
              <a href="#" className="focus:outline-none text-black ">                Home
              </a>
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full group-hover:left-0 group-focus:w-full group-focus:left-0"></span>
            </li>
            
            <li className="group relative cursor-pointer">
              <a href="#" className="focus:outline-none text-black ">
                Solutions
              </a>
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full group-hover:left-0 group-focus:w-full group-focus:left-0"></span>
            </li>

            <li className="group relative cursor-pointer">
              <a href="#" className="focus:outline-none text-black ">                Notes
              </a>
              <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full group-hover:left-0 group-focus:w-full group-focus:left-0"></span>
            </li>

          
             
          </ul>
        </div>
      </div>
      <div className="left-nav w-1/2 flex items-center p-3 justify-end gap-4">
        <div className="flex items-center gap-2">
          <img
            src="./src/icons/search_icon.svg"
            alt="search"
            className="h-8 w-8 hover:cursor-pointer"
          />
          <input
            type="text"
            placeholder="Search Solutions or Notes"
            className="border-2 border-gray-300 rounded-lg font-semibold focus:outline-none hover:border-blue-700 w-84 h-10 p-4" 
          />
        </div>
        <div className="flex items-center gap-4 p-3">
          <div className="relative group inline-block">
            <a href="#" className="focus:outline-none font-semibold text-lg text-black ">@sahilsonkamble</a>
            <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full group-hover:left-0 group-focus:w-full group-focus:left-0"></span>
          </div>
           
          <img
            src="./src/icons/account_profice.svg"
            alt="profile"
            className="h-12 w-12 rounded-full hover:cursor-pointer"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
