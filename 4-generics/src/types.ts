export type QuoteType = {
  id: number;
  quote: string;
  author: string
}
export interface QuotesDetails{
  quotes: QuoteType[];
  total: number;
  skip: number;
  limit: number
}

export type RecipeType = {
  id: number;
  name: string
}
export interface RecipeDetails{
  recipes: RecipeType[];
  total: number;
  skip: number;
  limit: number
}