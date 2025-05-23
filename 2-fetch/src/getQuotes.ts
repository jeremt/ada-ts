type Quote = {
  id: number;
  quote: string;
  author: string;
};

export const getQuotes = async () => {
  const res = await fetch("https://dummyjson.com/quotes");
  return (await res.json()) as { quotes: Quote[] };
};
