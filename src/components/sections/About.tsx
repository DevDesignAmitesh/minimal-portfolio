import { data } from "@/src/data/data";
import { BookOpenText, Github, Linkedin, Mail, Twitter } from "lucide-react";
import Image from "next/image";

const About = () => {
  const { name, socialLinks } = data;

  const socials = [
    { icon: Github, href: socialLinks.github, label: "GitHub" },
    { icon: Twitter, href: socialLinks.twitter, label: "Twitter" },
    { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn" },
    { icon: BookOpenText, href: socialLinks.medium, label: "Medium" },
    { icon: Mail, href: socialLinks.email, label: "Email" },
  ];

  return (
    <section className="hero-reveal py-12 md:py-16">
      <div className="max-w-3xl">
        <Image
          src="/profile.png"
          alt={`${name} profile photo`}
          width={160}
          height={160}
          priority
          className="mb-6 h-32 w-32 rounded-full object-cover ring-1 ring-border sm:h-36 sm:w-36 md:h-40 md:w-40"
        />

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

        <div className="mt-7 flex items-center gap-5">
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
      </div>
    </section>
  );
};

export default About;
