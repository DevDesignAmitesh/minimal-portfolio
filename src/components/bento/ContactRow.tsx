import { data } from "@/src/data/data";
import { LinkedInLogo, XLogo } from "./BrandIcons";
import Card from "./Card";

export const ContactCard = ({ index, className }: { index: number; className?: string }) => (
  <Card index={index} className={`flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between ${className}`}>
    <p className="text-base text-muted-foreground">
      <span className="font-bold text-foreground">Let&apos;s work together</span>
      <span className="mx-2 text-foreground">—</span>
      To get started, have a 1:1 chat with me!
    </p>
    <a
      href={`mailto:${data.email}`}
      className="w-fit shrink-0 rounded-lg bg-primary px-3 py-1.5 text-sm font-bold text-primary-foreground transition-opacity hover:opacity-85"
    >
      Email me
    </a>
  </Card>
);

export const SocialTiles = ({ index, className }: { index: number; className?: string }) => (
  <div className={`grid grid-cols-2 gap-4 lg:gap-6 ${className}`}>
    <Card
      index={index}
      href={data.socialLinks.linkedin}
      className="flex min-h-28 items-center justify-center text-foreground"
    >
      <LinkedInLogo className="h-7 w-7" />
      <span className="sr-only">LinkedIn</span>
    </Card>
    <Card
      index={index + 1}
      href={data.socialLinks.twitter}
      className="flex min-h-28 items-center justify-center text-foreground"
    >
      <XLogo className="h-7 w-7" />
      <span className="sr-only">X (Twitter)</span>
    </Card>
  </div>
);
