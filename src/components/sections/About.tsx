import { data } from "@/src/data/data";
import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";

const About = () => {
  const { name, socialLinks } = data;

  const socials = [
    { icon: Github, href: socialLinks.github, label: "GitHub" },
    { icon: Twitter, href: socialLinks.twitter, label: "Twitter" },
    { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn" },
    { icon: Mail, href: socialLinks.email, label: "Email" },
  ];

  return (
    <section className="hero-reveal py-14 md:py-20">
      <div className="max-w-3xl">
        <p className="text-base font-medium tracking-[0.08em] text-muted-foreground uppercase md:text-lg">
          Full-stack engineer &middot; Real-time systems &middot; Backend
          architecture
        </p>

        <p className="mt-3 text-2xl font-semibold text-foreground md:text-3xl">
          {name}
        </p>

        <h1 className="mt-8 text-2xl font-medium leading-tight tracking-tight text-foreground md:text-4xl">
          I build real-time systems, scalable backends, and production-ready
          applications.
        </h1>

        <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
          I design and ship systems using WebSockets, Redis, and RAG pipelines,
          with a focus on performance, reliability, and clean architecture.
        </p>

        <p className="mt-4 text-sm font-medium text-foreground/80 md:text-base">
          Built and deployed multiple real-time applications with production
          infrastructure.
        </p>

        <div className="hero-reveal-delay mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-full bg-foreground px-5 py-2.5 text-sm font-medium text-background transition-opacity duration-200 hover:opacity-90"
          >
            View Projects
          </Link>
          <Link
            href="/resume"
            className="inline-flex items-center justify-center rounded-full px-5 py-2.5 text-sm font-medium text-foreground/80"
          >
            Resume
          </Link>
        </div>
      </div>

      <div className="mt-8 flex items-center gap-5">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
            aria-label={label}
          >
            <Icon className="h-5 w-5" />
          </a>
        ))}
      </div>
    </section>
  );
};

export default About;
