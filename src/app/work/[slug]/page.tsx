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

  const caseStudySteps = cs
    ? [
        { title: "Overview", body: cs.overview },
        cs.challenge ? { title: "The Challenge", body: cs.challenge } : null,
        cs.role ? { title: "My Role", body: cs.role } : null,
        cs.technicalApproach ? { title: "Technical Approach", body: cs.technicalApproach } : null,
      ].filter((step): step is { title: string; body: string } => step !== null)
    : [];

  return (
    <Section className="py-16 md:py-24">
      <Link
        href="/#work"
        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted transition-colors hover:text-accent"
      >
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <path d="M14 5l-7 7 7 7" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
        Back to Work
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

          {caseStudySteps.length > 0 ? (
            <div className="mt-12 flex flex-col gap-10 border-t border-border pt-10">
              {caseStudySteps.map((step, i) => (
                <div key={step.title} className="flex gap-4">
                  <div className="flex flex-col items-center">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-accent/10 font-mono text-xs font-semibold text-accent">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {i < caseStudySteps.length - 1 ? (
                      <span className="mt-2 w-px flex-1 bg-border" aria-hidden="true" />
                    ) : null}
                  </div>
                  <div className="pb-2">
                    <h2 className="font-display text-lg font-semibold text-foreground">{step.title}</h2>
                    <p className="mt-2 text-sm leading-relaxed text-muted">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          ) : null}

          {cs?.keyContributions ? (
            <div className="mt-10">
              <h2 className="font-display text-lg font-semibold text-foreground">Key Contributions</h2>
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

          {cs?.outcome ? (
            <div className="mt-10 rounded-2xl border border-accent/30 bg-accent/5 p-6">
              <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent">Outcome</p>
              <p className="mt-2 text-base leading-relaxed text-foreground">{cs.outcome}</p>
            </div>
          ) : null}
        </div>
      </div>
    </Section>
  );
}
