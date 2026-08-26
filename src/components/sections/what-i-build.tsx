import { whatIBuild } from "@/lib/content";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function WhatIBuild() {
  return (
    <Section className="py-16 md:py-20">
      <Reveal>
        <h2 className="font-display text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
          What I Build
        </h2>
      </Reveal>

      <div className="mt-10 grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-3">
        {whatIBuild.map((item, i) => (
          <Reveal key={item.title} delay={i * 60} className="bg-surface p-6 md:p-8">
            <p className="font-display text-lg font-semibold text-foreground">{item.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{item.description}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
