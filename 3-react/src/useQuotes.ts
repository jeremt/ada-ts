import { useEffect, useState } from "react";

export const useQuotes = () => {
  const [quotes, setQuotes] = useState();

  const loadQuotes = async () => {
    const res = await fetch("https://dummyjson.com/quotes");
    setQuotes(await res.json());
  };

  useEffect(() => {
    loadQuotes();
  });
  return quotes;
};
