import { ArrowUpRight, Flame } from "lucide-react";
import { data } from "@/src/data/data";
import Card, { IconBadge } from "./Card";

const Super30Card = ({ index, className }: { index: number; className?: string }) => {
  const { name, org, orgUrl, period, tagline, description, builds } = data.super30;

  return (
    <Card index={index} className={`flex flex-col ${className}`}>
      <div className="flex items-start gap-3">
        <IconBadge>
          <Flame className="h-5 w-5" />
        </IconBadge>
        <div className="min-w-0">
          <h2 className="text-lg leading-snug text-foreground">
            {name} ·{" "}
            <a href={orgUrl} target="_blank" rel="noopener noreferrer" className="hover:underline hover:underline-offset-4">
              {org}
            </a>
          </h2>
          <p className="text-sm text-muted-foreground">{tagline}</p>
        </div>
      </div>

      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{description}</p>

      <p className="mt-5 text-xs font-medium uppercase tracking-wider text-subtle">Shipped here</p>
      <ul className="mt-2 flex flex-wrap gap-2">
        {builds.map((build) => (
          <li key={build.label}>
            <a
              href={build.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 rounded-lg bg-pill px-2.5 py-1 text-xs text-foreground transition-opacity hover:opacity-80"
            >
              {build.label}
              <ArrowUpRight className="h-3 w-3 text-subtle" aria-hidden="true" />
            </a>
          </li>
        ))}
      </ul>

      <p className="mt-auto pt-5 text-xs text-subtle">
        <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-emerald-500 align-middle" aria-hidden="true" />
        {period}
      </p>
    </Card>
  );
};

export default Super30Card;
