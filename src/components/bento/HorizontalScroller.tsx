"use client";

import { ChevronLeft, ChevronRight } from "lucide-react";
import { useRef, type ReactNode } from "react";

const arrowClass =
  "absolute top-1/2 z-10 hidden h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-black/80 text-white ring-1 ring-white/10 transition-opacity hover:opacity-80 sm:flex";

const HorizontalScroller = ({ children, label }: { children: ReactNode; label: string }) => {
  const scroller = useRef<HTMLDivElement>(null);

  const scroll = (direction: 1 | -1) => {
    const el = scroller.current;
    if (el) el.scrollBy({ left: direction * el.clientWidth * 0.75, behavior: "smooth" });
  };

  return (
    <div className="relative">
      <div
        ref={scroller}
        aria-label={label}
        className="no-scrollbar flex snap-x snap-mandatory items-start gap-4 overflow-x-auto lg:gap-6"
      >
        {children}
      </div>

      <button onClick={() => scroll(-1)} className={`${arrowClass} -left-3`} aria-label="Scroll left">
        <ChevronLeft className="h-4 w-4" />
      </button>
      <button onClick={() => scroll(1)} className={`${arrowClass} -right-3`} aria-label="Scroll right">
        <ChevronRight className="h-4 w-4" />
      </button>
    </div>
  );
};

export default HorizontalScroller;
