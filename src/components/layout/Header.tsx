"use client";

import { Home, Sun, Moon } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navLinks = [
  { href: "/experience", label: "experience" },
  { href: "/projects", label: "projects" },
  { href: "/blogs", label: "blogs" },
  { href: "/resume", label: "resume" },
];

const Header = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const pathname = usePathname();
  const isDark = resolvedTheme === "dark";

  return (
    <header className="py-8">
      <nav className="flex items-center justify-between gap-4">
        <Link
          href="/"
          className="text-sm font-medium text-foreground transition-colors duration-200 hover:text-muted-foreground"
          aria-label="Home"
        >
          <Home className="h-4 w-4" />
        </Link>

        <div className="flex items-center gap-3 text-sm sm:gap-4">
          {navLinks.map((link) => {
            const isActive = pathname === link.href || pathname.startsWith(`${link.href}/`);
            return (
              <Link
                key={link.href}
                href={link.href}
                aria-current={isActive ? "page" : undefined}
                className={`transition-colors duration-200 hover:text-foreground ${
                  isActive ? "text-foreground" : "text-muted-foreground"
                }`}
              >
                {link.label}
              </Link>
            );
          })}

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
