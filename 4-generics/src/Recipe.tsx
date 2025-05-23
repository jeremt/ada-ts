import type { RecipeType } from "./types";

export const Recipe: React.FC<{ recipe: RecipeType }> = ({ recipe }) => {
    return (
        <blockquote>
          {recipe.name}
        </blockquote>
      );
};
