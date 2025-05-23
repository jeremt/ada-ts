interface Recipe {
  title: string;
  chefNote?: string; // peut être undefined
}

function printRecipe(recipe: Recipe): string {
  return `Recipe: ${recipe.title}\nChef says: "${recipe.chefNote}"`;
}

const r1: Recipe = {
  title: "Pasta al Pesto",
  chefNote: "Use fresh basil for best flavor.",
};

const r2: Recipe = {
  title: "Tomato Soup",
};

console.log(printRecipe(r1));
console.log(printRecipe(r2)); // 💥 ça va afficher 'undefined'
