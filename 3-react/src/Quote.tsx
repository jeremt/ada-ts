import type { QuoteJson } from "./useQuotes";

export const Quote = ({ quote }: { quote: QuoteJson }) => {
  return (
    <blockquote>
      {quote.quote} - {quote.author}
    </blockquote>
  );
};
