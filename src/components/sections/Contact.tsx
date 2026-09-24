import { data } from "@/src/data/data";
import { Mail, Twitter } from "lucide-react";

const Contact = () => {
  const { email, socialLinks } = data;

  return (
    <section className="py-12 md:py-16">
      <h2 className="text-2xl font-medium text-foreground md:text-3xl">
        Contact
      </h2>
      <p className="mt-4 max-w-2xl leading-relaxed text-muted-foreground">
        Open to backend, real-time systems, and AI-agent roles. Say hi.
      </p>

      <div className="mt-6 flex flex-wrap gap-3">
        <a
          href={`mailto:${email}`}
          className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
        >
          <Mail className="h-4 w-4" aria-hidden="true" />
          {email}
        </a>
        <a
          href={socialLinks.twitter}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-foreground ring-1 ring-border transition-colors hover:bg-muted"
        >
          <Twitter className="h-4 w-4" aria-hidden="true" />
          X (Twitter)
        </a>
      </div>
    </section>
  );
};

export default Contact;
