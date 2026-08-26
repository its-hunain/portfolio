import { howIWork } from "@/lib/content";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function HowIWork() {
  return (
    <Section className="py-20 md:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Process"
          title="How I Work"
          description="A simple, repeatable approach to taking a product from idea to production."
        />
      </Reveal>

      <ol className="mt-12 grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border md:grid-cols-5">
        {howIWork.map((step, i) => (
          <Reveal as="li" key={step.number} delay={i * 70} className="bg-surface p-6">
            <span className="font-display text-sm font-semibold text-accent">{step.number}</span>
            <p className="font-display mt-3 text-base font-semibold text-foreground">{step.title}</p>
            <p className="mt-2 text-sm leading-relaxed text-muted">{step.description}</p>
          </Reveal>
        ))}
      </ol>
    </Section>
  );
}
