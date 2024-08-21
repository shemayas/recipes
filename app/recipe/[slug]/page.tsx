import { FC } from "react";
import data from "@/data/data.json";

const { recipes } = data;
interface RecipeSlugProps {
  params: { slug: string };
}

const RecipeSlug: FC<RecipeSlugProps> = ({ params: { slug } }) => {
  console.log(slug);
  const recipe = recipes.find((recipe) => recipe.slug === decodeURI(slug));
  console.log({ recipe });
  return <div>{JSON.stringify(recipe)}</div>;
};

export default RecipeSlug;
