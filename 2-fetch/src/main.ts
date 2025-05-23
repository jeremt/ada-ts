import { getQuotes } from "./getQuotes";
import "./style.css";
const resultElement = document.querySelector("#result");
document.querySelector("#fetchBtn")?.addEventListener("click", async () => {
  const result = await getQuotes();
  if (resultElement) {
    resultElement.innerHTML = JSON.stringify(result, null, 2);
  }
});
