import { TECH_ICONS, ApiIcon } from "@/components/tech-icon";
import { CONCEPT_ICONS } from "@/components/concept-icon";

export function PillIcon({ name, className }: { name: string; className?: string }) {
  const Icon = TECH_ICONS[name] ?? CONCEPT_ICONS[name] ?? ApiIcon;
  return <Icon className={className} />;
}
