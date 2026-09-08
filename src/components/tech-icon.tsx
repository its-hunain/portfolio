type IconProps = {
  className?: string;
};

function CSharpIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M12 2 3.5 7v10L12 22l8.5-5V7L12 2Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
      <path d="M10.8 9.3a2.6 2.6 0 1 0 0 5.4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M16 10v4M14.3 10v4M18 10.3v3.4M16.3 10.3v3.4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
    </svg>
  );
}

function TypeScriptIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="3" width="18" height="18" rx="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M7.5 9h5M10 9v7" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path
        d="M15 15.3c.3.5.9.9 1.7.9 1 0 1.6-.5 1.6-1.2 0-.8-.6-1.1-1.6-1.4-1-.3-1.6-.6-1.6-1.4 0-.7.6-1.2 1.5-1.2.7 0 1.3.3 1.6.8"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function SwiftIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M6 3c6 2 12 6 14 11.5-2-1-4.2-1.8-6.6-2.3C15 15.5 13.4 18 10 20c1-2 .8-3.6 0-5.2C7.8 13.5 5 12 3 10c2 .4 4 .8 5.8 1.5C7 9 5.8 6 6 3Z"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DotNetIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="5.5" cy="16" r="1.6" fill="currentColor" />
      <circle cx="12" cy="16" r="1.6" fill="currentColor" />
      <path d="M17 12v8M20 12v5.5a2.5 2.5 0 0 1-2.5 2.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M4 8h16M4 4h10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ReactIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="1.8" fill="currentColor" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="currentColor" strokeWidth="1.3" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="currentColor" strokeWidth="1.3" transform="rotate(60 12 12)" />
      <ellipse cx="12" cy="12" rx="9" ry="3.8" stroke="currentColor" strokeWidth="1.3" transform="rotate(120 12 12)" />
    </svg>
  );
}

function UnityIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M12 2.5 19 6.7v10.6L12 21.5 5 17.3V6.7L12 2.5Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M12 2.5v9.5m0 0L5 6.7m7 5.3 7 5.3m-7-5.3L5 17.3m7-5.3 7-5.3" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" />
    </svg>
  );
}

function ApiIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3" y="9" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="15" y="9" width="6" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 12h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function ServerIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <rect x="3.5" y="4" width="17" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <rect x="3.5" y="14" width="17" height="6" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="7" cy="7" r="0.9" fill="currentColor" />
      <circle cx="7" cy="17" r="0.9" fill="currentColor" />
    </svg>
  );
}

function PhotonIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="12" cy="12" r="2" fill="currentColor" />
      <path
        d="M12 2v4M12 18v4M2 12h4M18 12h4M5 5l2.8 2.8M16.2 16.2 19 19M19 5l-2.8 2.8M7.8 16.2 5 19"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
      />
    </svg>
  );
}

function NakamaIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <circle cx="8" cy="9" r="3" stroke="currentColor" strokeWidth="1.5" />
      <circle cx="16" cy="9" r="3" stroke="currentColor" strokeWidth="1.5" />
      <path d="M3 20c0-3 2.5-5 5-5s5 2 5 5M11 20c0-3 2.5-5 5-5s5 2 5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
}

function AppleIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path
        d="M15.5 3c.1 1-.3 2-1 2.8-.7.8-1.8 1.4-2.8 1.3-.1-1 .4-2.1 1-2.8.8-.8 1.9-1.3 2.8-1.3Z"
        fill="currentColor"
      />
      <path
        d="M18.8 17.2c-.5 1.1-.7 1.6-1.4 2.6-.9 1.4-2.2 3.1-3.8 3.1-1.4 0-1.8-.9-3.7-.9s-2.4.9-3.7.9c-1.6 0-2.8-1.5-3.7-2.9-2.6-3.9-2.8-8.6-1.2-11 1.1-1.7 2.8-2.7 4.4-2.7 1.6 0 2.6 1 3.9 1s2.1-1 3.9-1c1.5 0 3 .8 4.1 2.2-3.6 2-3 7.1.9 8.7Z"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function AndroidIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M6 10v6M18 10v6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="6" y="8" width="12" height="9" rx="1.5" stroke="currentColor" strokeWidth="1.5" />
      <path d="M9 21v-3M15 21v-3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M8.5 8 7 5.3M15.5 8 17 5.3M9.5 5.5h5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      <circle cx="9.3" cy="11.5" r="0.7" fill="currentColor" />
      <circle cx="14.7" cy="11.5" r="0.7" fill="currentColor" />
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

function WebGLIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" className={className} aria-hidden="true">
      <path d="M4 6.5 12 3l8 3.5v11L12 21l-8-3.5v-11Z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
      <path d="M4 6.5 12 10m0 0 8-3.5M12 10v11" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
    </svg>
  );
}

function OculusIcon({ className }: IconProps) {
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

export const TECH_ICONS: Record<string, (props: IconProps) => React.ReactElement> = {
  "C#": CSharpIcon,
  TypeScript: TypeScriptIcon,
  Swift: SwiftIcon,
  ".NET MVC": DotNetIcon,
  ".NET": DotNetIcon,
  React: ReactIcon,
  "React Native": ReactIcon,
  Unity: UnityIcon,
  APIs: ApiIcon,
  "Server-side systems": ServerIcon,
  Photon: PhotonIcon,
  Nakama: NakamaIcon,
  iOS: AppleIcon,
  Android: AndroidIcon,
  Web: WebIcon,
  WebGL: WebGLIcon,
  Oculus: OculusIcon,
  "Oculus / VR": OculusIcon,
};

export function TechIcon({ name, className }: { name: string; className?: string }) {
  const Icon = TECH_ICONS[name] ?? ApiIcon;
  return <Icon className={className} />;
}

export { ApiIcon };
