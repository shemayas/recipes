interface Recipe {
    title: string;
    slug: string;
    excerpt: string;
    imagePath?: string;
    categoryIds: string[];
}

interface Category {
    name: string;
    id: string;
}
