import { type } from "arktype";

const RecipeSchema = type({
    id: "number",
    name: "string",
    ingredients: "string[]",
    instructions: "string[]",
    prepTimeMinutes: "number",
    cookTimeMinutes: "number",
    servings: "number",
    difficulty: "string",
    cuisine: "string",
    caloriesPerServing: "number",
    tags: "string[]",
    userId: "number",
    image: "string",
    rating: "number",
    reviewCount: "number",
    // mealType: "('Breakfast'|'Lunch'|'Dinner'|'Snack'|'Dessert'|'Brunch'|'Tea'|'Late Night'|[]"
    mealType:"string[]"
});
export const Recipe = RecipeSchema
export type Recipe = typeof Recipe.infer;

const RecipesResponse = type ({
    recipes: Recipe.array(),
    total: "number",
    skip: "number",
    limit: "number",
});
export type RecipesResponse = typeof RecipesResponse.infer;

export const getRecipes :() => Promise<Recipe[]> = async () => {
    const res = await fetch("https://dummyjson.com/recipes");
    const data = await res.json();
    const out = RecipesResponse(data);

    if (out instanceof type.errors) {

        throw new Error(out.summary)
    }
    // if (isArkErrors(result)) {
    //     console.error("Validation failed:", result.issues);
    //     throw new Error("Invalid recipe data");
    // }

    return out.recipes;
};

// function isArkErrors(obj: any): obj is ArkErrors {
//     return obj && typeof obj === "object" && "issues" in obj;
// }