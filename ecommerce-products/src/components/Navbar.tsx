import React, { FC } from "react";

const Navbar: FC<{ toggleNav: any }> = ({ toggleNav }) => {
  return (
    <nav className="bg-amber-950 text-white w-full p-4 flex items-center justify-between">
      <div className="font-extrabold text-xl">Navbar</div>
      <div className="md:flex space-x-6 hidden">
        <div className="pt-px">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="20"
            height="20"
            viewBox="0,0,256,256"
          >
            <g
              fill="#ffffff"
              fillRule="nonzero"
              stroke="none"
              strokeWidth="1"
              strokeLinecap="butt"
              strokeLinejoin="miter"
              strokeMiterlimit="10"
              strokeDasharray=""
              strokeDashoffset="0"
              fontFamily="none"
              fontWeight="none"
              fontSize="none"
              textAnchor="none"
              className="mix-blend-mode: normal"
            >
              <g transform="scale(8.53333,8.53333)">
                <path d="M13,3c-5.511,0 -10,4.489 -10,10c0,5.511 4.489,10 10,10c2.39651,0 4.59738,-0.85101 6.32227,-2.26367l5.9707,5.9707c0.25082,0.26124 0.62327,0.36648 0.97371,0.27512c0.35044,-0.09136 0.62411,-0.36503 0.71547,-0.71547c0.09136,-0.35044 -0.01388,-0.72289 -0.27512,-0.97371l-5.9707,-5.9707c1.41266,-1.72488 2.26367,-3.92576 2.26367,-6.32227c0,-5.511 -4.489,-10 -10,-10zM13,5c4.43012,0 8,3.56988 8,8c0,4.43012 -3.56988,8 -8,8c-4.43012,0 -8,-3.56988 -8,-8c0,-4.43012 3.56988,-8 8,-8z"></path>
              </g>
            </g>
          </svg>
        </div>
        <div className="font-semibold">Aditi Rana</div>
      </div>
      <div className="md:hidden">
        <button onClick={toggleNav}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="white"
            viewBox="0 0 24 24"
          >
            <path d="M12 16.5l-8-8h16l-8 8z" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
