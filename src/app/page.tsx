import { Hero } from "@/components/sections/hero";
import { WhatIBuild } from "@/components/sections/what-i-build";
import { FeaturedWork } from "@/components/sections/featured-work";
import { About } from "@/components/sections/about";
import { HowIWork } from "@/components/sections/how-i-work";
import { Services } from "@/components/sections/services";
import { ExperienceTimeline } from "@/components/sections/experience-timeline";
import { Education } from "@/components/sections/education";
import { Technology } from "@/components/sections/technology";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <Hero />
      <WhatIBuild />
      <FeaturedWork />
      <About />
      <HowIWork />
      <Services />
      <ExperienceTimeline />
      <Education />
      <Technology />
      <Contact />
    </>
  );
}
