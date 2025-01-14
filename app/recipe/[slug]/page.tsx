import { FC } from "react";
import data from "@/data/data.json";
import { MDXRemote } from "next-mdx-remote/rsc";
import { readFileSync } from "node:fs";
import path from "node:path";
import { notFound } from "next/navigation";
import Image from "next/image";
import Lines from "./Lines";

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

  return (
    <section className="container [&_.excerpt]:my-4">
      <h1 className="text-3xl font-bold my-4">{recipe.title}</h1>
      {recipe.imagePath && (
        <div className="flex justify-center">
          <Image
            src={recipe.imagePath}
            alt={recipe.title}
            width={600}
            height={400}
            className="rounded-lg"
          />
        </div>
      )}
      <MDXRemote source={mdxSource} components={{ Lines }} />
    </section>
  );
};

export default RecipeSlug;
