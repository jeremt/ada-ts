import "./App.css";
import type { DummyJson } from "./DummyJson";
import { Quote } from "./Quote";
import { useApi } from "./useApi";

function App() {
  const res = useApi<DummyJson>(`https://dummyjson.com`, "quotes");

  if (res === undefined) {
    return <div>Loading…</div>;
  }
  return (
    <>
      {res.quotes.map((quote) => (
        <Quote key={quote.id} quote={quote} />
      ))}
    </>
  );
}

export default App;
