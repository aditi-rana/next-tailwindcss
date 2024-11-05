"use client";

import { useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import CardGroup from "@/components/CardGroup";

export default function Home() {
  const [showNav, setShowNav] = useState(false);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  return (
    <>
      <div className="flex flex-col min-h-screen">
        <Navbar toggleNav={toggleNav} />
        <div className="flex flex-1">
          <Sidebar />
          <main className="m-px flex-1 bg-red-200">
            {showNav && (
              <div className="absolute right-1 p-2 bg-amber-950 text-white md:hidden space-y-2 text-center">
                <div className="border-b pb-1 border-b-zinc-500">Search</div>
                <div className="">Aditi Rana</div>
              </div>
            )}
            <div className="flex justify-center h-full">
              <CardGroup />
            </div>
          </main>
        </div>
        <Footer />
      </div>
    </>
  );
}
