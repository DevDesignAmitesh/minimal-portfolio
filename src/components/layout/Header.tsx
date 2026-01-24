import { Home, Sun, Moon, FileText } from "lucide-react";
import { useTheme } from "next-themes";
import Link from "next/link";

const Header = () => {
  const { theme, setTheme } = useTheme();

  return (
    <header className="py-8">
      <nav className="flex items-center justify-between">
        <Link
          href="/"
          className="text-muted-foreground hover:text-foreground transition-colors duration-200"
          aria-label="Home"
        >
          <Home className="h-5 w-5" />
        </Link>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            aria-label="Toggle theme"
          >
            <Sun className="h-5 w-5 hidden dark:block" />
            <Moon className="h-5 w-5 block dark:hidden" />
          </button>

          <Link
            href="/resume"
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
            aria-label="Resume"
          >
            <FileText className="h-5 w-5" />
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;
