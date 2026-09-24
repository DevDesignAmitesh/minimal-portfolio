export const isVideoFile = (src: string) => /\.(mp4|webm)(\?.*)?$/i.test(src);

interface ProjectVideoProps {
  title: string;
  video: string;
  poster?: string;
}

const ProjectVideo = ({ title, video, poster }: ProjectVideoProps) => (
  <div className="aspect-video overflow-hidden rounded-lg bg-muted ring-1 ring-border">
    {isVideoFile(video) ? (
      <video
        src={video}
        poster={poster}
        controls
        playsInline
        preload="metadata"
        className="h-full w-full object-cover"
        aria-label={`${title} demo`}
      />
    ) : (
      <iframe
        src={video}
        title={`${title} demo`}
        loading="lazy"
        allow="autoplay; fullscreen; picture-in-picture"
        allowFullScreen
        className="h-full w-full"
      />
    )}
  </div>
);

export default ProjectVideo;
