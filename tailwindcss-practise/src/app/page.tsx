"use client";

import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
export default function Home() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Navbar />
          <div className="flex items-center justify-center min-h-screen bg-black flex-col md:flex-row">
            <h1 className="font-bold text-green-500 m-4">
              Welcome to Tailwind CSS
            </h1>
            <button
              className="bg-lime-300 p-2 rounded-lg"
              onClick={() => alert("yoohoooo!")}
            >
              Click Me
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
