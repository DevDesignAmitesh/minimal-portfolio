import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { data, type Experience as ExperienceEntry } from "@/src/data/data";

interface ExperienceProps {
  showAll?: boolean;
}

const CompanyName = ({ company, companyUrl }: ExperienceEntry) =>
  companyUrl ? (
    <a
      href={companyUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 underline-offset-4 hover:underline"
    >
      {company}
      <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground" aria-hidden="true" />
    </a>
  ) : (
    company
  );

const Experience = ({ showAll = false }: ExperienceProps) => {
  const { experience } = data;

  if (experience.length === 0) return null;

  if (!showAll) {
    return (
      <section className="py-12 md:py-16">
        <h2 className="text-2xl font-medium text-foreground md:text-3xl">
          Experience
        </h2>

        <div className="mt-8 divide-y divide-border">
          {experience.slice(0, 3).map((exp) => (
            <Link
              key={exp.company}
              href="/experience"
              className="flex flex-col gap-1 py-4 transition-colors hover:text-foreground sm:flex-row sm:items-baseline sm:justify-between"
            >
              <span>
                <span className="font-medium text-foreground">{exp.company}</span>
                <span className="text-muted-foreground"> · {exp.role}</span>
              </span>
              <span className="shrink-0 text-sm text-muted-foreground">{exp.period}</span>
            </Link>
          ))}
        </div>

        <div className="mt-8">
          <Link
            href="/experience"
            className="inline-flex w-full items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-foreground/80 ring-1 ring-border transition-colors hover:bg-muted hover:text-foreground"
          >
            View all experience
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="py-12 md:py-16">
      <h1 className="mb-8 text-2xl font-medium text-foreground md:text-3xl">
        Experience
      </h1>
      <div className="space-y-10">
        {experience.map((exp) => (
          <article key={exp.company}>
            <div className="mb-1 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
              <h2 className="text-lg font-medium text-foreground">
                <CompanyName {...exp} />
              </h2>
              <span className="text-sm text-muted-foreground">{exp.period}</span>
            </div>
            <p className="mb-3 text-sm font-medium text-foreground/80">{exp.role}</p>
            <p className="leading-relaxed text-muted-foreground">{exp.description}</p>

            {exp.highlights.length > 0 ? (
              <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-muted-foreground">
                {exp.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            ) : null}
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
