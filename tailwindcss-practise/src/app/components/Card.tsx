import Image from "next/image";
import { FC } from "react";

const Card: FC<{ title: string }> = ({ title }: { title: string }) => {
  return (
    <div className="text-black pt-4 w-64 h-96 rounded bg-lime-100 flex flex-col items-center">
      <div className="rounded text-center text-lg font-bold border-b border-lime-900 w-full">
        {title}
      </div>
      <div className="p-2">
        <Image
          src={"https://picsum.photos/200"}
          alt={"...loading"}
          width="200"
          height="200"
        />
      </div>
      <div className="overflow-y-auto scrollbar-hide p-4 text-center">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deserunt dicta
        minus unde recusandae, enim animi ab, nisi beatae delectus laudantium
        veritatis, velit esse illo ducimus molestiae. Doloremque recusandae
        neque in.
      </div>
    </div>
  );
};

export default Card;
