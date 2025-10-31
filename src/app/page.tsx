"use client";
import Hero from "@/components/Hero";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import MasonryGallery from "@/components/MasonryGallery";
import ExperienceBand from "@/components/ExperienceBand";
import ParallaxSection from "@/components/ParallaxSection";
import HorizontalParallax from "@/components/HorizontalParallax";
import StorySection from "@/components/StorySection";

export default function Page() {
  return (
    <>
      <Hero />
      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Sea to Plate",
              desc: "Daily local catches from the Arafura Sea, handled with care.",
              image:
                "https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=1200&auto=format&fit=crop",
            },
            {
              title: "Territory Produce",
              desc: "Native ingredients and tropical fruits with bold flavours.",
              image:
                "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1200&auto=format&fit=crop",
            },
            {
              title: "Open Fire Cooking",
              desc: "Smoke-kissed plates inspired by Top End campfire traditions.",
              image:
                "https://images.unsplash.com/photo-1456406644174-8ddd4cd52a06?q=80&w=1200&auto=format&fit=crop",
            },
          ].map((c, i) => (
            <motion.article
              key={c.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.05 }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur shadow-[0_0_0_1px_rgba(255,255,255,0.04)]"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={c.image}
                  alt={c.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-lg text-white">{c.title}</h3>
                <p className="mt-2 text-sm text-zinc-300">{c.desc}</p>
              </div>
            </motion.article>
          ))}
        </div>
        <div className="mt-12 flex justify-center">
          <Link
            href="/reservations"
            className="inline-flex items-center rounded-full bg-emerald-600 px-6 py-3 text-white hover:bg-emerald-500 transition-colors"
          >
            Reserve your table
          </Link>
        </div>
      </section>

      <Gallery />
      <ParallaxSection />
      <HorizontalParallax />
      <StorySection />
      <MasonryGallery />
      <ExperienceBand />
      <Testimonials />

      <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-20">
        <div className="grid gap-6 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur p-6"
          >
            <h3 className="text-xl font-semibold">Waterfront views</h3>
            <p className="mt-2 text-zinc-300">
              Enjoy sunsets over the Timor Sea from our dining room and terrace.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.5, delay: 0.05 }}
            className="rounded-2xl border border-white/10 bg-black/40 backdrop-blur p-6"
          >
            <h3 className="text-xl font-semibold">Group bookings</h3>
            <p className="mt-2 text-zinc-300">
              Celebrate in our private dining space for 10–30 guests with set
              menus.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
