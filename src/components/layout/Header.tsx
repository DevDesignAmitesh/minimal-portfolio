"use client";

import { Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

const navLinks = [
  { href: "/blogs", label: "blogs" },
  { href: "/projects", label: "projects" },
  { href: "/resume", label: "resume" },
];

const Header = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  return (
    <header className="py-8">
      <nav className="flex items-center justify-between">
        <Link
          href="/"
          className="text-sm font-medium text-foreground transition-colors duration-200 hover:text-muted-foreground"
          aria-label="Home"
        >
          amitesh
        </Link>

        <div className="flex items-center gap-4 text-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}

          <button
            onClick={() => setTheme(isDark ? "light" : "dark")}
            className="text-muted-foreground transition-colors duration-200 hover:text-foreground"
            aria-label="Toggle theme"
          >
            {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
