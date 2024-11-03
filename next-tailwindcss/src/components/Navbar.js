// const Navbar = () => (
//   <nav className="bg-gray-700 text-white p-4 text-center">
//     <h1 className="text-xl font-bold">My App</h1>
//     {/* Additional items can be added here */}
//   </nav>
// );

// export default Navbar;

// src/components/Navbar.js
const Navbar = ({ toggleSidebar }) => (
  <nav className="flex items-center justify-between bg-gray-700 text-white p-4 lg:p-6">
    <button className="lg:hidden text-2xl" onClick={toggleSidebar}>
      ☰
    </button>
    <h1 className="text-xl font-bold">My App</h1>
    <div className="hidden space-x-4 lg:flex">
      <a href="/" className="hover:text-gray-300">
        Home
      </a>
      <a href="/about" className="hover:text-gray-300">
        About
      </a>
      <a href="/contact" className="hover:text-gray-300">
        Contact
      </a>
    </div>
  </nav>
);

export default Navbar;
