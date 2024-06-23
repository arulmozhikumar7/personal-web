import React from "react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-10 bg-white bg-opacity-50 backdrop-filter backdrop-blur-lg">
      <div className="max-w-5xl px-4 mx-auto">
        <div className="flex items-center justify-between h-16">
          <div className="flex text-2xl font-semibold text-gray-900 font-mukta">
            Arulmozhikumar
            <img src="./logo.png" alt="arulmozhikumar" className="w-9 h-9" />
          </div>
          <div className="flex space-x-8 text-gray-900 font-mukta ">
            <button class="font-bold  text-lg border border-black  rounded-lg p-2  bg-[#01FC536F] text-black font-mukta ">
              <a href="/Arulmozhikumar.pdf" download="Arulmozhikumar.pdf">
                Download CV
              </a>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
