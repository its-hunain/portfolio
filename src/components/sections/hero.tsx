import Image from "next/image";
import { heroCopy, heroStats, person } from "@/lib/content";
import { Section } from "@/components/ui/section";
import { GitHubIcon, LinkedInIcon } from "@/components/social-icon";

export function Hero() {
  return (
    <Section className="pt-20 pb-24 md:pt-28 md:pb-32">
      <div className="grid grid-cols-1 items-center gap-14 md:grid-cols-[1.15fr_1fr] md:gap-10">
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

          <div className="mt-2 flex items-center gap-6 text-sm text-muted">
            <a
              href={person.links.github}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <GitHubIcon className="h-4 w-4" />
              GitHub ↗
            </a>
            <a
              href={person.links.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              className="flex items-center gap-1.5 transition-colors hover:text-foreground"
            >
              <LinkedInIcon className="h-4 w-4" />
              LinkedIn ↗
            </a>
          </div>
        </div>

        <div className="flex flex-col items-center gap-8 md:items-end">
          <div className="relative w-full max-w-[320px]">
            <div className="absolute inset-0 translate-x-3 translate-y-3 rounded-[2rem] bg-accent/15" aria-hidden="true" />
            <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] border border-border bg-surface-raised">
              <Image
                src="/profile/mohammad-hunain.png"
                alt={person.name}
                fill
                priority
                sizes="(min-width: 768px) 320px, 80vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="grid w-full max-w-[320px] grid-cols-3 gap-3">
            {heroStats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl border border-border bg-surface px-3 py-4 text-center"
              >
                <p className="font-display text-2xl font-semibold text-accent">{stat.value}</p>
                <p className="mt-1 text-xs leading-tight text-muted">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
