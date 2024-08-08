import Image from "next/image";
import { FC } from "react";
import data from "@/data/data.json";

const categories = data.categories;
const categoryColors: { [key: string]: string } = {
  "1": "red",
  "2": "blue",
  "3": "green",
  "4": "purple",
  "5": "orange",
};

// Get category details from categoryIds
const getCategoryDetails = (categoryIds: string[]) => {
  return categoryIds.reduce<{ name: string; color: string }[]>((acc, id) => {
    const category = categories.find((cat) => cat.id === id);
    category && acc.push({ name: category.name, color: categoryColors[id] });
    return acc;
  }, []);
};

type RecipeProps = {
  categoryIds: string[];
  text: string;
  title: string;
  imagePath: string;
};

const RecipeItem: FC<RecipeProps> = ({
  categoryIds,
  text,
  title,
  imagePath,
}) => {
  const categoryDetails = getCategoryDetails(categoryIds);

  return (
    <div className="group my-4 group relative">
      <h2 className="text-xl font-bold mb-2 relative">{title}</h2>
      {imagePath && (
        <div className="w-full aspect-w-16 aspect-h-9 mb-4 relative">
          <Image
            src={imagePath}
            alt={title}
            fill
            className="fill rounded-lg leading-snug transition-transform duration-100 transform group-hover:scale-105 object-cover min-w-full"
          />
        </div>
      )}

      <div className="mb-2">
        {categoryDetails.map(({ name, color }, index) => (
          <span
            key={index}
            className="inline-block text-xs font-medium tracking-wider uppercase mt-5 bg-none mr-2"
            style={{ color }}
          >
            {name}
          </span>
        ))}
      </div>

      <p className="text-${num} text-center inline bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-right-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] mb-4">
        {text}
      </p>
    </div>
  );
};

export default RecipeItem;
