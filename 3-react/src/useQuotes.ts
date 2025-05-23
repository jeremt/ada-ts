import { useEffect, useState } from "react";
import type {QuoteType} from "./Quote.tsx";


export const useQuotes = () => {
  const [quotes, setQuotes] = useState<QuoteType[]>([]);

  const loadQuotes = async () => {
    const res = await fetch("https://dummyjson.com/quotes");
    const data = await res.json();
    setQuotes(data.quotes);
  };

  useEffect(() => {
   void loadQuotes();
  },[]);

  return quotes;
};
