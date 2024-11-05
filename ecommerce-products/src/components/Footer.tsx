import React from "react";

const Footer = () => {
  return (
    <footer className="mt-px bg-amber-950 text-white p-4 flex flex-col space-y-2 items-center md:flex-row md:justify-around">
      <div>c 2024 foundation</div>
      <div className="flex space-x-8">
        <div>About</div>
        <div>Contact</div>
      </div>
    </footer>
  );
};

export default Footer;
