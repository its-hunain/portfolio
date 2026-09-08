import Link from "next/link";
import type { Project } from "@/lib/content";
import { ProjectVisual } from "@/components/project-visual";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article
      data-carousel-item
      className="group flex h-[390px] w-[200px] shrink-0 flex-col overflow-hidden rounded-xl border border-border bg-surface transition-colors hover:border-accent/60 sm:w-[240px]"
      style={{ scrollSnapAlign: "start" }}
    >
      <div className="h-[140px] p-2">
        <ProjectVisual slug={project.slug} name={project.name} image={project.image} />
      </div>

      <div className="flex flex-1 flex-col gap-3 px-4 pb-4 pt-1">
        <div>
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-accent">
            {project.category}
          </span>
          <h3 className="font-display mt-1 text-base font-semibold text-foreground">
            {project.name}
          </h3>
          <p className="mt-0.5 text-xs text-muted">{project.period}</p>
        </div>

        <p className="line-clamp-4 text-xs leading-relaxed text-muted">{project.description}</p>

        <div className="min-h-[24px]">
          {project.technologies ? (
            <ul className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-border px-2 py-0.5 text-[10px] text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
          ) : null}
        </div>

        <div className="mt-auto flex items-center gap-3 pt-1 text-xs font-medium">
          <Link
            href={`/work/${project.slug}`}
            className="text-foreground transition-colors group-hover:text-accent"
          >
            View Project →
          </Link>
          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer noopener"
              className="text-muted transition-colors hover:text-accent"
            >
              Live Site ↗
            </a>
          ) : null}
        </div>
      </div>
    </article>
  );
}
