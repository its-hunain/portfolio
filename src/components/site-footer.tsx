import { person } from "@/lib/content";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-display text-sm font-semibold text-foreground">{person.name}</p>
          <p className="mt-1 text-sm text-muted">{person.title} · {person.location}</p>
        </div>

        <div className="flex flex-wrap items-center gap-6 text-sm text-muted">
          <a href={`mailto:${person.email}`} className="transition-colors hover:text-accent">
            Email
          </a>
          <a
            href={`tel:${person.phone.replace(/\s+/g, "")}`}
            className="transition-colors hover:text-accent"
          >
            Phone
          </a>
          <a
            href={person.links.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-accent"
          >
            LinkedIn
          </a>
          <a
            href={person.links.github}
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-accent"
          >
            GitHub
          </a>
          <a
            href={person.links.stackoverflow}
            target="_blank"
            rel="noreferrer noopener"
            className="transition-colors hover:text-accent"
          >
            Stack Overflow
          </a>
        </div>

        <p className="text-xs text-muted/80">
          © {new Date().getFullYear()} {person.name}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
