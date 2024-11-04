import Link from "next/link";
import React, { useState } from "react";

const Sidebar = () => {
  // const [isMenuOpen, setIsMenuOpen] = useState(false);

  // const toggleMenu = () => {
  //   setIsMenuOpen(!isMenuOpen);
  // };

  return (
    <>
      <aside className="md:w-64 bg-sky-950 w-12 mr-1">
        <div className="hidden md:block mt-4">
          <div className="border-b border-zinc-500 w-full text-center p-1">
            <Link href="#" className="hover:text-gray-400">
              Home
            </Link>
          </div>
          <div className="border-b border-zinc-500 w-full text-center p-1">
            <Link href="#" className="hover:text-gray-400">
              About
            </Link>
          </div>
          <div className="border-b border-zinc-500 w-full text-center p-1">
            <Link href="#" className="hover:text-gray-400">
              Contact
            </Link>
          </div>
        </div>
        <div className="text-center md:hidden mt-4 font-extrabold">{">>"}</div>
      </aside>
    </>
  );
};

export default Sidebar;
