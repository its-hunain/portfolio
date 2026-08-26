import Link from "next/link";
import type { Project } from "@/lib/content";
import { ProjectVisual } from "@/components/project-visual";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-surface transition-colors hover:border-accent/60">
      <div className="p-3">
        <ProjectVisual slug={project.slug} name={project.name} image={project.image} />
      </div>

      <div className="flex flex-1 flex-col gap-4 px-6 pb-6 pt-2">
        <div>
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
            {project.category}
          </span>
          <h3 className="font-display mt-2 text-xl font-semibold text-foreground">
            {project.name}
          </h3>
          <p className="mt-1 text-xs text-muted">{project.period}</p>
        </div>

        <p className="text-sm leading-relaxed text-muted">{project.description}</p>

        {project.technologies ? (
          <ul className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-border px-3 py-1 text-xs text-muted"
              >
                {tech}
              </li>
            ))}
          </ul>
        ) : null}

        <div className="mt-auto flex items-center gap-5 pt-2 text-sm font-medium">
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
