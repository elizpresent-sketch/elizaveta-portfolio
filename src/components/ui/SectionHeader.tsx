// ─────────────────────────────────────────────────────────────
// SectionHeader — Eyebrow + Display Headline lockup
// Used at the top of every named section across the site
// ─────────────────────────────────────────────────────────────

interface SectionHeaderProps {
  eyebrow: string;
  headline: string;
  lead?: string;
  mode?: "dark" | "gallery";
  centered?: boolean;
  className?: string;
}

export function SectionHeader({
  eyebrow,
  headline,
  lead,
  mode = "dark",
  centered = false,
  className = "",
}: SectionHeaderProps) {
  const textSec = mode === "gallery" ? "text-[var(--color-gallery-mid)]" : "text-[var(--color-text-secondary)]";
  const textPri = mode === "gallery" ? "text-[var(--color-gallery-text)]" : "text-[var(--color-text-primary)]";
  const align = centered ? "text-center" : "text-left";

  return (
    <div className={`${align} ${className}`}>
      <p className={`type-label ${textSec} mb-4`}>{eyebrow}</p>
      <h2 className={`type-display ${textPri}`}>{headline}</h2>
      {lead && (
        <p className={`type-subheading ${textSec} mt-6 max-w-2xl ${centered ? "mx-auto" : ""}`}>
          {lead}
        </p>
      )}
    </div>
  );
}
