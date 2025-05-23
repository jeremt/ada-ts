import { useEffect, useState } from "react";

export const useApi = <T> (name: string)=> {
  const [data, setData] = useState<T>();

  const loadData = async (): Promise<void> => {
    const res = await fetch("https://dummyjson.com/"+name);
    setData(await res.json());
  };

  useEffect(() => {
    loadData();
  });
  return data;
}




