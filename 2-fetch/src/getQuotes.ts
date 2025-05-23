export const getQuotes = async () => {
  const res = await fetch("https://dummyjson.com/quotes");
  return res.json();
};
