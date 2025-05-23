import { useEffect, useState } from "react";

export const useApi = <T> ()=> {
  const [data, setData] = useState<T>();

  const loadData = async (): Promise<void> => {
    const res = await fetch("https://dummyjson.com/quotes");
    setData(await res.json());
  };

  useEffect(() => {
    loadData();
  });
  return data;
}




