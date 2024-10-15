import { FC } from "react";
import data from "@/data/data.json";
import { MDXRemote, MDXRemoteProps } from "next-mdx-remote/rsc";
import fs, { readFileSync } from "node:fs";
import { serialize } from "next-mdx-remote/serialize";
import path from "node:path";
import { notFound } from "next/navigation";

const { recipes } = data;
interface RecipeSlugProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  return recipes.map((recipe) => ({
    slug: recipe.slug,
  }));
}

const RecipeSlug: FC<RecipeSlugProps> = ({ params: { slug } }) => {
  const recipe = recipes.find((recipe) => encodeURI(recipe.slug) === slug);

  if (!recipe) {
    notFound();
  }

  const dirPath = path.join(process.cwd(), "/recipes-md");
  const filePath = `${dirPath}/${recipe.en_slug}.mdx`;
  
  let mdxSource: string | undefined;
  try {
    mdxSource = readFileSync(filePath, "utf8");
  } catch (err) {
    console.error(err);
  }
  if (!mdxSource) {
    notFound();
  }

  return <MDXRemote source={mdxSource} />;
};

export default RecipeSlug;
