import { data } from "@/src/data/data";
import Card from "./Card";

// Renders **text** as a highlight so the key points stand out on a skim.
const Highlighted = ({ text }: { text: string }) =>
  text.split(/\*\*(.+?)\*\*/g).map((part, i) =>
    i % 2 === 1 ? (
      <mark key={i} className="rounded bg-amber-200/70 px-0.5 font-medium text-foreground dark:bg-amber-400/25">
        {part}
      </mark>
    ) : (
      part
    ),
  );

const BioCard = ({ index, className }: { index: number; className?: string }) => {
  const { bio } = data;

  return (
    <Card index={index} className={className}>
      <h2 className="text-lg leading-snug text-foreground">
        {bio.lead} <span className="font-bold">{bio.leadEmphasis}</span>
      </h2>

      <div className="mt-6 space-y-5 text-sm leading-relaxed text-muted-foreground">
        {bio.paragraphs.map((paragraph) => (
          <p key={paragraph}>
            <Highlighted text={paragraph} />
          </p>
        ))}
      </div>
    </Card>
  );
};

export default BioCard;
