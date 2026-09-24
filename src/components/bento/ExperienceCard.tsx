import { data } from "@/src/data/data";
import Card from "./Card";

const ExperienceCard = ({ index, className }: { index: number; className?: string }) => (
  <Card index={index} className={className}>
    <h2 className="text-lg leading-snug text-foreground">Where I&apos;ve worked</h2>
    <p className="text-sm text-muted-foreground">Founding engineer and contract builds.</p>

    <ul className="mt-5 space-y-2">
      {data.experience.map((exp) => (
        <li key={exp.company} className="flex gap-3 rounded-xl bg-pill/60 p-3">
          <span
            className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-pill text-sm font-bold text-foreground"
            aria-hidden="true"
          >
            {exp.company[0]}
          </span>
          <div className="min-w-0 flex-1">
            <h3 className="text-sm font-medium text-foreground">{exp.company}</h3>
            <p className="text-xs text-muted-foreground">{exp.role}</p>
            <p className="text-xs whitespace-nowrap text-subtle">{exp.period}</p>
            <p className="mt-1.5 text-xs leading-relaxed text-muted-foreground">{exp.summary}</p>
          </div>
        </li>
      ))}
    </ul>
  </Card>
);

export default ExperienceCard;
