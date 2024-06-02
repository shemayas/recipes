import Image from "next/image";
import recipesData from "../data/data.json";
import RecipeItem from "./recipes/RecipeItem";
const { recipes } = recipesData;

const Recipes = () => {
  return (
    <section>
      {recipes.map((recipe, index) => (
        <RecipeItem key={index} {...recipe} />
      ))}
    </section>
  );
};

export default Recipes;
