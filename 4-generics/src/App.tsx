import "./App.css";
import {DisplayItem, Quote, type QuoteType, Recipe, type RecipeType} from "./ItemType.tsx";
import {useItems} from "./useItems.ts";
import {useState} from "react";

const urls= {
  quotes: "https://dummyjson.com/quotes",
  recipes: "https://dummyjson.com/recipes"
};


function App() {
  const [selectedUrl, setSelectedUrl]=useState(urls.quotes)
  const items = selectedUrl === urls.quotes
      ? useItems<QuoteType>(selectedUrl)
      : useItems<RecipeType>(selectedUrl);

  if (!items) {
    return <div>Loading…</div>;
  }
  const renderItem = (item: QuoteType | RecipeType) => {
    if (selectedUrl === urls.quotes) {
      return <Quote quote={item as QuoteType} />;
    }
    if (selectedUrl === urls.recipes) {
      return <Recipe recipe={item as RecipeType} />;
    }
    return null;
  };

  return (
      <>
        <select
            onChange={(e) => setSelectedUrl(e.target.value)}
            value={selectedUrl}
        >
          <option value={urls.quotes}>Quotes</option>
          <option value={urls.recipes}>Recipes</option>
        </select>

        {items.map((item) => (
            <DisplayItem key={item.id} item={item} render={renderItem} />
        ))}
      </>
  );
}

export default App;