import { experience } from "@/lib/content";
import { Section, SectionHeading } from "@/components/ui/section";
import { Reveal } from "@/components/ui/reveal";
import { ExperienceItem } from "@/components/experience-item";

export function ExperienceTimeline() {
  return (
    <Section id="experience" className="pt-20 md:pt-28">
      <Reveal>
        <SectionHeading eyebrow="Experience" title="Professional Experience" />
      </Reveal>

      <div className="mt-12 max-w-3xl">
        {experience.map((item, i) => (
          <ExperienceItem key={item.company} item={item} isLast={i === experience.length - 1} />
        ))}
      </div>
    </Section>
  );
}
