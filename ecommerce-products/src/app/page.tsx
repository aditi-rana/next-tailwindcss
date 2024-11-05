// ecommerce-products/src/app/page.tsx
"use client";

import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Sidebar from "@/components/Sidebar";
import Footer from "@/components/Footer";
import CardGroup from "@/components/CardGroup";

type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

export default function Home() {
  const [showNav, setShowNav] = useState(false);
  const [products, setProducts] = useState<ProductType[]>([]);

  const toggleNav = () => {
    setShowNav(!showNav);
  };

  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products");

    if (!response.ok) {
      console.error("Failed to fetch products");
      return [];
    }

    const data = await response.json();
    return Array.isArray(data) ? data : [];
  };

  useEffect(() => {
    const getProducts = async () => {
      const data = await fetchProducts();
      setProducts(data);
    };

    getProducts();
  }, []);

  return (
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
          <div className="flex h-full justify-center">
            <CardGroup products={products} />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
}
