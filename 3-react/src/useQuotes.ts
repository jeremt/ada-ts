import { useEffect, useState } from "react";

export type QuoteJson = {
  id: number;
  quote: string;
  author: string;
};

export const useQuotes = () => {
  const [quotes, setQuotes] = useState<{ quotes: QuoteJson[] }>();

  const loadQuotes = async () => {
    const res = await fetch("https://dummyjson.com/quotes");
    setQuotes(await res.json());
  };

  useEffect(() => {
    loadQuotes();
  });
  return quotes;
};
