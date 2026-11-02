import type { CSSProperties, ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  // Position in the grid, used to stagger the entrance animation.
  index?: number;
  dashed?: boolean;
  href?: string;
}

const Card = ({ children, className = "", index = 0, dashed = false, href }: CardProps) => {
  const classes = `bento-reveal relative rounded-bento p-5 sm:p-6 ${
    dashed ? "border border-dashed border-outline bg-card dark:bg-transparent" : "bg-card"
  } ${className}`;
  const style = { "--i": index } as CSSProperties;

  if (href) {
    const external = /^https?:|\.pdf$/.test(href);
    return (
      <a
        href={href}
        className={classes}
        style={style}
        {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
      >
        {children}
      </a>
    );
  }

  return (
    <div className={classes} style={style}>
      {children}
    </div>
  );
};

export const IconBadge = ({ children }: { children: ReactNode }) => (
  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-[10px] bg-foreground text-background">
    {children}
  </span>
);

export const CardHeader = ({
  icon,
  title,
  subtitle,
}: {
  icon?: ReactNode;
  title: string;
  subtitle?: string;
}) => (
  <div className="flex items-start gap-3">
    {icon ? <IconBadge>{icon}</IconBadge> : null}
    <div className="min-w-0">
      <h2 className="text-lg leading-snug text-foreground">{title}</h2>
      {subtitle ? <p className="text-sm text-muted-foreground">{subtitle}</p> : null}
    </div>
  </div>
);

export default Card;
