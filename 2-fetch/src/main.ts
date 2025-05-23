import {getQuote, getQuotes} from "./getQuotes";
import "./style.css";
import {getRecipes} from "./getRecipes.ts";

const resultElement = document.querySelector("#result");
const quoteIdInput = document.querySelector<HTMLInputElement>("#quoteIdInput");

//Bouton afficher les Quotes
document.querySelector("#fetchBtn")?.addEventListener("click", async () => {
  const result = await getQuotes();
  if (resultElement) {
    resultElement.innerHTML = JSON.stringify(result, null, 2);
  }
});
//Bouton Afficher une Quote
document.querySelector("#fetchByIdBtn")?.addEventListener("click", async () => {
  const id = Number(quoteIdInput?.value);
  if (!isNaN(id) && id > 0) {
    const result = await getQuote(id);
    if (resultElement) {
      resultElement.innerHTML = JSON.stringify(result, null, 2);
    }
  } else {
    if (resultElement) {
      resultElement.innerHTML = "Please enter a valid quote ID";
    }
  }
});
//Bouton Afficher les recettes
document.querySelector("#fetchAllRecipesBtn")?.addEventListener("click", async () => {
    const recipes = await getRecipes();
    if(resultElement){
      resultElement.innerHTML = JSON.stringify(recipes, null, 2);

    }

});