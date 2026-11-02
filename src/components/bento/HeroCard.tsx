import Image from "next/image";
import { data } from "@/src/data/data";
import Card from "./Card";
import ThemeToggle from "./ThemeToggle";
import ViewCounter from "./ViewCounter";

const HeroCard = ({ index, className }: { index: number; className?: string }) => {
  const { name, location, availability } = data;

  return (
    <Card index={index} className={`flex items-center gap-5 py-7 sm:py-8 xl:pl-24 ${className}`}>
      {/* On wide screens the avatar hangs off the card's left edge, like the reference. */}
      <Image
        src="/profile.png"
        alt={`${name} profile photo`}
        width={80}
        height={80}
        priority
        className="h-16 w-16 shrink-0 rounded-full object-cover ring-2 ring-background sm:h-20 sm:w-20 xl:absolute xl:-left-10 xl:top-1/2 xl:-translate-y-1/2"
      />

      <div className="min-w-0 pr-10">
        <h1 className="text-xl leading-snug tracking-[-0.04em] text-foreground sm:text-[22px]">
          I&apos;m {name},
          <br />
          <span className="font-bold">Backend Engineer</span> who loves <span className="font-bold">creating content</span>
        </h1>
        <p className="mt-2 flex flex-wrap items-center gap-x-3 text-sm text-muted-foreground sm:text-base">
          <span className="inline-flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" aria-hidden="true" />
            {availability}
          </span>
          <span>{location}</span>
          <ViewCounter />
        </p>
      </div>

      <ThemeToggle className="absolute right-4 top-4" />
    </Card>
  );
};

export default HeroCard;
