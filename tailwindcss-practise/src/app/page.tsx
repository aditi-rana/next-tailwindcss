"use client";
export default function Home() {
  return (
    <>
      <div className="flex items-center justify-center min-h-screen bg-black">
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
