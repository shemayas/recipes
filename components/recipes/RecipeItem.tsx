import Image from "next/image";
import { FC } from "react";
//import "../../styles/styles.css"; // ודאו שהנתיב לקובץ ה-CSS מתאים
import data from "../../data/data.json"; // ייבוא הקטגוריות והמתכונים מקובץ JSON


const categoryColors: {[key:string] : string} = {
  "1": 'red',
  "2": 'blue',
  "3": 'green',
  "4": 'purple',
  "5": 'orange'
};

// פונקציה למציאת שמות הקטגוריות לפי מזהי הקטגוריות
const getCategoryDetails = (categoryIds) => {
  return categoryIds.map(id => {
    const category = data.categories.find(cat => cat.id === id);
    return category ? { name: category.name, color: categoryColors[id] } : null;
  }).filter(detail => detail !== null);
};


type Recipe = {
  categoryIds: string[];
  text: string;
  title: string;
  imagePath: string;
};

const RecipeItem: FC<Recipe> = ({ categoryIds, text, title, imagePath }) => {
  const categoryDetails = getCategoryDetails(categoryIds);

  return (
    <div className="group my-4 hover:cursor-pointer group relative">
      <h2 className="text-xl font-bold mb-2 relative">{title}</h2>
      {imagePath && (
        <div className="w-full aspect-w-16 aspect-h-9 mb-4 relative">
          <Image 
            src={imagePath}
            alt={title}
            layout="fill"
            className="rounded-lg leading-snug transition-transform duration-100 transform group-hover:scale-105 object-cover min-w-full"
          />
        </div>
      )}
      

       <div className="mb-2 text-left">
       {categoryDetails.map((detail, index) => (
          <span 
            key={index} 
            className="inline-block text-xs font-medium tracking-wider uppercase mt-5 bg-none mr-2"
            style={{ color: detail.color }}>
            {detail.name}
          </span>
        ))}
      </div>

      <p className="text-${num} text-center inline bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-right-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] mb-4">
        {(text)}
      </p>
     
    </div>
  );
};

export default RecipeItem;
