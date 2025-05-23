export const Quote = ({ quote }) => {
  return (
    <blockquote>
      {quote.quote} - {quote.author}
    </blockquote>
  );
};
