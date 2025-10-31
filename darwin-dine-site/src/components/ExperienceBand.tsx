"use client";
import { FadeIn } from "@/components/Motion";

export default function ExperienceBand() {
  const stats = [
    { label: "Years in Darwin", value: "10+" },
    { label: "Local Suppliers", value: "25" },
    { label: "Cellar Wines", value: "180+" },
    { label: "Seats", value: "80" },
  ];
  return (
    <section className="py-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-white/10 bg-black/40 p-8 backdrop-blur">
          <div className="grid gap-6 md:grid-cols-4">
            {stats.map((s, i) => (
              <FadeIn
                key={s.label}
                delay={i * 0.05}
                className="text-center md:text-left"
              >
                <div className="text-3xl font-semibold text-white">
                  {s.value}
                </div>
                <div className="mt-1 text-sm text-zinc-400">{s.label}</div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

