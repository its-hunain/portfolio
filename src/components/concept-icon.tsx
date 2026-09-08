type IconProps = {
  className?: string;
};

function CrossPlatformIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="2.5" y="4" width="12" height="9" rx="1.3" stroke="currentColor" strokeWidth="1.4" />
      <rect x="13" y="10.5" width="8.5" height="9.5" rx="1.3" stroke="currentColor" strokeWidth="1.4" />
      <path d="M2.5 16.5h7" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function ControllerIcon({ className }: IconProps) {
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

function GlobeAppsIcon({ className }: IconProps) {
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

function ServerDevIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="4" width="17" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="3.5" y="14" width="17" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="7" cy="7" r="0.9" fill="currentColor" />
      <circle cx="7" cy="17" r="0.9" fill="currentColor" />
    </svg>
  );
}

function IntegrationIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="6" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="18" cy="12" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 12h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function CubeDevIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 6.5 12 3l8 3.5v11L12 21l-8-3.5v-11Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M4 6.5 12 10m0 0 8-3.5M12 10v11" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

function NetworkIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="5" r="2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="5" cy="18" r="2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="19" cy="18" r="2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M12 7v5m0 0-5.5 4.3M12 12l5.5 4.3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function PulseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M2.5 12h4l2-6 3 12 2.5-9 1.5 3h6.5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function CoinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.5" />
      <path d="M12 7.5v9M9.5 9.8c0-1.3 1.1-2.3 2.5-2.3s2.5.8 2.5 1.9c0 2.7-5 1.2-5 3.9 0 1.1 1.1 1.9 2.5 1.9s2.5-1 2.5-2.3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function CartIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M3 4h2l2.4 11.5a2 2 0 0 0 2 1.6h7.2a2 2 0 0 0 2-1.6L20 8H6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="9.5" cy="20" r="1.2" fill="currentColor" />
      <circle cx="16.5" cy="20" r="1.2" fill="currentColor" />
    </svg>
  );
}

function FirebaseIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 18.5 8.6 3.2a.5.5 0 0 1 .95-.1l2 4.3-1.2 2.3-4.35 8.8Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M6 18.5 11.55 9.7l3 6-8 3.9a.5.5 0 0 1-.55-1.1Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="m18 15.6-3.45-6.9L11.5 3l6.5 12.6Z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

function ShareIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="6" cy="12" r="2.3" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="17.5" cy="6" r="2.3" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="17.5" cy="18" r="2.3" stroke="currentColor" strokeWidth="1.4" />
      <path d="m8.1 10.8 7.4-3.6M8.1 13.2l7.4 3.6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function RocketIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 2.5c2.5 1.5 4.5 4.5 4.5 8.5 0 2-.6 3.7-1.5 5l-3-1-3 1c-.9-1.3-1.5-3-1.5-5 0-4 2-7 4.5-8.5Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
      <circle cx="12" cy="9.5" r="1.6" stroke="currentColor" strokeWidth="1.3" />
      <path d="M9 15.5 7 19M15 15.5l2 3.5M10.5 20h3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
    </svg>
  );
}

function BlueprintIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="4" width="18" height="16" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="M7 9h5v5H7z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
      <path d="M14 9h3M14 12h3M14 15h3M7 16.5h3" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function ClipboardIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="5" y="4" width="14" height="17" rx="1.5" stroke="currentColor" strokeWidth="1.4" />
      <rect x="9" y="2.5" width="6" height="3" rx="1" stroke="currentColor" strokeWidth="1.3" />
      <path d="M8 11h8M8 14.5h8M8 18h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
    </svg>
  );
}

function KeyIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="8" cy="15" r="4" stroke="currentColor" strokeWidth="1.4" />
      <path d="M11 12 19 4M16.5 6.5 19 9M19.5 3.5 22 6" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function LayersIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="m12 3 9 4.5-9 4.5-9-4.5L12 3Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="m3 12 9 4.5 9-4.5M3 16.5 12 21l9-4.5" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
    </svg>
  );
}

function TruckIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M3 6h10v9H3z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M13 10h4l3.5 3.5V15H13z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <circle cx="7" cy="17.5" r="1.8" stroke="currentColor" strokeWidth="1.3" />
      <circle cx="17" cy="17.5" r="1.8" stroke="currentColor" strokeWidth="1.3" />
    </svg>
  );
}

function UsersIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="8" cy="9" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="9" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 20c0-3 2.5-5 5-5s5 2 5 5M11 20c0-3 2.5-5 5-5s5 2 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function TwinIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 6.5 9 4l5 2.5v9L9 18l-5-2.5v-9Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      <path d="M10 8.5 15 6l5 2.5v9L15 20l-5-2.5" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" strokeDasharray="2.5 2" />
    </svg>
  );
}

function CubeVisualIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 2.5 20 7v10l-8 4.5-8-4.5V7l8-4.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M12 2.5v9.5m0 0L4 7m8 5 8-5" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

function OrbitIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="1.8" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="currentColor" strokeWidth="1.3" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="currentColor" strokeWidth="1.3" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="currentColor" strokeWidth="1.3" transform="rotate(120 12 12)" />
    </svg>
  );
}

function MapIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M9 4 3 6.5v13L9 17l6 2.5 6-2.5v-13L15 6.5 9 4Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M9 4v13M15 6.5V19.5" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  );
}

function VrIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M7.5 6h9a5 5 0 0 1 4.9 6 8 8 0 0 1-1.6 3.4c-.9 1.1-1.9 1.1-2.7.1l-2-2.6a4.4 4.4 0 0 0-6.2 0l-2 2.6c-.8 1-1.8 1-2.7-.1A8 8 0 0 1 2.6 12a5 5 0 0 1 4.9-6Z"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinejoin="round"
      />
    </svg>
  );
}

export const CONCEPT_ICONS: Record<string, (props: IconProps) => React.ReactElement> = {
  "Cross-platform applications": CrossPlatformIcon,
  "Mobile games": ControllerIcon,
  "Web applications": GlobeAppsIcon,
  "Server-side development": ServerDevIcon,
  Integrations: IntegrationIcon,
  "2D/3D development": CubeDevIcon,
  "Multiplayer systems": NetworkIcon,
  "Real-time systems": PulseIcon,
  "Game monetization": CoinIcon,
  "In-App Purchases": CartIcon,
  Firebase: FirebaseIcon,
  "Social integrations": ShareIcon,
  "MVP development": RocketIcon,
  "Software architecture": BlueprintIcon,
  "Project management": ClipboardIcon,
  "Technical ownership": KeyIcon,
  "Product development": LayersIcon,
  "Production delivery": TruckIcon,
  "Cross-functional collaboration": UsersIcon,
  "Digital Twin": TwinIcon,
  "3D visualization": CubeVisualIcon,
  Simulation: OrbitIcon,
  "Architectural visualization": BlueprintIcon,
  "Urban planning": MapIcon,
  "Oculus / VR": VrIcon,
};
