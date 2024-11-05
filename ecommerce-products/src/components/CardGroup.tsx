// ecommerce-products/src/components/CardGroup.tsx
import React, { FC } from "react";
import Card from "./Card";

type ProductType = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: { rate: number; count: number };
};

const CardGroup: FC<{ products: ProductType[] }> = ({ products }) => {
  return (
    <div className="flex flex-wrap justify-center h-full p-8 gap-6">
      {products.map((product) => (
        <Card key={product.id} product={product} />
      ))}
    </div>
  );
};

export default CardGroup;
