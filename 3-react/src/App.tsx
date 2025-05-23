import "./App.css";
import { Quote } from "./Quote";
import { useQuotes } from "./useQuotes";

function App() {
  const quotes = useQuotes();

  if (!quotes.length) {
    return <div>Loading…</div>;
  }
  return (
    <>
      {quotes.map((quote) => (
        <Quote key={quote.id} quote={quote} />
      ))}
    </>
  );
}

export default App;
