import { data } from "@/src/data/data";
import Card from "./Card";

const BioCard = ({ index, className }: { index: number; className?: string }) => {
  const { bio } = data;

  return (
    <Card index={index} className={className}>
      <h2 className="text-lg leading-snug text-foreground">
        {bio.lead} <span className="font-bold">{bio.leadEmphasis}</span>
      </h2>

      <div className="mt-6 space-y-5 text-sm leading-relaxed text-muted-foreground">
        {bio.paragraphs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}
      </div>
    </Card>
  );
};

export default BioCard;
