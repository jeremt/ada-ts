// import { getQuotes } from "./getQuotes";
import { getRecipes } from "./getRecipes";
import "./style.css";
const resultElement = document.querySelector("#result");
document.querySelector("#fetchBtn")?.addEventListener("click", async () => {
  // const quotes = await getQuotes();
  const recipes = await getRecipes();
  console.log(recipes.recipes[0].mealType);
  if (resultElement) {
    resultElement.innerHTML = JSON.stringify(recipes, null, 2);
  }
});
