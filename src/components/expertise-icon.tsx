type IconProps = {
  className?: string;
};

function MobileIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="7" y="2" width="10" height="20" rx="2" stroke="currentColor" strokeWidth="1.5" />
      <path d="M10.5 18.5h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function WebIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M3 12h18M12 3c2.4 2.5 3.6 5.6 3.6 9s-1.2 6.5-3.6 9c-2.4-2.5-3.6-5.6-3.6-9s1.2-6.5 3.6-9Z"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function BackendIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <ellipse cx="12" cy="5.5" rx="7" ry="2.5" stroke="currentColor" strokeWidth="1.5" />
      <path
        d="M5 5.5V12c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5V5.5M5 12v6.5c0 1.38 3.13 2.5 7 2.5s7-1.12 7-2.5V12"
        stroke="currentColor"
        strokeWidth="1.5"
      />
    </svg>
  );
}

function GameIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6.5 8.5h11a4 4 0 0 1 3.9 4.9l-.6 2.6a2.7 2.7 0 0 1-4.9.9l-1-1.6a2.2 2.2 0 0 0-1.9-1.1h-1.9a2.2 2.2 0 0 0-1.9 1.1l-1 1.6a2.7 2.7 0 0 1-4.9-.9l-.6-2.6a4 4 0 0 1 3.9-4.9v0Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M8.5 11v3M7 12.5h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <circle cx="17" cy="11.5" r="0.9" fill="currentColor" />
      <circle cx="15.2" cy="13.3" r="0.9" fill="currentColor" />
    </svg>
  );
}

function ProductIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3 4 7v6c0 4.2 3.4 7.5 8 8 4.6-.5 8-3.8 8-8V7l-8-4Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="m9 12 2 2 4-4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function SimulationIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 3 4 7.5v9L12 21l8-4.5v-9L12 3Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M4 7.5 12 12l8-4.5M12 12v9" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
    </svg>
  );
}

const ICONS: Record<string, (props: IconProps) => React.ReactElement> = {
  "Mobile Development": MobileIcon,
  "Mobile Apps": MobileIcon,
  "Web Development": WebIcon,
  "Web Platforms": WebIcon,
  "Backend Engineering": BackendIcon,
  "Backend Systems": BackendIcon,
  "Game Development": GameIcon,
  "Games & Multiplayer": GameIcon,
  "Product Engineering": ProductIcon,
  "MVPs & Product Development": ProductIcon,
  "3D / Simulation": SimulationIcon,
  "3D & Simulation": SimulationIcon,
};

export function ExpertiseIcon({ category, className }: { category: string; className?: string }) {
  const Icon = ICONS[category] ?? ProductIcon;
  return <Icon className={className} />;
}
