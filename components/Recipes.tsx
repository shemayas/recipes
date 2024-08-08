import recipesData from "../data/data.json";
import RecipeItem from "./recipes/RecipeItem";
const { recipes } = recipesData;

const Recipes = () => {
  return (
    <section className="p-8 sm:p-12 md:p-16 lg:p-20 xl:p-24 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
      {recipes.map((recipe, index) => (
        <RecipeItem key={index} {...recipe} />
      ))}
    </section>
  );
};

export default Recipes;
