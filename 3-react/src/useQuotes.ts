import { useEffect, useState } from "react";
import type { QuotesDetails } from "./types";



export const useQuotes = ()=> {
  const [quotes, setQuotes] = useState<QuotesDetails>();

  const loadQuotes = async (): Promise<void> => {
    const res = await fetch("https://dummyjson.com/quotes");
    setQuotes(await res.json());
  };

  useEffect(() => {
    loadQuotes();
  });
  return quotes;
};
