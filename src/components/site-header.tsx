"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { ThemeToggle } from "@/components/theme-toggle";

const NAV_LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Services", href: "#services" },
  { label: "Contact", href: "#contact" },
];

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const [activeHash, setActiveHash] = useState("");
  const [scrollProgress, setScrollProgress] = useState(0);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    if (pathname !== "/") return;

    const sections = NAV_LINKS.map((link) => document.querySelector(link.href)).filter(
      (el): el is Element => el !== null
    );

    const onScroll = () => {
      const doc = document.documentElement;
      const maxScroll = doc.scrollHeight - doc.clientHeight;
      setScrollProgress(maxScroll > 0 ? window.scrollY / maxScroll : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((section) => observer.observe(section));

    return () => {
      window.removeEventListener("scroll", onScroll);
      observer.disconnect();
    };
  }, [pathname]);

  const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    setOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  const handleSectionLinkClick = (e: React.MouseEvent<HTMLAnchorElement>, hash: string) => {
    setOpen(false);
    if (pathname === "/") {
      e.preventDefault();
      document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
    } else {
      e.preventDefault();
      router.push(`/${hash}`);
    }
  };

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-background/80 backdrop-blur-md">
      <div className="absolute inset-x-0 bottom-0 h-px bg-border">
        <div
          className="h-full bg-accent transition-[width] duration-150"
          style={{ width: `${scrollProgress * 100}%` }}
        />
      </div>
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4 md:px-8">
        <Link
          href="/"
          className="font-display text-sm font-semibold tracking-tight text-foreground"
          onClick={handleLogoClick}
        >
          Mohammad Hunain
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 md:flex">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={`/${link.href}`}
              onClick={(e) => handleSectionLinkClick(e, link.href)}
              aria-current={activeHash === link.href ? "location" : undefined}
              className={`text-sm transition-colors hover:text-foreground ${
                activeHash === link.href ? "font-medium text-foreground" : "text-muted"
              }`}
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href="/CV.pdf"
            download
            className="hidden text-sm font-medium text-muted transition-colors hover:text-foreground md:inline-flex"
          >
            Resume
          </a>
          <a
            href="/#contact"
            onClick={(e) => handleSectionLinkClick(e, "#contact")}
            className="hidden rounded-full border border-border px-4 py-2 text-sm font-medium text-foreground transition-colors hover:border-accent hover:text-accent md:inline-flex"
          >
            Let&apos;s Talk
          </a>
          <ThemeToggle />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-border text-foreground md:hidden"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
              {open ? (
                <path d="M5 5l14 14M19 5L5 19" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open ? (
        <nav
          id="mobile-nav"
          aria-label="Mobile"
          className="border-t border-border bg-background px-6 py-4 md:hidden"
        >
          <ul className="flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <li key={link.href}>
                <a
                  href={`/${link.href}`}
                  onClick={(e) => handleSectionLinkClick(e, link.href)}
                  className="block rounded-lg px-2 py-3 text-base text-foreground transition-colors hover:bg-surface-raised"
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="/CV.pdf"
                download
                onClick={() => setOpen(false)}
                className="block rounded-lg px-2 py-3 text-base text-foreground transition-colors hover:bg-surface-raised"
              >
                Resume
              </a>
            </li>
            <li>
              <a
                href="/#contact"
                onClick={(e) => handleSectionLinkClick(e, "#contact")}
                className="mt-2 block rounded-lg bg-accent px-2 py-3 text-center text-base font-medium text-accent-foreground"
              >
                Let&apos;s Talk
              </a>
            </li>
          </ul>
        </nav>
      ) : null}
    </header>
  );
}
