
interface Quote {
  id: number;
  quote: string;
  author: string;
}

export const getQuotes: () => Promise<Quote[]> = async () => {
  const res = await fetch("https://dummyjson.com/quotes");
  return res.json();
};

export const getQuote: (id: number) => Promise<Quote> = async (id) =>{
  const res = await fetch(`https://dummyjson.com/quotes/${id}`);
  return res.json();
}
