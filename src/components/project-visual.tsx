import Image from "next/image";

const GRADIENTS: Record<string, string> = {
  "taher-menu-system": "from-[#3d6b8f] via-[#1e3f5c] to-[#0a1621]",
  psymark: "from-[#6a86c9] via-[#3c4f82] to-[#141b31]",
  "little-steps": "from-[#e0a563] via-[#c97f4a] to-[#5c331a]",
  readerbee: "from-[#e08a63] via-[#d97757] to-[#8a4a34]",
  bloomrate: "from-[#d9b56a] via-[#8a6e2f] to-[#1a1712]",
  "sticker-sync": "from-[#5cb894] via-[#2f7a5c] to-[#0d1f18]",
  capicu: "from-[#4a6fa8] via-[#1f3a5c] to-[#0a1420]",
  battlepillars: "from-[#8ab35c] via-[#4e6b2e] to-[#151f0c]",
  "big-bluff-central-poker": "from-[#2f3742] via-[#1c2128] to-[#0b0c0e]",
  "boss-of-the-world": "from-[#e0b563] via-[#d98f57] to-[#7a3f2b]",
  "domino-earning-world": "from-[#3a4a4a] via-[#26312f] to-[#0f1513]",
  "lady-luck": "from-[#8a5c9e] via-[#4f2e63] to-[#180f1e]",
  "dent-and-buckle": "from-[#5c7c99] via-[#31485e] to-[#101a24]",
  "hpl-bingo": "from-[#c2529e] via-[#7a2f63] to-[#210f1b]",
  "forest-fusion": "from-[#5c9e6f] via-[#2f6339] to-[#0f2113]",
  wagmi: "from-[#4a6b8a] via-[#233d52] to-[#0a141c]",
  "second-world": "from-[#4fae72] via-[#2a6942] to-[#0c1f15]",
  "taunt-battle": "from-[#7a4f9e] via-[#452a63] to-[#150c1f]",
  track9: "from-[#e0844e] via-[#a3512a] to-[#301b0c]",
  micropets: "from-[#c257a8] via-[#7a2f63] to-[#210f1b]",
  "dragon-zoom": "from-[#e0a54e] via-[#a3712a] to-[#301f0c]",
  likeman: "from-[#4e6fe0] via-[#2a3ea3] to-[#0c1230]",
  "time-forge": "from-[#8a7757] via-[#4d4230] to-[#161310]",
  "bright-farm": "from-[#84b356] via-[#4a6b2e] to-[#151f0c]",
  "cloud-of-venus": "from-[#5c7ea3] via-[#2f425c] to-[#0f151f]",
  "hoops-tissot": "from-[#3a3a3a] via-[#1f1f1f] to-[#0a0a0a]",
  "space-pirates": "from-[#4e5be0] via-[#2a2fa3] to-[#0c0e30]",
  relentless: "from-[#c24545] via-[#7a2323] to-[#210c0c]",
  "finding-frez": "from-[#57a3a0] via-[#2f5c5a] to-[#0f1f1e]",
};

type ProjectVisualProps = {
  slug: string;
  name: string;
  image?: string;
};

export function ProjectVisual({ slug, name, image }: ProjectVisualProps) {
  if (image) {
    return (
      <div className="relative h-full min-h-[180px] w-full overflow-hidden rounded-xl bg-surface-raised">
        <Image
          src={image}
          alt={`${name} key art`}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover"
        />
      </div>
    );
  }

  const gradient = GRADIENTS[slug] ?? "from-[#2f3742] via-[#1c2128] to-[#0b0c0e]";
  const initials = name
    .split(/[\s—/]+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  return (
    <div
      className={`relative flex h-full min-h-[180px] w-full items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${gradient}`}
      aria-hidden="true"
    >
      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:22px_22px]" />
      <span className="font-display relative text-4xl font-semibold tracking-tight text-white/90">
        {initials}
      </span>
    </div>
  );
}
