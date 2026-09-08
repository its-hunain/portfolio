// Single source of truth for all site content.
// Facts are sourced from CV.pdf (authoritative, most current) and
// "portfolio details.md" (positioning/voice guidance). Do not invent data.

export const person = {
  name: "Mohammad Hunain",
  title: "Senior Software Engineer",
  headline: "Senior Software Engineer | Mobile, Web, Backend & Game Development",
  location: "Karachi, Pakistan",
  email: "mohammadhunain83@gmail.com",
  phone: "+92 315 832 7536",
  links: {
    linkedin: "https://linkedin.com/in/mohammad-hunain-b1742a11b",
    github: "https://github.com/its-hunain",
    stackoverflow: "https://stackoverflow.com/users/12194122/mohammad-hunain",
    whatsapp: "https://wa.me/923158327536",
  },
};

export const heroCopy = {
  supporting:
    "Building mobile, web, backend, and interactive products from idea to production.",
  extended:
    "8+ years of experience turning ideas into production-ready software across mobile, web, backend, games, multiplayer systems, and 3D experiences.",
  primaryCta: { label: "View My Work", href: "#work" },
  secondaryCta: { label: "Let's Work Together", href: "#contact" },
};

export const heroStats = [
  { value: "8+", label: "Years Experience" },
  { value: "30+", label: "Projects Shipped" },
  { value: "6", label: "Domains" },
];

export const aboutCopy = [
  "I'm a Senior Software Engineer who enjoys turning ideas into real products.",
  "Over the years I've worked across mobile applications, web platforms, backend systems, multiplayer games, 3D simulations, and interactive experiences.",
  "My background in game development taught me how to think deeply about performance, real-time systems, user experience, and complex technical problems. My broader software engineering experience allows me to apply those skills to products beyond gaming.",
  "I enjoy working from the early stages of a product — understanding the problem, shaping the MVP, choosing the right architecture, and building something that can actually scale.",
];

export const professionalSummary =
  "I'm a Senior Software Engineer with 8+ years of professional experience building software products across mobile, web, backend, and game development. I've worked on production applications, multiplayer and real-time systems, mobile products, APIs, 3D simulations, interactive experiences, and game products across multiple platforms. My experience includes Unity and C#, .NET, TypeScript, React, React Native, Swift, backend development, multiplayer technologies, mobile development, and 3D visualization. I'm interested in understanding the problem, defining the right MVP, selecting appropriate technologies, designing scalable solutions, and taking products from concept through production. I've also worked in technical leadership roles, including leading game development teams and driving projects from concept to completion.";

export type EducationItem = {
  school: string;
  degree: string;
  field: string;
  period: string;
  location: string;
};

export const education: EducationItem[] = [
  {
    school: "Iqra University",
    degree: "Bachelor's Degree",
    field: "Computer Science (BSCS)",
    period: "January 2015 – December 2018",
    location: "Karachi",
  },
];

export type CapabilityArea = {
  title: string;
  description: string;
};

export const whatIBuild: CapabilityArea[] = [
  { title: "Mobile Apps", description: "iOS, Android, and cross-platform applications." },
  { title: "Web Platforms", description: "Modern, fast, production-grade web applications." },
  { title: "Backend Systems", description: "APIs, integrations, and server-side architecture." },
  { title: "Games & Multiplayer", description: "Unity games and real-time multiplayer systems." },
  { title: "3D & Simulation", description: "Interactive 3D visualization and Digital Twin experiences." },
  { title: "MVPs & Product Development", description: "Idea to architecture to production." },
];

export type SkillCategory = {
  category: string;
  items: string[];
};

export const coreExpertise: SkillCategory[] = [
  {
    category: "Mobile Development",
    items: ["iOS", "Android", "Swift", "React Native", "Cross-platform applications", "Mobile games"],
  },
  {
    category: "Web Development",
    items: ["TypeScript", "React", "Web applications", "WebGL"],
  },
  {
    category: "Backend Engineering",
    items: [".NET", "C#", "TypeScript", "Server-side development", "APIs", "Integrations"],
  },
  {
    category: "Game Development",
    items: ["Unity", "C#", "2D/3D development", "Multiplayer systems", "Real-time systems", "Photon", "Nakama", "Game monetization", "In-App Purchases", "Firebase", "Social integrations"],
  },
  {
    category: "Product Engineering",
    items: ["MVP development", "Software architecture", "Project management", "Technical ownership", "Product development", "Production delivery", "Cross-functional collaboration"],
  },
  {
    category: "3D / Simulation",
    items: ["Digital Twin", "3D visualization", "Simulation", "Architectural visualization", "Urban planning", "Oculus / VR", "WebGL"],
  },
];

export const technologySections: SkillCategory[] = [
  { category: "Languages", items: ["C#", "TypeScript", "Swift"] },
  { category: "Frameworks / Platforms", items: [".NET MVC", "React", "React Native", "Unity"] },
  { category: "Backend", items: [".NET MVC", "TypeScript", "APIs", "Server-side systems"] },
  { category: "Multiplayer", items: ["Photon", "Nakama"] },
  { category: "Platforms", items: ["iOS", "Android", "Web", "WebGL", "Oculus"] },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  years: string;
  summary?: string;
  points: string[];
};

export const experience: Experience[] = [
  {
    role: "Senior Software Engineer",
    company: "Eike Consulting",
    period: "September 2024 – Present",
    years: "2024 – Present",
    summary:
      "Building across a portfolio of products spanning Unity games, React Native, Swift, and .NET MVC web apps.",
    points: [
      "ReaderBee App — an educational mobile game for children (Unity and C#)",
      "Little Steps App (React Native and .NET MVC)",
      "Psymark — iPad app (Swift)",
      "Taher Menu System — web app (React and .NET MVC)",
      "Collaborating with cross-functional teams to take features through development, testing, and production release",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Cubix",
    period: "May 2022 – September 2024",
    years: "2022 – 2024",
    summary:
      "Contributed to a wide portfolio of mobile and multiplayer game titles, spanning Web3/NFT play-to-earn games, casino-style card and bingo games, and narrative/RPG mobile games.",
    points: [
      "Server-side development for multiplayer games and real-time gameplay systems (Unity C#)",
      "Implemented backend functionality and integrations supporting multiplayer experiences (Nakama and TypeScript)",
      "Contributed to Web3 and NFT integrations for game products",
      "Titles: Boss of the World, Domino Earning World, Lady Luck, HPL Bingo, Forest Fusion, Wagmi, Second World, Taunt Battle, Track9, Micropets, Dragon Zoom, Likeman, Time Forge, Bright Farm, Cloud of Venus, Hoops by Tissot, Space Pirates, Relentless, Finding Frez",
    ],
  },
  {
    role: "Lead Game Developer",
    company: "Binate Digital Pvt. Ltd",
    period: "February 2020 – May 2022",
    years: "2020 – 2022",
    points: [
      "Led development of multiple client-based multiplayer and single-player game projects",
      "Owned technical delivery across game development, gameplay systems, integrations, and production releases",
      "Collaborated with teams and stakeholders to drive projects from concept through completion",
    ],
  },
  {
    role: "Unity Developer",
    company: "The Location Lab Pvt. Ltd",
    period: "June 2019 – February 2020",
    years: "2019 – 2020",
    summary: "The Location Lab is a Digital Twin company based in Germany.",
    points: [
      "Developed 3D simulation and urban-planning projects for a Germany-based Digital Twin company",
      "Built immersive visualizations and simulations for Android, iOS, Oculus, Standalone, and WebGL",
      "Worked on interactive 3D experiences representing architectural and urban infrastructure",
      "Dent & Buckle — iPad app for recording aircraft structural defects on 3D aircraft models, first 3D simulation project",
    ],
  },
];

export type Project = {
  slug: string;
  name: string;
  type: "game" | "software";
  category: string;
  period: string;
  description: string;
  technologies?: string[];
  url?: string;
  image?: string;
  clientLogo?: { src: string; alt: string };
  caseStudy?: {
    overview: string;
    challenge?: string;
    role?: string;
    technicalApproach?: string;
    keyContributions?: string[];
    outcome?: string;
  };
};

export const projects: Project[] = [
  {
    slug: "taher-menu-system",
    type: "software",
    name: "Taher Menu System",
    category: "Web / Backend",
    period: "Eike Consulting",
    description:
      "A digital platform by Taher, Inc. that provides K-12 school, campus, and senior dining menus, nutritional data, and food allergy details. Users access daily food choices online or via the mobile application, while staff manage menu content through a secure admin portal. I was a full-stack developer on the project, building numerous features across the public-facing menu system and the staff admin portal.",
    technologies: ["React", ".NET MVC"],
    url: "https://taher.com/",
    clientLogo: { src: "/projects/site-screenshots/Taher.PNG", alt: "Taher, Inc." },
    caseStudy: {
      overview:
        "Taher Menu System is a digital menu-management platform for Taher, Inc., a large food-service company that supplies breakfast and lunch to schools and corporate clients across multiple districts in the US. It replaced a previous system that staff found messy and difficult to work with.",
      challenge:
        "Taher supplies food to a large number of schools and corporate clients across multiple districts, and previously managed menus on paper. An existing digital system was already in place but had become messy and hard for staff to use effectively, creating a need for a full revamp.",
      role:
        "A full-stack developer on the project team, building numerous features across both frontend and backend, including the admin portal workflows.",
      technicalApproach:
        "Built a role-based admin portal (Worker, Food Service Director, District Manager, etc.) supporting the full recipe-to-menu workflow — creating, verifying, and publishing Recipes, Ingredients, and Menus, with nutritional compliance calculated automatically. Ingredient data combines CNDB (USDA nutrition database) imports with manually entered items. Menus are assigned to specific schools/buildings, so each location sees only the menu built for it.",
      outcome:
        "In active use across multiple school districts in the US, replacing the client's previous system with a cleaner, role-based workflow for managing school and corporate dining menus.",
    },
  },
  {
    slug: "psymark",
    type: "software",
    name: "Psymark",
    category: "iPad App",
    period: "Eike Consulting",
    description:
      "Redefines progress monitoring with digital assessment tools for school psychologists, occupational therapists, and educators. I was the sole developer, building the iOS visual-motor assessment and scoring app in Swift.",
    technologies: ["Swift"],
    url: "https://www.psymark.ai/",
    image: "/projects/site-screenshots/psymark.jpg",
    caseStudy: {
      overview:
        "Psymark is an iPad-based visual-motor assessment tool used by occupational therapists, school psychologists, and educators. It replaces traditional paper-and-pencil visual-motor testing with a fully digital assessment and scoring workflow.",
      challenge:
        "Traditional visual-motor assessments are done on paper and scored by hand, which is time-consuming and leaves room for subjective, inconsistent scoring between evaluators.",
      role:
        "Sole developer on the project, building the iOS assessment and scoring app in Swift end-to-end.",
      technicalApproach:
        "Users complete the visual-motor assessment directly on the iPad using Apple Pencil or finger input, with the app capturing the drawn coordinates in real time. Those coordinates are sent to the backend, which reconstructs the drawing and compares it against the reference assessment image to generate an objective, standardized score.",
      outcome:
        "Psymark is an active product, purchased and used by clinics and schools through Psymark's own store.",
    },
  },
  {
    slug: "little-steps",
    type: "software",
    name: "Little Steps",
    category: "Mobile App",
    period: "Eike Consulting",
    description:
      "An app to inspire each other to take \"little steps today\" for the little joys in life. I was a Senior Full Stack developer on the project, building both the React Native mobile app and the .NET MVC backend.",
    technologies: ["React Native", ".NET MVC"],
    url: "https://littlesteps.today/",
    image: "/projects/site-screenshots/little-steps.jpg",
    caseStudy: {
      overview:
        "Little Steps is a mobile app that encourages users to notice and share small, everyday moments of joy — \"little things\" — and inspires each other to take small positive steps day to day.",
      challenge:
        "Encouraging a habit like daily reflection and gratitude is hard to sustain without a system that keeps people coming back and makes small, everyday moments feel worth sharing.",
      role:
        "Senior Full Stack developer on the project, building both the React Native mobile app and the .NET MVC backend.",
      technicalApproach:
        "Built a feed of \"little things\" organized into multiple categories (like Nature and Joy), with users able to browse others' posts, add their own, and write reflections on the ones that resonate with them — turning it into a small, regular habit in their day. To encourage consistency, the app includes a streak system where users reflect on a little thing each day to maintain their streak, along with a badge system that rewards ongoing engagement.",
      outcome:
        "Little Steps is still active and in use.",
    },
  },
  {
    slug: "readerbee",
    type: "game",
    name: "ReaderBee — Story Tree",
    category: "Mobile / Education / Game",
    period: "Eike Consulting",
    description:
      "An educational storytelling game for children combining interactive reading, playful activities, and engaging animations to support literacy development. I'm the sole developer, building the Unity story and word-game mechanics.",
    technologies: ["Unity", "C#", "TypeScript"],
    url: "https://readerbee.com/",
    image: "/projects/site-screenshots/readerbee.jpg",
    caseStudy: {
      overview:
        "ReaderBee is a story-based learn-to-read app for children, organized into seasons of illustrated stories paired with interactive word games to build phonics and reading skills.",
      challenge:
        "Traditional phonics and sight-word approaches to teaching reading can feel repetitive and disconnected from a child's interest, making it hard to keep young learners engaged long enough to build real reading skills.",
      role:
        "Sole developer on the project, building the interactive story and word-game mechanics in Unity.",
      technicalApproach:
        "Built story-driven activities in Unity where reading practice is woven directly into illustrated stories and word games rather than isolated drills, using a chunking-phonics approach instead of rote sight-word memorization. The system adapts activity difficulty to each child, aiming to stay challenging without becoming discouraging.",
      outcome:
        "ReaderBee is still actively developed and live on app stores today.",
    },
  },
  {
    slug: "bloomrate",
    type: "software",
    name: "BloomRate",
    category: "Mobile / Social",
    period: "Freelance",
    description:
      "A social app for sharing creativity and connecting without pressure, with posts organized into Thoughts, Videos, and Photos. I was the sole developer, building both the React Native app and the Node.js backend.",
    technologies: ["React Native", "Node.js"],
    url: "https://bloomrate.com/",
    image: "/projects/site-screenshots/BloomrateNew.PNG",
    caseStudy: {
      overview:
        "BloomRate is a social app built around sharing creativity and connecting in a low-pressure space, with a feed of posts across Thoughts, Videos, and Photos, and reactions and comments for engaging with others' posts.",
      challenge:
        "Many social platforms optimize for maximum engagement in ways that can feel high-pressure or performative; BloomRate's positioning is a calmer, more supportive space to share and connect.",
      role:
        "Sole developer on the project, building both the React Native mobile app and the backend, as a freelance engagement.",
      technicalApproach:
        "Built a social feed spanning multiple content types (Thoughts, Videos, Photos) with reactions, comments, and share/impression tracking on posts, backed by a custom Node.js API built alongside the app.",
      outcome:
        "Built in 2025, still active and live on app stores today.",
    },
  },
  {
    slug: "sticker-sync",
    type: "software",
    name: "Sticker Sync",
    category: "Mobile / Social",
    period: "Freelance",
    description:
      "An unofficial companion app for the mobile game Monopoly GO! that helps players trade and share in-game stickers, replacing scattered trading chats on platforms like Discord and Facebook with one organized feed. I was the sole developer, building both the React Native app and the Node.js backend.",
    technologies: ["React Native", "Node.js"],
    image: "/projects/site-screenshots/StickerSync.PNG",
    caseStudy: {
      overview:
        "Sticker Sync is an unofficial companion app for Monopoly GO! that helps players trade and share the in-game stickers used to complete albums, giving the trading community a dedicated space instead of general chat platforms.",
      challenge:
        "Monopoly GO! players trade stickers informally through Discord servers and Facebook groups, which get noisy and disorganized fast, making it hard to find a fair trade or track who still needs what.",
      role:
        "Sole developer on the project, building both the React Native mobile app and the Node.js backend, as a freelance engagement.",
      technicalApproach:
        "Built a token-based request system where players log the stickers they need and join a first-come, first-served queue, plus a gifting/sharing flow for giving away spare stickers. Consolidated trading into a single organized feed in place of scattered chat threads, with a community feed for players to connect and celebrate completed albums.",
      outcome:
        "Built in 2025; the app is not currently live.",
    },
  },
  {
    slug: "capicu",
    type: "game",
    name: "Capicú",
    category: "Mobile / Multiplayer",
    period: "Freelance",
    description:
      "A multiplayer domino game bringing the classic game to mobile with multiple rule variants, including Blocking, Capicú, and Nines. I was the sole developer, building the Unity/C# client and the real-time multiplayer backend on Nakama.",
    technologies: ["Unity", "C#", "Nakama", "TypeScript"],
    url: "https://capicu.games/",
    image: "/projects/site-screenshots/Capicu.PNG",
    caseStudy: {
      overview:
        "Capicú is a mobile domino game offering real-time multiplayer matches across multiple classic domino variants, built for both newcomers and experienced players.",
      challenge:
        "Domino is a game with several regionally popular rule variants, so the app needed to support real-time multiplayer across multiple distinct game modes rather than a single fixed ruleset.",
      role:
        "Sole developer on the project, building the Unity/C# client and the real-time multiplayer backend on Nakama, as a freelance engagement.",
      technicalApproach:
        "Built the game client in Unity and C#, with real-time multiplayer, matchmaking, and game-mode logic handled through a Nakama backend written in TypeScript, supporting multiple domino variants (Blocking, Capicú, and Nines) within one app.",
      outcome:
        "Built in 2025, live on both the App Store and Google Play.",
    },
  },
  {
    slug: "battlepillars",
    type: "game",
    name: "Battlepillars",
    category: "Mobile / Multiplayer / Strategy",
    period: "Freelance",
    description:
      "A real-time tug-of-war strategy game where players command customizable, weaponized caterpillar units against opponents, with both a single-player campaign and real-time online multiplayer. I worked on the project as a freelance developer using Unity and C#.",
    technologies: ["Unity", "C#"],
    image: "/projects/site-screenshots/battlePillar.jpg",
    caseStudy: {
      overview:
        "Battlepillars is a real-time strategy game built around tug-of-war style battles, where players build out and customize armed caterpillar units to push back an opposing army, across a single-player campaign and real-time multiplayer matches.",
      challenge:
        "Real-time tug-of-war strategy games need to feel responsive and readable in the moment, even with many customizable unit types and ongoing simultaneous battles happening on screen, while also supporting fair, low-latency online multiplayer matches.",
      role:
        "Freelance developer on the project, building in Unity and C#.",
      technicalApproach:
        "Built using Unity and C#, supporting a large roster of customizable unit types and both single-player campaign content and real-time online multiplayer matches.",
      outcome:
        "Built in 2025 and live.",
    },
  },
  {
    slug: "big-bluff-central-poker",
    type: "game",
    name: "Big Bluff Central Poker",
    category: "Multiplayer / Mobile",
    period: "Freelance",
    description:
      "A free mobile social card-gaming application designed for poker enthusiasts who enjoy playing with friends or poker groups.",
    technologies: ["Unity", "C#", "TypeScript"],
    image: "/projects/site-screenshots/BigBluff.jpg",
  },
  {
    slug: "boss-of-the-world",
    type: "game",
    name: "Boss of the World",
    category: "Mobile / Game",
    period: "Cubix",
    description:
      "A realistic all-star cheerleading mobile game focused on building a dream all-star gym, managing athletes, creating choreography, and producing music for performances.",
    technologies: ["Unity", "C#", "TypeScript"],
    url: "https://cheerbossoftheworld.com",
    image: "/projects/cubix/boss-of-the-world.webp",
  },
  {
    slug: "domino-earning-world",
    type: "game",
    name: "Domino Earning World / DEW",
    category: "Multiplayer / Web3",
    period: "Cubix",
    description:
      "A blockchain-based multiplayer domino game platform combining multiplayer gameplay with a global social/community experience.",
    technologies: ["Unity", "C#", "TypeScript"],
    url: "https://www.cubix.co/work/domino-earning-world/",
    image: "/projects/cubix/domino-earning-world.webp",
  },
  {
    slug: "lady-luck",
    type: "game",
    name: "Lady Luck",
    category: "Multiplayer / Card Game",
    period: "Cubix",
    description:
      "A competitive multiplayer card game featuring real-time matchmaking, quick duels, rewards, and engaging casino-style mobile gameplay.",
    technologies: ["Unity", "C#", "TypeScript"],
    url: "https://www.cubix.co/work/lady-luck-multiplayer-card-game-mobile-battles/",
    image: "/projects/cubix/lady-luck.webp",
  },
  {
    slug: "hpl-bingo",
    type: "game",
    name: "HPL Bingo",
    category: "Multiplayer / Web3",
    period: "Cubix",
    description:
      "A multiplayer bingo game combining strategic gameplay, competitive tournaments, and Web3 rewards for deeper player engagement.",
    technologies: ["Unity", "C#", "TypeScript"],
    url: "https://www.cubix.co/work/hpl-bingo-multiplayer-web3-game-by-cubix/",
    image: "/projects/cubix/hpl-bingo.webp",
  },
  {
    slug: "forest-fusion",
    type: "game",
    name: "Forest Fusion",
    category: "Mobile / Puzzle",
    period: "Cubix",
    description:
      "A Unity-powered merge-3 puzzle game where players restore an enchanted forest, unlock mystical creatures, and complete magical quests.",
    technologies: ["Unity", "C#", "TypeScript"],
    url: "https://www.cubix.co/work/unity-based-merge-3-puzzle-adventure-game/",
    image: "/projects/cubix/forest-fusion.webp",
  },
  {
    slug: "wagmi",
    type: "game",
    name: "Wagmi",
    category: "Multiplayer / Web3",
    period: "Cubix",
    description:
      "A multiplayer play-to-earn tower defense strategy game with in-game NFT assets.",
    technologies: ["Unity", "C#", "TypeScript"],
    url: "https://www.cubix.co/work/wagmi/",
    image: "/projects/cubix/wagmi.webp",
  },
  {
    slug: "second-world",
    type: "game",
    name: "Second World",
    category: "Mobile / Web3",
    period: "Cubix",
    description:
      "A 3D NFT-based city-building game with PvP strategy, sending players into a world of combat encounters.",
    technologies: ["Unity", "C#", "TypeScript"],
    url: "https://www.cubix.co/work/second-world-case-study/",
    image: "/projects/cubix/second-world.webp",
  },
  {
    slug: "taunt-battle",
    type: "game",
    name: "Taunt Battle",
    category: "Mobile / Web3",
    period: "Cubix",
    description:
      "An NFT-based strategic simulation game combining combat strategy with an engage-to-earn model.",
    technologies: ["Unity", "C#", "TypeScript"],
    url: "https://www.cubix.co/work/taunt-battle/",
    image: "/projects/cubix/taunt-battle.webp",
  },
  {
    slug: "track9",
    type: "game",
    name: "Track9",
    category: "Mobile / Web3",
    period: "Cubix",
    description:
      "A Unity-based play-to-earn dog racing game with crypto assets and competitive rewards.",
    technologies: ["Unity", "C#", "TypeScript"],
    url: "https://www.cubix.co/work/track9/",
    image: "/projects/cubix/track9.webp",
  },
  {
    slug: "micropets",
    type: "game",
    name: "Micropets",
    category: "Mobile / Web3",
    period: "Cubix",
    description:
      "A play-to-earn NFT game where players collect and engage with virtual pets, completing challenges to earn rewards.",
    technologies: ["Unity", "C#", "TypeScript"],
    url: "https://www.cubix.co/work/micro-pets/",
    image: "/projects/cubix/micropets.webp",
  },
  {
    slug: "dragon-zoom",
    type: "game",
    name: "Dragon Zoom",
    category: "Mobile / Game",
    period: "Cubix",
    description:
      "An Asian-inspired dragon game for iOS with interactive challenges and collectables.",
    technologies: ["Unity", "C#", "TypeScript"],
    url: "https://www.cubix.co/work/dragon-zoom/",
    image: "/projects/cubix/dragon-zoom.webp",
  },
  {
    slug: "likeman",
    type: "game",
    name: "Likeman",
    category: "Mobile / Game",
    period: "Cubix",
    description:
      "A Pacman-inspired maze game where players compete in maze-based levels while networking.",
    technologies: ["Unity", "C#", "TypeScript"],
    url: "https://www.cubix.co/work/likeman/",
    image: "/projects/cubix/likeman.webp",
  },
  {
    slug: "time-forge",
    type: "game",
    name: "Time Forge",
    category: "Mobile / Game",
    period: "Cubix",
    description:
      "An RPG-style shooting game built for strategy fans, featuring intense battles and rewards.",
    technologies: ["Unity", "C#", "TypeScript"],
    url: "https://www.cubix.co/work/time-forge/",
    image: "/projects/cubix/time-forge.webp",
  },
  {
    slug: "bright-farm",
    type: "game",
    name: "Bright Farm",
    category: "Mobile / Game",
    period: "Cubix",
    description:
      "A farm-adventure and mystery roleplay game where players solve a mystery while tending to their farm.",
    technologies: ["Unity", "C#", "TypeScript"],
    url: "https://www.cubix.co/work/bright-farm/",
    image: "/projects/cubix/bright-farm.webp",
  },
  {
    slug: "cloud-of-venus",
    type: "game",
    name: "Cloud of Venus",
    category: "Mobile / Game",
    period: "Cubix",
    description:
      "A space-exploration RPG built for strategy fans.",
    technologies: ["Unity", "C#", "TypeScript"],
    url: "https://www.cubix.co/work/cloud-of-venus/",
    image: "/projects/cubix/cloud-of-venus.webp",
  },
  {
    slug: "hoops-by-tissot",
    type: "software",
    name: "Hoops by Tissot",
    category: "Mobile / Sports",
    period: "Cubix",
    description:
      "A basketball skills and performance app built for Tissot, combining performance sports with branding collections.",
    url: "https://www.cubix.co/work/hoops-by-tissot/",
    image: "/projects/cubix/hoops-tissot.webp",
  },
  {
    slug: "space-pirates",
    type: "game",
    name: "Space Pirates",
    category: "Mobile / Game",
    period: "Cubix",
    description:
      "A space RPG adventure game built for strategy fans.",
    technologies: ["Unity", "C#", "TypeScript"],
    url: "https://www.cubix.co/work/space-pirates/",
    image: "/projects/cubix/space-pirates.webp",
  },
  {
    slug: "relentless",
    type: "game",
    name: "Relentless",
    category: "Mobile / Game",
    period: "Cubix",
    description:
      "An action-adventure game combining strategic gameplay with a compelling narrative for intense combat fans.",
    technologies: ["Unity", "C#", "TypeScript"],
    url: "https://www.cubix.co/work/relentless/",
    image: "/projects/cubix/relentless.webp",
  },
  {
    slug: "finding-frez",
    type: "game",
    name: "Finding Frez",
    category: "Mobile / Puzzle",
    period: "Cubix",
    description:
      "A puzzle-adventure game combining engaging gameplay with educational challenges.",
    technologies: ["Unity", "C#", "TypeScript"],
    url: "https://www.cubix.co/work/finding-frez/",
    image: "/projects/cubix/finding-frez.webp",
  },
  {
    slug: "dent-and-buckle",
    type: "software",
    name: "Dent & Buckle",
    category: "3D / Simulation / iPad App",
    period: "The Location Lab",
    description:
      "A digital defect management platform for the aviation industry. Replaces traditional 2D diagrams with interactive 3D aircraft models, letting maintenance teams record and track structural defects (dents, buckles) directly on-model from an iPad, with reporting built for lease returns and MRO workflows. This was my first 3D simulation project.",
    technologies: ["Unity", "C#", "3D Simulation"],
    image: "/projects/site-screenshots/dent-and-buckle.jpg",
    url: "https://dentandbuckle.com/",
    caseStudy: {
      overview:
        "Dent & Buckle is a defect management platform used by aviation maintenance and engineering teams to record and track structural defects on aircraft. Instead of marking damage on flat 2D diagrams, users work directly on interactive 3D aircraft models.",
      challenge:
        "Traditional structural defect tracking in aviation maintenance relies on 2D paper diagrams, making it slow to record damage accurately and hard to consolidate a clear picture of an aircraft's condition over time — particularly important for lease-return reporting and MRO handoffs.",
      role:
        "Built the 3D simulation and modeling layer of the iPad application as part of the team at The Location Lab, applying Unity-based 3D visualization to a real-world industrial use case for the first time.",
      technicalApproach:
        "Component-based 3D aircraft models built in Unity, rendered interactively on iPad, allowing defects to be logged at precise locations on the model rather than approximated on a flat diagram.",
      outcome:
        "The product is in active commercial use in the aviation industry, supporting fleets of 190+ aircraft for its largest customer, with coverage across 30+ aircraft types and 70+ variants.",
    },
  },
];

export const projectsDisclaimer =
  "The projects shown on the portfolio are selected examples of my work. They are not a complete list of every product or project I have contributed to.";

export type ProcessStep = {
  number: string;
  title: string;
  description: string;
};

export const howIWork: ProcessStep[] = [
  { number: "01", title: "Understand", description: "Understand the business, users, and problem." },
  { number: "02", title: "Define", description: "Define the MVP, features, architecture, and technical direction." },
  { number: "03", title: "Build", description: "Develop the product with maintainability and scalability in mind." },
  { number: "04", title: "Validate", description: "Test, iterate, and improve based on real usage." },
  { number: "05", title: "Launch", description: "Deploy the product and continue improving it after launch." },
];

export type Service = {
  title: string;
  description: string;
};

export const services: Service[] = [
  { title: "Product & MVP Development", description: "Turn an idea into a working, production-ready MVP." },
  { title: "Mobile Development", description: "Build iOS, Android, and cross-platform mobile applications." },
  { title: "Web Applications", description: "Build modern web applications and platforms." },
  { title: "Backend & API Development", description: "Design and build backend systems, APIs, integrations, and supporting infrastructure." },
  { title: "Game & Multiplayer Development", description: "Build Unity games, multiplayer systems, and real-time experiences." },
  { title: "3D & Simulation", description: "Develop interactive 3D visualization, simulation, and Digital Twin experiences." },
  { title: "Technical Product Development", description: "Help with architecture, technical decisions, and turning product requirements into scalable software." },
];
