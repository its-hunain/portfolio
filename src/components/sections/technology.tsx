import { technologySections } from "@/lib/content";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";

export function Technology() {
  return (
    <Section className="py-20 md:py-28">
      <Reveal>
        <SectionHeading eyebrow="Toolkit" title="Technology" />
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
        {technologySections.map((group, i) => (
          <Reveal key={group.category} delay={i * 60}>
            <p className="text-sm font-medium text-foreground">{group.category}</p>
            <ul className="mt-3 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border px-3 py-1.5 text-sm text-muted"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
