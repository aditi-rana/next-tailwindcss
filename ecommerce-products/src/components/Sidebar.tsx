import React, { useEffect, useState } from "react";

const Sidebar = () => {
  const [showSidebar, setShowSidebar] = useState(true);

  useEffect(() => {
    const handleResize = () => {
      setShowSidebar(window.innerWidth >= 640);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <aside className="mt-px bg-amber-950 min-h-full text-white p-4 flex flex-col justify-between">
      <div className={`w-64 text-center ${showSidebar ? "block" : "hidden"}`}>
        <div className="border-b border-b-zinc-500 p-2 rounded">Page 1</div>
        <div className="border-b border-b-zinc-500 p-2 rounded">Page 2</div>
        <div className="border-b border-b-zinc-500 p-2 rounded">Page 3</div>
        <div className="border-b border-b-zinc-500 p-2 rounded">Page 4</div>
        <div className="border-b border-b-zinc-500 p-2 rounded">Page 5</div>
      </div>
      <div className="text-right px-2 text-xl font-extrabold">
        <button onClick={toggleSidebar}>{showSidebar ? "<<" : ">>"}</button>
      </div>
    </aside>
  );
};

export default Sidebar;
