"use client";

import Navbar from "@/app/components/Navbar";
export default function Home() {
  return (
    <>
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
    </>
  );
}
