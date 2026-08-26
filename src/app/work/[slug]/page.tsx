import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { projects } from "@/lib/content";
import { Section } from "@/components/ui/section";
import { ProjectVisual } from "@/components/project-visual";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);
  if (!project) return {};

  return {
    title: project.name,
    description: project.description,
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  const cs = project.caseStudy;

  return (
    <Section className="py-16 md:py-24">
      <Link href="/#work" className="text-sm font-medium text-muted transition-colors hover:text-accent">
        ← Back to Work
      </Link>

      <div className="mt-6 grid grid-cols-1 gap-10 md:grid-cols-[1fr_1.3fr] md:items-start">
        <div className="md:sticky md:top-24">
          <ProjectVisual slug={project.slug} name={project.name} image={project.image} />
        </div>

        <div>
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
            {project.category}
          </span>
          <h1 className="font-display mt-3 text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            {project.name}
          </h1>
          <p className="mt-2 text-sm text-muted">{project.period}</p>

          <p className="mt-6 text-lg leading-relaxed text-muted">{project.description}</p>

          {project.technologies ? (
            <div className="mt-6">
              <p className="text-sm font-medium text-foreground">Technologies</p>
              <ul className="mt-2 flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
                  <li key={tech} className="rounded-full border border-border px-3 py-1 text-xs text-muted">
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          ) : null}

          {project.url ? (
            <a
              href={project.url}
              target="_blank"
              rel="noreferrer noopener"
              className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-foreground transition-colors hover:text-accent"
            >
              Visit Live Site ↗
            </a>
          ) : null}

          {cs ? (
            <div className="mt-10 flex flex-col gap-8 border-t border-border pt-10">
              <CaseStudyBlock title="Overview" body={cs.overview} />
              {cs.challenge ? <CaseStudyBlock title="The Challenge" body={cs.challenge} /> : null}
              {cs.role ? <CaseStudyBlock title="My Role" body={cs.role} /> : null}
              {cs.technicalApproach ? (
                <CaseStudyBlock title="Technical Approach" body={cs.technicalApproach} />
              ) : null}
              {cs.keyContributions ? (
                <div>
                  <h2 className="font-display text-lg font-semibold text-foreground">
                    Key Contributions
                  </h2>
                  <ul className="mt-3 flex flex-col gap-2">
                    {cs.keyContributions.map((point) => (
                      <li key={point} className="flex gap-2 text-sm leading-relaxed text-muted">
                        <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
              ) : null}
              {cs.outcome ? <CaseStudyBlock title="Outcome" body={cs.outcome} /> : null}
            </div>
          ) : null}
        </div>
      </div>
    </Section>
  );
}

function CaseStudyBlock({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h2 className="font-display text-lg font-semibold text-foreground">{title}</h2>
      <p className="mt-2 text-sm leading-relaxed text-muted">{body}</p>
    </div>
  );
}
