// VideoEmbed — responsive 16:9 iframe for YouTube or Vimeo
// Swap PlaceholderImage for this component once a project has videoEmbedUrl

interface VideoEmbedProps {
  embedUrl: string;
  title?: string;
  className?: string;
}

export function VideoEmbed({ embedUrl, title = "Video", className = "" }: VideoEmbedProps) {
  return (
    <div
      className={`relative w-full overflow-hidden bg-[var(--color-ground-raised)] ${className}`}
      style={{ aspectRatio: "16 / 9" }}
    >
      <iframe
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
        loading="lazy"
        className="absolute inset-0 w-full h-full"
        style={{ border: 0 }}
      />
    </div>
  );
}
