import { aboutCopy, coreExpertise } from "@/lib/content";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ExpertiseIcon } from "@/components/expertise-icon";
import { PillIcon } from "@/components/pill-icon";

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
                  <div className="flex items-center gap-2">
                    <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full bg-surface-raised text-accent">
                      <ExpertiseIcon category={group.category} className="h-4 w-4" />
                    </span>
                    <p className="text-sm font-medium text-foreground">{group.category}</p>
                  </div>
                  <ul className="mt-2 flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-1.5 rounded-full bg-surface-raised px-3 py-1 text-xs text-muted"
                      >
                        <PillIcon name={item} className="h-3.5 w-3.5 shrink-0" />
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
