import React from "react";

const Footer = () => {
  return (
    <footer className="text-white w-full h-20 mt-1 bg-sky-950 flex items-center md:justify-between px-16 md:flex-row flex-col justify-around">
      <div>© 2023 My Company</div>
      <div className="space-x-4">
        <a href="#" className="hover:text-gray-400">
          Twitter
        </a>
        <a href="#" className="hover:text-gray-400">
          Facebook
        </a>
      </div>
    </footer>
  );
};

export default Footer;
