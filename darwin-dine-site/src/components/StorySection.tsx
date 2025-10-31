"use client";
import { FadeIn } from "@/components/Motion";
import Link from "next/link";

export default function StorySection() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
      <div className="rounded-3xl border border-white/10 bg-black/40 p-8 md:p-12 backdrop-blur">
        <div className="grid gap-8 md:grid-cols-12 items-center">
          <FadeIn delay={0} className="md:col-span-7">
            <h2 className="text-3xl md:text-4xl font-semibold text-white">
              Our Kitchen Story
            </h2>
            <p className="mt-4 text-zinc-300 max-w-prose">
              We celebrate Darwin’s coastal energy with produce from Territory
              fishers and growers. The grill is our heartbeat—seafood, native
              herbs and smoke-kissed flavour, paired with a cellar that favours
              Australian makers.
            </p>
          </FadeIn>
          <FadeIn delay={0.05} className="md:col-span-5">
            <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
              <ul className="space-y-3 text-zinc-300 text-sm">
                <li>• Seasonal menu, responsibly sourced</li>
                <li>• Local spirits and a smart wine list</li>
                <li>• Waterfront sunsets and warm service</li>
              </ul>
              <div className="mt-6">
                <Link
                  href="/reservations"
                  className="inline-flex items-center rounded-full bg-emerald-600 px-5 py-2.5 text-white hover:bg-emerald-500 transition-colors"
                >
                  Reserve a table
                </Link>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
