import Image from "next/image";
import { FC } from "react";
import "../../styles/styles.css"; // ודאו שהנתיב לקובץ ה-CSS מתאים

const RecipeItem: FC<Recipe> = ({ categoryIds, text, title, imagePath }) => {
  return (
    <div className="my-4 hover:cursor-pointer group relative">
      <h2 className="text-2xl font-bold mb-2 relative">{title}</h2>
      {imagePath && (
        <div className="w-full aspect-w-16 aspect-h-9 mb-4 relative">
          <Image 
            src={imagePath}
            alt={title}
            layout="fill"
            className="rounded-lg transition-transform duration-1000 transform group-hover:scale-105 object-cover"
          />
        </div>
      )}
      <p className="transition-opacity duration-500 group-hover:opacity-100 relative line-animation">
                    
        {text}
      </p>
    </div>
  );
};

export default RecipeItem;
