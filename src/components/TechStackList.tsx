interface TechStackListProps {
  items: string[];
  className?: string;
}

const TechStackList = ({ items, className = "" }: TechStackListProps) => {
  if (items.length === 0) return null;

  return (
    <div className={`flex flex-wrap gap-2 ${className}`.trim()}>
      {items.map((item) => (
        <span
          key={item}
          className="rounded-full border border-transparent px-3 py-1 text-xs font-medium text-foreground/80 ring-1 ring-border/40"
        >
          {item}
        </span>
      ))}
    </div>
  );
};

export default TechStackList;
