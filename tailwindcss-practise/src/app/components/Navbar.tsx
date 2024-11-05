import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <>
      <nav className="w-full flex justify-between items-center p-4 bg-sky-950 text-white">
        <div className="text-xl font-extrabold">Logo</div>
        <div className="space-x-4 mr-2 hidden md:flex font-bold">
          <div>
            <Link href="#" className="hover:text-gray-400">
              Home
            </Link>
          </div>
          <div>
            <Link href="#" className="hover:text-gray-400">
              About
            </Link>
          </div>
          <div>
            <Link href="#" className="hover:text-gray-400">
              Contact
            </Link>
          </div>
        </div>
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </nav>
      {isMenuOpen && (
        <div className="top-16 bg-sky-950 mt-1 w-full flex flex-col md:hidden space-y-2 p-1 items-center">
          <div className="border border-indigo-900 w-full text-center p-1">
            <Link href="#" className="hover:text-gray-400">
              Home
            </Link>
          </div>
          <div className="border  border-indigo-900 w-full text-center p-1">
            <Link href="#" className="hover:text-gray-400">
              About
            </Link>
          </div>
          <div className="border  border-indigo-900 w-full text-center p-1">
            <Link href="#" className="hover:text-gray-400">
              Contact
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
