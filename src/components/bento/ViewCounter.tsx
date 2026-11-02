"use client";

import { Eye } from "lucide-react";
import { useEffect, useState } from "react";

const seenKey = "portfolio:viewed";

// Counts one view per browser session; later page loads in the same session only read the total.
const ViewCounter = () => {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const firstVisit = !sessionStorage.getItem(seenKey);
    fetch("/api/views", { method: firstVisit ? "POST" : "GET" })
      .then((response) => response.json())
      .then(({ views }: { views: number | null }) => {
        if (firstVisit) sessionStorage.setItem(seenKey, "1");
        setViews(views);
      })
      .catch(() => {});
  }, []);

  if (views === null) return null;

  return (
    <span className="inline-flex items-center gap-1.5" title="Total site views">
      <Eye className="h-3.5 w-3.5" aria-hidden="true" />
      {views.toLocaleString("en-US")} views
    </span>
  );
};

export default ViewCounter;
