interface Quote {
  id: number;
  quote: string;
  author: string
}
interface QuotesDetails{
  quotes: Quote[];
  total: number;
  skip: number;
  limit: number
}

export const getQuotes  = async (): Promise<QuotesDetails> => {
  const res = await fetch("https://dummyjson.com/quotes"); 
  const data: QuotesDetails = await res.json()
  return data;
};


