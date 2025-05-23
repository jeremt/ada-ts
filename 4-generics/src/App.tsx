import "./App.css";
import { Quote } from "./Quote";
import { useQuotes } from "./useQuotes";

function App() {
  const data = useQuotes();

  if (data === undefined) {
    return <div>Loading…</div>;
  }
  return (
    <>
      {data.quotes.map((quote) => (
        <Quote key={quote.id} quote={quote} />
      ))}
    </>
  );
}

export default App;
