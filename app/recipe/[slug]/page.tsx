import { FC } from "react";
import data from "@/data/data.json";
import { marked } from "marked";

const { recipes } = data;
interface RecipeSlugProps {
  params: { slug: string };
}

const RecipeSlug: FC<RecipeSlugProps> = ({ params: { slug } }) => {
  console.log(slug);
  const recipe = recipes.find((recipe) => recipe.slug === decodeURI(slug));
  console.log({ recipe });
  const decode = decodeURI(recipe?.text || "");
  const html = marked(decode);
  return <div dangerouslySetInnerHTML={{ __html: html }} />;
};

export default RecipeSlug;
