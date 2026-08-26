"use client";

import { useId, useState } from "react";
import type { Experience } from "@/lib/content";

export function ExperienceItem({ item, isLast }: { item: Experience; isLast: boolean }) {
  const [open, setOpen] = useState(false);
  const detailsId = useId();

  return (
    <div className="relative flex gap-6 pb-10 md:gap-10">
      <div className="flex flex-col items-center">
        <span className="mt-1.5 h-3 w-3 shrink-0 rounded-full border-2 border-accent bg-background" />
        {!isLast ? <span className="mt-2 w-px flex-1 bg-border" /> : null}
      </div>

      <div className="flex-1">
        <p className="font-mono text-xs uppercase tracking-[0.15em] text-accent">{item.years}</p>
        <h3 className="font-display mt-2 text-xl font-semibold text-foreground">{item.role}</h3>
        <p className="mt-1 text-sm text-muted">{item.company} · {item.period}</p>

        {item.summary ? (
          <p className="mt-3 text-sm leading-relaxed text-muted">{item.summary}</p>
        ) : null}

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls={detailsId}
          className="mt-4 inline-flex items-center gap-1.5 text-sm font-medium text-foreground transition-colors hover:text-accent"
        >
          {open ? "Hide details" : "Show details"}
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            aria-hidden="true"
            className={`transition-transform ${open ? "rotate-180" : ""}`}
          >
            <path d="M6 9l6 6 6-6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {open ? (
          <ul id={detailsId} className="mt-4 flex flex-col gap-2">
            {item.points.map((point) => (
              <li key={point} className="flex gap-2 text-sm leading-relaxed text-muted">
                <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent" />
                {point}
              </li>
            ))}
          </ul>
        ) : null}
      </div>
    </div>
  );
}
