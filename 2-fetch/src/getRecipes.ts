type Recipe = {
  id: number;
  name: string;
  ingredients: string[];
  instructions: string[];
  prepTimeMinutes: number;
  cookTimeMinutes: number;
  servings: number;
  difficulty: "Easy" | "Medium" | "Hard";
  cuisine: string;
  caloriesPerServing: number;
  tags: string[];
  userId: number;
  image: string;
  rating: number;
  reviewCount: number;
  mealType: ("Breakfast" | "Lunch" | "Dinner" | "Snack" | "Dessert")[]; // Tu peux ajuster les valeurs possibles selon ton cas
};

export const getRecipes = async () => {
  const res = await fetch("https://dummyjson.com/recipes");
  return (await res.json()) as { recipes: Recipe[] };
};
