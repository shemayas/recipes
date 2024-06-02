import Image from "next/image";
import { FC } from "react";

const RecipeItem: FC<Recipe> = ({ categoryIds, text, title, imagePath }) => {
  return (
    <div className="my-4">
      <h2 className="text-2xl font-bold mb-2">{title}</h2>
      {imagePath && (
        <Image
          src={imagePath}
          alt={title}
          className="w-full h-64 object-cover mb-4"
          width={500}
          height={500}
        />
      )}
      <p>{text}</p>
    </div>
  );
};


export default RecipeItem;