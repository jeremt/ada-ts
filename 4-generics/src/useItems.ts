import { useEffect, useState } from "react";

export const useItems = <T>(url: string): T[] | undefined => {
  const [items, setItems] = useState<T[]>();

  const fetchItems = async () => {
    const res = await fetch(url);
    const data = await res.json();
    setItems(data.quotes || data.recipes);
  };

  useEffect(() => {
   void fetchItems();
  },[url]);

  return items;
};

