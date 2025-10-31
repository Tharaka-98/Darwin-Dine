"use client";
import Image from "next/image";
import { FadeIn, ScaleIn } from "@/components/Motion";

const images = [
  {
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop",
    alt: "Signature dish plated artfully",
  },
  {
    src: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1600&auto=format&fit=crop",
    alt: "Fresh seafood selection",
  },
  {
    src: "https://images.unsplash.com/photo-1544025162-8f6f1f4d0498?q=80&w=1600&auto=format&fit=crop",
    alt: "Dessert close-up",
  },
  {
    src: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop",
    alt: "Dining room ambience",
  },
];

export default function Gallery() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="flex items-end justify-between">
        <h2 className="text-2xl md:text-3xl font-semibold text-white">
          Signature Dishes
        </h2>
        <p className="text-sm text-zinc-400">Crafted with Territory produce</p>
      </div>
      <div className="mt-8 grid gap-4 grid-cols-2 md:grid-cols-4">
        {images.map((img, i) => (
          <ScaleIn
            key={img.src}
            delay={i * 0.05}
            className="group relative overflow-hidden rounded-xl border border-white/10 bg-black/30"
          >
            <div className="relative aspect-[4/5]">
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width:768px) 50vw, 25vw"
              />
            </div>
            <div className="pointer-events-none absolute inset-x-0 bottom-0 p-3 text-xs text-zinc-200 bg-gradient-to-t from-black/60 to-transparent">
              {img.alt}
            </div>
          </ScaleIn>
        ))}
      </div>
    </section>
  );
}
