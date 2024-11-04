import React, { useState } from "react";

const CardGroup = () => {
  return (
    <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
      <div className="text-black text-center pt-4 w-64 h-80 rounded bg-lime-100">
        Card 1
      </div>
      <div className="text-black text-center pt-4 w-64 h-80 rounded bg-lime-100">
        Card 2
      </div>
      <div className="text-black text-center pt-4 w-64 h-80 rounded bg-lime-100">
        Card 3
      </div>
      <div className="text-black text-center pt-4 w-64 h-80 rounded bg-lime-100">
        Card 4
      </div>
    </div>
  );
};

export default CardGroup;
