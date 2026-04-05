import { data } from "@/src/data/data";
import { ArrowLeft, Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Resume() {
  const { resume } = data;

  return (
    <div className="py-12">
      <Link
        href="/"
        className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors duration-200 mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        <span>Back</span>
      </Link>
      <div className="space-y-6">
        <Image
          height={100}
          width={100}
          loading="lazy"
          unoptimized
          src={resume.imageUrl}
          alt="Resume"
          className="w-full max-w-2xl mx-auto bg-muted"
        />

        <div className="flex justify-center">
          <a
            href={resume.downloadUrl}
            download
            className="inline-flex items-center gap-2 px-4 py-2 text-foreground hover:text-muted-foreground transition-colors duration-200"
          >
            <Download className="h-4 w-4" />
            <span>Download Resume</span>
          </a>
        </div>
      </div>
    </div>
  );
}
