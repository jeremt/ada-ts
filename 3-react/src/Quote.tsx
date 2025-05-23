import * as React from "react";

export interface QuoteType {
  id: number;
  quote: string;
  author: string;
}


export const Quote: React.FC<{ quote: QuoteType }>  = ({ quote }) => {
  return (
    <blockquote>
      {quote.quote} - {quote.author}
    </blockquote>
  );
};


