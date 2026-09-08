import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import Script from "next/script";
import { THEME_INIT_SCRIPT } from "@/components/theme-script";
import { SiteHeader } from "@/components/site-header";
import { SiteFooter } from "@/components/site-footer";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const SITE_URL = "https://hunain.online";
const TITLE = "Mohammad Hunain | Senior Software Engineer | Mobile, Web & Backend";
const DESCRIPTION =
  "Senior Software Engineer specializing in mobile, web, backend, game development, multiplayer systems, 3D simulation, and product development.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: TITLE,
    template: "%s | Mohammad Hunain",
  },
  description: DESCRIPTION,
  keywords: [
    "Senior Software Engineer",
    "Software Engineer Pakistan",
    "Mobile App Developer",
    "iOS Developer",
    "Android Developer",
    "React Native Developer",
    ".NET Developer",
    "C# Developer",
    "TypeScript Developer",
    "Backend Developer",
    "Unity Developer",
    "Multiplayer Developer",
    "Game Developer",
    "Product Engineer",
    "MVP Development",
    "Software Architecture",
    "3D Simulation",
    "Digital Twin",
  ],
  authors: [{ name: "Mohammad Hunain" }],
  creator: "Mohammad Hunain",
  openGraph: {
    type: "website",
    title: TITLE,
    description: DESCRIPTION,
    siteName: "Mohammad Hunain",
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${inter.variable} ${spaceGrotesk.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <Script id="theme-init" strategy="beforeInteractive">
          {THEME_INIT_SCRIPT}
        </Script>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-accent focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-accent-foreground"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
