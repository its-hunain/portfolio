import { education } from "@/lib/content";
import { Section } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function Education() {
  return (
    <Section className="pb-20 md:pb-28">
      <div className="max-w-3xl border-t border-border pt-12">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-[0.15em] text-accent">
            Education
          </span>
        </Reveal>

        <div className="mt-6 flex flex-col gap-6">
          {education.map((item, i) => (
            <Reveal key={item.school} delay={i * 60}>
              <p className="font-display text-lg font-semibold text-foreground">
                {item.degree}, {item.field}
              </p>
              <p className="mt-1 text-sm text-muted">
                {item.school} · {item.location} · {item.period}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
