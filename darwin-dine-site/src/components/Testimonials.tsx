"use client";
import { FadeIn } from "@/components/Motion";

const quotes = [
  {
    quote: "A must-visit in Darwin—inventive plates and flawless execution.",
    author: "Broadsheet AU",
  },
  {
    quote: "Seafood that lets the Arafura Sea speak for itself.",
    author: "Good Food Guide",
  },
  {
    quote: "Warm service, stunning views, and a menu with real identity.",
    author: "NT Times",
  },
];

export default function Testimonials() {
  return (
    <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h2 className="text-2xl md:text-3xl font-semibold text-white">
        What People Say
      </h2>
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        {quotes.map((q, i) => (
          <FadeIn
            key={q.author}
            delay={i * 0.05}
            className="rounded-2xl border border-white/10 bg-black/40 p-6 backdrop-blur"
          >
            <p className="text-zinc-200">“{q.quote}”</p>
            <div className="mt-4 text-sm text-zinc-400">{q.author}</div>
          </FadeIn>
        ))}
      </div>
    </section>
  );
}
