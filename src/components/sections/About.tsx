import { data } from "@/src/data/data";

const About = () => {
  const { name } = data;

  return (
    <section className="hero-reveal py-12 md:py-16">
      <div className="max-w-3xl">
        <h1 className="text-3xl font-medium text-foreground md:text-4xl">
          {name}
        </h1>

        <p className="mt-3 text-sm font-medium text-muted-foreground md:text-base">
          Full-stack / Backend / DevOps
        </p>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          I build production-ready web applications, backend systems, and
          deployment workflows with a focus on clarity, reliability, and
          practical engineering.
        </p>
      </div>
    </section>
  );
};

export default About;
