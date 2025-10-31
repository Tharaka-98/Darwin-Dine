"use client";
import Image from "next/image";
import { FadeIn } from "@/components/Motion";

const masonryImages = [
  {
    src: "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1600&auto=format&fit=crop",
    alt: "Grilled prawns",
  },
  {
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1600&auto=format&fit=crop",
    alt: "Restaurant interior",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop",
    alt: "Cocktail at the bar",
  },
  {
    src: "https://images.unsplash.com/photo-1544025162-8f6f1f4d0498?q=80&w=1600&auto=format&fit=crop",
    alt: "Dessert plating",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop",
    alt: "Mixologist at work",
  },
  {
    src: "https://images.unsplash.com/photo-1604908177223-6e4b3a5e2b07?q=80&w=1600&auto=format&fit=crop",
    alt: "Lamb rack",
  },
  {
    src: "https://images.unsplash.com/photo-1514517182625-1331f3b6e1e5?q=80&w=1600&auto=format&fit=crop",
    alt: "Dining ambience",
  },
  {
    src: "https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=1600&auto=format&fit=crop",
    alt: "Chef plating",
  },
  {
    src: "https://images.unsplash.com/photo-1466637574441-749b8f19452f?q=80&w=1600&auto=format&fit=crop",
    alt: "Oysters and prawns",
  },
  {
    src: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1600&auto=format&fit=crop",
    alt: "Pizza from the oven",
  },
];

export default function MasonryGallery() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Inside The Experience
        </h2>
        <p className="text-sm text-zinc-400">
          Scenes from the pass and the floor
        </p>
      </div>
      <div className="mt-8 [column-fill:_balance] columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4">
        {masonryImages.map((img, i) => (
          <FadeIn
            key={img.src}
            delay={i * 0.03}
            className="mb-4 break-inside-avoid"
          >
            <div className="relative w-full overflow-hidden rounded-xl border border-white/10">
              <Image
                src={img.src}
                alt={img.alt}
                width={1200}
                height={1600}
                className="h-auto w-full object-cover transition-transform duration-500 hover:scale-[1.02]"
                sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 25vw"
              />
            </div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
