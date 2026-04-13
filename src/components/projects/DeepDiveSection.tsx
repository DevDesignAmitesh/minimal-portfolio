import { ReactNode } from "react";

interface DeepDiveSectionProps {
  title: string;
  children: ReactNode;
}

const DeepDiveSection = ({ title, children }: DeepDiveSectionProps) => {
  return (
    <section className="py-2">
      <h2 className="text-lg font-medium text-foreground md:text-xl">{title}</h2>
      <div className="mt-4 text-sm leading-relaxed text-muted-foreground md:text-base">
        {children}
      </div>
    </section>
  );
};

export default DeepDiveSection;
