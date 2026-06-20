import { data } from "@/src/data/data";

export default function Resume() {
  const { resume } = data;

  return (
    <div className="py-12">
      <div className="space-y-6">
        <iframe
            src={resume.downloadUrl}
            className="w-full h-[90vh] rounded-lg border"
            title="Resume"
          />
      </div>
    </div>
  );
}
