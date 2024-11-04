"use client";

import Navbar from "@/app/components/Navbar";
import Sidebar from "@/app/components/Sidebar";
import CardGroup from "@/app/components/Cards";
import Footer from "@/app/components/Footer";
export default function Home() {
  return (
    <>
      <div className="flex">
        <Sidebar />
        <div className="w-full">
          <Navbar />
          <main className="min-h-screen bg-black">
            <div className="bg-emerald-950 flex items-center justify-between space-y-2 flex-col md:flex-row rounded mt-1 mr-1 p-4">
              <h1 className="font-bold text-green-500">
                Welcome to Tailwind CSS
              </h1>
              <button
                className="bg-lime-300 p-2 rounded-lg text-black"
                onClick={() => alert("yoohoooo!")}
              >
                Click Me
              </button>
            </div>
            <div className="flex justify-center">
              <CardGroup />
            </div>
          </main>
        </div>
      </div>
      <Footer />
    </>
  );
}
