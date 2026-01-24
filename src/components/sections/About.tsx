import { data } from "@/src/data/data";
import { Github, Twitter, Linkedin, Mail } from "lucide-react";

const About = () => {
  const { name, title, tagline, about, socialLinks } = data;

  const socials = [
    { icon: Github, href: socialLinks.github, label: "GitHub" },
    { icon: Twitter, href: socialLinks.twitter, label: "Twitter" },
    { icon: Linkedin, href: socialLinks.linkedin, label: "LinkedIn" },
    { icon: Mail, href: socialLinks.email, label: "Email" },
  ];

  return (
    <section className="py-12">
      <h1 className="text-4xl md:text-5xl font-medium text-foreground mb-2">
        {name}
      </h1>
      <p className="text-lg text-muted-foreground mb-6">{title}</p>
      <p className="text-foreground text-lg leading-relaxed mb-4">{tagline}</p>
      <p className="text-muted-foreground leading-relaxed mb-8">{about}</p>

      <div className="flex items-center gap-5">
        {socials.map(({ icon: Icon, href, label }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
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
