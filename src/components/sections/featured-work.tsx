import { projects, projectsDisclaimer } from "@/lib/content";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ProjectCard } from "@/components/project-card";

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

      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.slug} delay={i * 80}>
            <ProjectCard project={project} />
          </Reveal>
        ))}
      </div>

      <Reveal delay={120}>
        <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted">{projectsDisclaimer}</p>
      </Reveal>
    </Section>
  );
}
