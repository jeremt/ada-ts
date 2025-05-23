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