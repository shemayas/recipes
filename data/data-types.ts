interface Recipe {
    title: string;
    slug: string;
    excerpt: string;
    imagePath?: string;
    text: string;
    categoryIds: string[];
}

interface Category {
    name: string;
    id: string;
}
