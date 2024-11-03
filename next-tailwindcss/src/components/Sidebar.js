// import Link from "next/link";

// const Sidebar = () => (
//   <div className="w-64 bg-gray-800 text-white p-4 flex flex-col space-y-4">
//     <Link href="/">Home</Link>
//     <Link href="/about">About</Link>
//     {/* Add more links as needed */}
//   </div>
// );

// export default Sidebar;

// src/components/Sidebar.js
import Link from "next/link";

const Sidebar = ({ isOpen, toggleSidebar }) => (
  <div
    className={`fixed top-0 left-0 h-min-screen bg-gray-800 text-white p-4 space-y-4 transition-transform transform ${
      isOpen ? "translate-x-0" : "-translate-x-full"
    } lg:translate-x-0 lg:relative flex flex-col w-64`}
  >
    <button
      className="lg:hidden text-white text-xl absolute top-4 right-4"
      onClick={toggleSidebar}
    >
      ✕
    </button>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    {/* Add more links as needed */}
  </div>
);

export default Sidebar;
