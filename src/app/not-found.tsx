import Link from "next/link";
import { Section } from "@/components/ui/section";

export default function NotFound() {
  return (
    <Section className="flex flex-col items-center justify-center gap-6 py-32 text-center">
      <p className="font-mono text-sm uppercase tracking-[0.2em] text-accent">404</p>
      <h1 className="font-display text-3xl font-semibold text-foreground md:text-4xl">
        Page not found
      </h1>
      <p className="max-w-md text-base text-muted">
        The page you&apos;re looking for doesn&apos;t exist or may have moved.
      </p>
      <Link
        href="/"
        className="inline-flex items-center justify-center rounded-full bg-accent px-6 py-3 text-sm font-semibold text-accent-foreground"
      >
        Back to Home
      </Link>
    </Section>
  );
}
