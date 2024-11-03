// import Sidebar from "./Sidebar";
// import Navbar from "./Navbar";
// import Footer from "./Footer";

// const Layout = ({ children }) => (
//   <div className="flex min-h-screen">
//     <Sidebar />
//     <div className="flex-1 flex flex-col">
//       <Navbar />
//       <main className="flex-1 p-4">{children}</main>
//       <Footer />
//     </div>
//   </div>
// );

// export default Layout;
// src/components/Layout.js
import { useState } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <div className="flex min-h-screen">
      <Sidebar isOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
      <div className="flex-1 flex flex-col">
        <Navbar toggleSidebar={toggleSidebar} />
        <main className="flex-1 p-4">{children}</main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
