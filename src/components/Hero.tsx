"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-black" />
        <div className="absolute inset-0 bg-[radial-gradient(800px_400px_at_20%_-100px,rgba(16,185,129,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(600px_300px_at_95%_-80px,rgba(251,191,36,0.10),transparent_60%)]" />
      </div>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 grid gap-10 md:grid-cols-2 items-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 1 }}
        >
          <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white">
            Taste the Top End
          </h1>
          <p className="mt-4 text-lg text-zinc-300 max-w-prose">
            Modern Australian dishes celebrating Darwin’s tropical flavours and
            local seafood.
          </p>
          <div className="mt-8 flex gap-4">
            <Link
              href="/reservations"
              className="inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 text-white hover:bg-emerald-500 transition-colors"
            >
              Book a table
            </Link>
            <Link
              href="/menu"
              className="inline-flex items-center rounded-full border border-white/15 px-6 py-3 text-white hover:bg-white/5 transition-colors"
            >
              View menu
            </Link>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.05 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="relative"
        >
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_0_1px_rgba(255,255,255,0.04)]">
            <Image
              src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1600&auto=format&fit=crop"
              alt="Chef plating seafood at Darwin Dine"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 640px"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 h-40 w-40 rounded-full bg-emerald-500/25 blur-3xl" />
          <div className="absolute -top-6 -right-6 h-40 w-40 rounded-full bg-amber-400/20 blur-3xl" />
        </motion.div>
      </div>
    </section>
  );
}
