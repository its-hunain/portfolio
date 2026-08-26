import { aboutCopy, coreExpertise } from "@/lib/content";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function About() {
  return (
    <Section id="about" className="py-20 md:py-28">
      <div className="grid grid-cols-1 gap-14 md:grid-cols-[1.1fr_1fr]">
        <div>
          <Reveal>
            <SectionHeading eyebrow="About" title="Who I am" />
          </Reveal>

          <div className="mt-8 flex flex-col gap-5">
            {aboutCopy.map((paragraph, i) => (
              <Reveal key={i} delay={i * 60}>
                <p className="text-base leading-relaxed text-muted md:text-lg">{paragraph}</p>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={100}>
          <div className="rounded-2xl border border-border bg-surface p-6 md:p-8">
            <h3 className="font-display text-lg font-semibold text-foreground">Core Expertise</h3>
            <div className="mt-6 flex flex-col gap-6">
              {coreExpertise.map((group) => (
                <div key={group.category}>
                  <p className="text-sm font-medium text-foreground">{group.category}</p>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-surface-raised px-3 py-1 text-xs text-muted"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
