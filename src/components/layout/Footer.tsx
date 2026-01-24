import { data } from "@/src/data/data";
import Link from "next/link";

const Footer = () => {
  const { inspirations } = data;

  if (inspirations.length === 0) return null;

  return (
    <footer className="py-12 text-center">
      <p className="text-sm text-muted-foreground">
        credits to{" "}
        {inspirations.map((inspiration) => (
          <>
            <Link
              href={inspiration.url}
              target="_blank"
              rel="noopener noreferrer"
              className="font-medium text-foreground hover:text-muted-foreground transition-colors duration-200"
            >
              @{inspiration.name}
            </Link>{" "}
          </>
        ))}
      </p>
    </footer>
  );
};

export default Footer;
