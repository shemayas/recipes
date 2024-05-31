interface Recipe {
    title: string;
    imagePath: string;
    text: string;
    categoryIds: string[];
}

interface Category {
    name: string;
    id: string;
}
