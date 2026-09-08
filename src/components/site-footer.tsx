import { person } from "@/lib/content";
import { EmailIcon, PhoneIcon, LinkedInIcon, GitHubIcon, StackOverflowIcon } from "@/components/social-icon";

export function SiteFooter() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6 px-6 py-10 md:flex-row md:items-center md:justify-between md:px-8">
        <div>
          <p className="font-display text-sm font-semibold text-foreground">{person.name}</p>
          <p className="mt-1 text-sm text-muted">{person.title} · {person.location}</p>
        </div>

        <div className="flex flex-nowrap items-center gap-3 overflow-x-auto text-sm text-muted md:gap-5">
          <a
            href={`mailto:${person.email}`}
            className="flex shrink-0 items-center gap-1.5 whitespace-nowrap transition-colors hover:text-accent"
          >
            <EmailIcon className="h-4 w-4" />
            Email
          </a>
          <a
            href={`tel:${person.phone.replace(/\s+/g, "")}`}
            className="flex shrink-0 items-center gap-1.5 whitespace-nowrap transition-colors hover:text-accent"
          >
            <PhoneIcon className="h-4 w-4" />
            Phone
          </a>
          <a
            href={person.links.linkedin}
            target="_blank"
            rel="noreferrer noopener"
            className="flex shrink-0 items-center gap-1.5 whitespace-nowrap transition-colors hover:text-accent"
          >
            <LinkedInIcon className="h-4 w-4" />
            LinkedIn
          </a>
          <a
            href={person.links.github}
            target="_blank"
            rel="noreferrer noopener"
            className="flex shrink-0 items-center gap-1.5 whitespace-nowrap transition-colors hover:text-accent"
          >
            <GitHubIcon className="h-4 w-4" />
            GitHub
          </a>
          <a
            href={person.links.stackoverflow}
            target="_blank"
            rel="noreferrer noopener"
            className="flex shrink-0 items-center gap-1.5 whitespace-nowrap transition-colors hover:text-accent"
          >
            <StackOverflowIcon className="h-4 w-4" />
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
