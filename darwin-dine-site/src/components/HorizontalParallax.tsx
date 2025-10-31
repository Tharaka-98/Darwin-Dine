"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const row1 = [
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1561758033-d89a9ad46330?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544025162-8f6f1f4d0498?q=80&w=1600&auto=format&fit=crop",
];

const row2 = [
  "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?q=80&w=1600&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1514517182625-1331f3b6e1e5?q=80&w=1600&auto=format&fit=crop",
];

export default function HorizontalParallax() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  // Different horizontal speeds per row
  const x1 = useTransform(scrollYProgress, [0, 1], ["0%", "-20%"]);
  const x2 = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section ref={ref} className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <div className="rounded-3xl border border-white/10 bg-black/40 p-4 md:p-6 backdrop-blur overflow-hidden">
        <h2 className="px-2 md:px-3 text-2xl md:text-3xl font-semibold text-white">
          In Motion
        </h2>
        <p className="px-2 md:px-3 mt-1 text-sm text-zinc-400">
          A glimpse across bar, kitchen and floor
        </p>

        <div className="mt-6 space-y-6">
          <motion.div
            style={{ x: x1 }}
            className="flex gap-4 will-change-transform"
          >
            {[...row1, ...row1].map((src, i) => (
              <div
                key={`r1-${i}`}
                className="relative h-40 w-64 md:h-52 md:w-80 shrink-0 overflow-hidden rounded-xl border border-white/10"
              >
                <Image
                  src={src}
                  alt="Restaurant imagery"
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 60vw, 33vw"
                />
              </div>
            ))}
          </motion.div>

          <motion.div
            style={{ x: x2 }}
            className="flex gap-4 will-change-transform"
          >
            {[...row2, ...row2].map((src, i) => (
              <div
                key={`r2-${i}`}
                className="relative h-40 w-64 md:h-52 md:w-80 shrink-0 overflow-hidden rounded-xl border border-white/10"
              >
                <Image
                  src={src}
                  alt="Restaurant imagery"
                  fill
                  className="object-cover"
                  sizes="(max-width:768px) 60vw, 33vw"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
