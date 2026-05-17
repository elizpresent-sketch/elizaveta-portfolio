// ─────────────────────────────────────────────────────────────
// ProjectCard — Work, Live, Art Direction pages
// Routes to /projects/[slug] when hasProjectPage is true
// ─────────────────────────────────────────────────────────────

import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
  size?: "default" | "feature";
  imagePosition?: string; // e.g. "center top", "center 25%"
  lightMode?: boolean;    // true when card sits on a warm/light background
}

function projectHref(project: Project): string {
  if (project.hasProjectPage) return `/projects/${project.slug}`;
  if (project.slug === "wake-up") return "/projects/wake-up";
  return `/${project.category === "live" ? "live-production" : "art-direction"}`;
}

export function ProjectCard({ project, size = "default", imagePosition = "center center", lightMode = false }: ProjectCardProps) {
  const href = projectHref(project);

  if (size === "feature") {
    return (
      <Link href={href} className="block group">
        <div
          className="card-img-wrap relative w-full"
          style={{ aspectRatio: "16/9", maxHeight: "560px" }}
        >
          <Image
            src={project.coverImage}
            alt={project.title}
            fill
            className="object-cover"
            style={{ objectPosition: "center 20%" }}
            sizes="(max-width: 768px) 100vw, calc(100vw - 80px)"
          />
          <div
            className="absolute inset-0 pointer-events-none"
            style={{ background: "linear-gradient(to top, rgba(11,11,10,0.82) 0%, transparent 60%)" }}
          />
          <div className="absolute bottom-0 left-0 p-8">
            <p className="type-label text-[var(--color-text-secondary)] mb-2">{project.categoryLabel}</p>
            <h3 className="type-display-sm text-[var(--color-text-primary)]">{project.title}</h3>
            <p className="type-caption text-[var(--color-text-secondary)] mt-1">{project.year} · {project.location}</p>
          </div>
        </div>
      </Link>
    );
  }

  return (
    <Link href={href} className="block group">
      <div className="card-img-wrap relative" style={{ aspectRatio: "3/2" }}>
        <Image
          src={project.coverImage}
          alt={project.title}
          fill
          className="object-cover"
          style={{ objectPosition: imagePosition }}
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
      </div>
      <div className="mt-4">
        <p className="type-label text-[var(--color-text-secondary)] mb-1">{project.categoryLabel}</p>
        <h3 className="type-heading text-[var(--color-text-primary)]">{project.title}</h3>
        <p className="type-caption text-[var(--color-text-secondary)] mt-1">{project.year} · {project.location}</p>
        {project.hasProjectPage && (
          <p
            className="mt-3 transition-opacity duration-300 group-hover:opacity-100"
            style={{
              fontSize: "10px",
              letterSpacing: "0.16em",
              color: lightMode ? "rgba(26,25,22,0.45)" : "rgba(240,237,230,0.45)",
              opacity: 0.7,
            }}
          >
            VIEW PROJECT →
          </p>
        )}
      </div>
    </Link>
  );
}
