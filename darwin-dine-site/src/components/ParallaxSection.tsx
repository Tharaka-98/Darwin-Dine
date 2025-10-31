"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function ParallaxSection() {
  const ref = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const yBack = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);
  const yMid = useTransform(scrollYProgress, [0, 1], ["-5%", "5%"]);
  const yFront = useTransform(scrollYProgress, [0, 1], ["0%", "-6%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 1], [1, 1, 0.95]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24">
        <div className="relative h-[60vh] min-h-[440px] rounded-3xl border border-white/10 bg-black/40 overflow-hidden">
          <motion.div
            style={{ y: yBack, opacity }}
            className="absolute inset-0 -z-20"
          >
            <Image
              src="https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=2000&auto=format&fit=crop"
              alt="Dining room ambience"
              fill
              className="object-cover"
              sizes="100vw"
              priority={false}
            />
          </motion.div>
          <motion.div
            style={{ y: yMid }}
            className="absolute left-6 top-6 hidden md:block -z-10"
          >
            <div className="h-40 w-40 rounded-full bg-emerald-500/20 blur-3xl" />
          </motion.div>
          <motion.div
            style={{ y: yFront }}
            className="relative z-10 h-full grid place-items-center text-center px-6"
          >
            <div>
              <h2 className="text-3xl md:text-4xl font-semibold text-white">
                Dining, Elevated
              </h2>
              <p className="mt-3 text-zinc-300 max-w-2xl mx-auto">
                Ambient views, seasonal flavours and warm service—experience
                Darwin’s coastal energy in motion.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

