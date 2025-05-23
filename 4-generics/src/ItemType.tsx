
import  {type ReactNode } from "react";


interface ItemType<T>{
  item: T;
  render:((item:T)=> ReactNode);
}

export function DisplayItem<T>({ item, render }: ItemType<T>) {
  return <>{render(item)}</>;
}

export interface QuoteType {
  id: number;
  quote: string;
  author: string;
}

export interface RecipeType {
  id: number;
  title: string;
  ingredients: string[];
}


export const Quote: React.FC<{ quote: QuoteType }> = ({ quote }) => (
    <blockquote>
      {quote.quote} — <i>{quote.author}</i>
    </blockquote>
);

export const Recipe: React.FC<{ recipe: RecipeType }> = ({ recipe }) => (
    <div>
      <h3>{recipe.title}</h3>
      <ul>
        {recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
        ))}
      </ul>
    </div>
);
// export const Quote = ({ quote }) => {
//   return (
//     <blockquote>
//       {quote.quote} - {quote.author}
//     </blockquote>
//   );
// };
