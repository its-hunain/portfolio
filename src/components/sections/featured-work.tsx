import { projects, projectsDisclaimer, type Project } from "@/lib/content";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/project-card";
import { Carousel } from "@/components/ui/carousel";
import { PillIcon } from "@/components/pill-icon";

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

      <ProjectGroup title="Software & Web" iconName="Web" projects={softwareProjects} />
      <ProjectGroup title="Games" iconName="Mobile games" projects={gameProjects} className="mt-16" />

      <Reveal delay={120}>
        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted">{projectsDisclaimer}</p>
      </Reveal>
    </Section>
  );
}

function ProjectGroup({
  title,
  iconName,
  projects,
  className = "",
}: {
  title: string;
  iconName: string;
  projects: Project[];
  className?: string;
}) {
  return (
    <div className={`mt-12 ${className}`}>
      <Reveal>
        <h3 className="font-display flex items-center gap-2 text-xl font-semibold tracking-tight text-foreground">
          <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-surface-raised text-accent">
            <PillIcon name={iconName} className="h-4 w-4" />
          </span>
          {title}
          <span className="font-mono text-sm font-normal text-muted">
            {projects.length} {projects.length === 1 ? "project" : "projects"}
          </span>
        </h3>
      </Reveal>
      <Reveal delay={80}>
        <Carousel className="mt-6">
          {projects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </Carousel>
      </Reveal>
    </div>
  );
}
