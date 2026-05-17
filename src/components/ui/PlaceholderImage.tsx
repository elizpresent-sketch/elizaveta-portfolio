// ─────────────────────────────────────────────────────────────
// PlaceholderImage — shows a labelled placeholder until real
// images are dropped in. Remove this component once images exist.
// ─────────────────────────────────────────────────────────────

interface PlaceholderImageProps {
  label?: string;
  className?: string;
  aspectRatio?: string; // e.g. "3/2", "16/9", "4/5", "1/1"
}

export function PlaceholderImage({
  label = "Image",
  className = "",
  aspectRatio = "3/2",
}: PlaceholderImageProps) {
  return (
    <div
      className={`img-placeholder w-full ${className}`}
      style={{ aspectRatio }}
      aria-hidden="true"
    >
      <span className="type-micro opacity-50">{label}</span>
    </div>
  );
}
