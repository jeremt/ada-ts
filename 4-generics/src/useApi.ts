import { useEffect, useState } from "react";

export const useApi = <ApiType, KeyType extends keyof ApiType = keyof ApiType>(
  url: string,
  route: KeyType
): { [K in KeyType]: ApiType[K][] } | undefined => {
  const [data, setData] = useState<{ [K in KeyType]: ApiType[K][] }>();

  const loadData = async () => {
    const res = await fetch(`${url}/${route as string}`);
    setData(await res.json());
  };

  useEffect(() => {
    loadData();
  });
  return data;
};
