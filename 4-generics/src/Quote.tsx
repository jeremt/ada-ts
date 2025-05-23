import type { DummyJson } from "./DummyJson";

export const Quote = ({ quote }: { quote: DummyJson["quotes"] }) => {
  return (
    <blockquote>
      {quote.quote} - {quote.author}
    </blockquote>
  );
};
