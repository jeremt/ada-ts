import type { QuoteType } from "./types";

export const Quote: React.FC<{quote: QuoteType}>  = ({ quote }) => {
  return (
    <blockquote>
      {quote.quote} - {quote.author}
    </blockquote>
  );
};
