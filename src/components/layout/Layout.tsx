import { ReactNode } from "react";
import { data } from "@/src/data/data";
import Header from "./Header";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <div className="max-w-3xl mx-auto px-4 flex-1 w-full">
        <Header />
        <main className="pb-16">{children}</main>
        <footer className="flex flex-col gap-2 border-t border-border py-8 text-sm text-muted-foreground sm:flex-row sm:justify-between">
          <span>
            © {new Date().getFullYear()} {data.name} · {data.location}
          </span>
          <a
            href={`mailto:${data.email}`}
            className="transition-colors hover:text-foreground"
          >
            {data.email}
          </a>
        </footer>
      </div>
    </div>
  );
};

export default Layout;
