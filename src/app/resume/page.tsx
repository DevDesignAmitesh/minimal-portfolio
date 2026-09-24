import { Download, ExternalLink } from "lucide-react";
import { data } from "@/src/data/data";

export const metadata = {
  title: "Resume",
  description: "Resume of Amitesh Singh, backend and real-time systems engineer.",
};

export default function Resume() {
  const { resume } = data;

  return (
    <div className="py-12">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h1 className="text-2xl font-medium text-foreground md:text-3xl">Resume</h1>
        <div className="flex flex-wrap gap-2">
          <a
            href={resume.downloadUrl}
            download="Amitesh-Singh-Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-opacity hover:opacity-85"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            Download PDF
          </a>
          <a
            href={resume.downloadUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium text-foreground ring-1 ring-border transition-colors hover:bg-muted"
          >
            <ExternalLink className="h-4 w-4" aria-hidden="true" />
            Open in new tab
          </a>
        </div>
      </div>

      <iframe
        src={resume.downloadUrl}
        className="h-[90vh] w-full rounded-lg border"
        title="Amitesh Singh resume"
      />
    </div>
  );
}
