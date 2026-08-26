import { heroCopy, person } from "@/lib/content";
import { Section } from "@/components/ui/section";

export function Hero() {
  return (
    <Section className="pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="flex flex-col gap-8">
        <span className="font-mono text-xs uppercase tracking-[0.2em] text-accent">
          {person.location}
        </span>

        <h1 className="font-display max-w-4xl text-5xl font-semibold leading-[1.05] tracking-tight text-foreground md:text-7xl">
          {person.name}
        </h1>

        <p className="font-display text-xl font-medium text-foreground/80 md:text-2xl">
          {person.title}
        </p>

        <p className="max-w-2xl text-lg leading-relaxed text-muted">
          {heroCopy.supporting}
        </p>

        <p className="max-w-2xl text-base leading-relaxed text-muted/90">
          {heroCopy.extended}
        </p>

        <div className="mt-4 flex flex-wrap items-center gap-4">
          <a
            href={heroCopy.primaryCta.href}
            className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground transition-transform hover:scale-[1.02]"
          >
            {heroCopy.primaryCta.label}
          </a>
          <a
            href={heroCopy.secondaryCta.href}
            className="inline-flex items-center justify-center rounded-full border border-border px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent hover:text-accent"
          >
            {heroCopy.secondaryCta.label}
          </a>
        </div>

        <div className="mt-6 flex items-center gap-6 text-sm text-muted">
          <a
            href={person.links.github}
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-foreground"
          >
            GitHub ↗
          </a>
          <a
            href={person.links.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-foreground"
          >
            LinkedIn ↗
          </a>
        </div>
      </div>
    </Section>
  );
}
