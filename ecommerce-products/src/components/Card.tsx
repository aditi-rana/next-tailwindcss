import React from "react";

type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: any;
  rating: any;
};

const Card = ({ product }: { product: ProductType }) => {
  return (
    <div className="flex-none rounded h-96 w-72 bg-amber-900">
      <div>
        <img
          className="h-64 w-full object-cover rounded p-2"
          src={product.image}
          alt={product.title}
        />
      </div>
      <div className="px-4 text-sm font-extrabold truncate">
        {product.title}
      </div>
      <div className="p-4 text-sm font-medium text-white">
        Price - <span className="font-semibold">${product.price}</span>
      </div>
      <div className="text-sm font-bold">
        <span className="bg-amber-950 p-2 ml-3 rounded-full">
          {product.category}
        </span>
      </div>
    </div>
  );
};

export default Card;
