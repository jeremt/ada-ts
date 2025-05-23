import "./App.css";
import { Recipe } from "./Recipe";
import type { RecipeDetails } from "./types";
import { useApi } from "./useQuotes";

function App() {
  const data= useApi<RecipeDetails>("recipes");

  if (data === undefined) {
    return <div>Loading…</div>;
  }
  return (
    <>
      {data.recipes.map((recipe) => (
      <Recipe key={recipe.id} recipe={recipe} />
    ))}
    </>
  );
}

export default App;
