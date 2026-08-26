import { services } from "@/lib/content";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function Services() {
  return (
    <Section id="services" className="py-20 md:py-28">
      <Reveal>
        <SectionHeading
          eyebrow="Capabilities"
          title="What I Can Help With"
          description="From early product decisions to production infrastructure."
        />
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal
            key={service.title}
            delay={i * 50}
            className="rounded-2xl border border-border bg-surface p-6 transition-colors hover:border-accent/60"
          >
            <h3 className="font-display text-lg font-semibold text-foreground">{service.title}</h3>
            <p className="mt-3 text-sm leading-relaxed text-muted">{service.description}</p>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
