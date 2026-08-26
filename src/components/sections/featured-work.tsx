import { projects, projectsDisclaimer, type Project } from "@/lib/content";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/project-card";

const softwareProjects = projects.filter((p) => p.type === "software");
const gameProjects = projects.filter((p) => p.type === "game");

export function FeaturedWork() {
  return (
    <Section id="work" className="py-20 md:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Selected Work"
          title="Featured Work"
          description="A sample of products across mobile, multiplayer, and interactive experiences."
        />
      </Reveal>

      <ProjectGroup title="Software & Web" projects={softwareProjects} />
      <ProjectGroup title="Games" projects={gameProjects} className="mt-16" />

      <Reveal delay={120}>
        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted">{projectsDisclaimer}</p>
      </Reveal>
    </Section>
  );
}

function ProjectGroup({
  title,
  projects,
  className = "",
}: {
  title: string;
  projects: Project[];
  className?: string;
}) {
  return (
    <div className={`mt-12 ${className}`}>
      <Reveal>
        <h3 className="font-display flex items-baseline gap-2 text-xl font-semibold tracking-tight text-foreground">
          {title}
          <span className="font-mono text-sm font-normal text-muted">
            {projects.length} {projects.length === 1 ? "project" : "projects"}
          </span>
        </h3>
      </Reveal>
      <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>
    </div>
  );
}
