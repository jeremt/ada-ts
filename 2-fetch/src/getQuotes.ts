type Quote = {
  id: number;
  quote: string;
  author: string;
};

type QuoteResponse = {
  quotes: Quote[];
  total: number;
  skip: number;
  limit: number;
};

export const getQuotes = async () => {
  const res = await fetch("https://dummyjson.com/quotes");
  return (await res.json()) as QuoteResponse;
};
