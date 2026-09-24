import { data } from "@/src/data/data";
import { BookOpenText, FileText, Github, Linkedin, Mail, MapPin, Twitter } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const About = () => {
  const { name, headline, about, location, availability, email, socialLinks } = data;

  const socials = [
    { icon: Github, href: socialLinks.github, label: "GitHub" },
    { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn" },
    { icon: Twitter, href: socialLinks.twitter, label: "X (Twitter)" },
    { icon: BookOpenText, href: socialLinks.medium, label: "Medium" },
  ];

  return (
    <section className="hero-reveal py-12 md:py-16">
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

      <p className="mt-3 text-base font-medium text-foreground/80 md:text-lg">
        {headline}
      </p>

      <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-1.5">
          <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
          {location}
        </span>
        <span className="inline-flex items-center gap-1.5">
          <span className="h-2 w-2 rounded-full bg-emerald-500" aria-hidden="true" />
          {availability}
        </span>
      </div>

      <p className="mt-6 max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
        {about}
      </p>

      <div className="mt-7 flex flex-wrap items-center gap-3">
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          Email me
        </a>
        <Link
          href="/resume"
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-foreground ring-1 ring-border transition-colors hover:bg-muted"
        >
          <FileText className="h-4 w-4" aria-hidden="true" />
          Resume
        </Link>

        <div className="ml-1 flex items-center gap-4">
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
