import { data } from "@/src/data/data";

const Experience = () => {
  const { experience } = data;

  if (experience.length === 0) return null;

  return (
    <section className="py-12">
      <h2 className="text-2xl font-medium text-foreground mb-8">Experience</h2>
      <div className="space-y-8">
        {experience.map((exp, index) => (
          <article key={index}>
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-1 mb-2">
              <h3 className="text-foreground font-medium">{exp.company}</h3>
              <span className="text-sm text-muted-foreground">
                {exp.period}
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-2">{exp.role}</p>
            <p className="text-muted-foreground leading-relaxed">
              {exp.description}
            </p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Experience;
