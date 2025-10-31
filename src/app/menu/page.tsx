"use client";
export const metadata = {
  title: "Menu",
  description:
    "Seasonal menu featuring Top End seafood, native produce, and wood-fired plates.",
  alternates: { canonical: "/menu" },
};
import Image from "next/image";
import { useState } from "react";
import { FadeIn, ScaleIn } from "@/components/Motion";

type MenuItem = {
  name: string;
  desc: string;
  price: string;
  category: string;
  image: string;
};

const menuItems: MenuItem[] = [
  {
    name: "Crocodile Karaage",
    desc: "Finger lime, chilli salt",
    price: "$18",
    category: "Small Plates",
    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Mud Crab Toast",
    desc: "Yuzu mayo, herbs",
    price: "$22",
    category: "Small Plates",
    image:
      "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Barramundi",
    desc: "Lemon myrtle butter",
    price: "$36",
    category: "From the Grill",
    image:
      "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Ribeye 300g",
    desc: "Wattleseed jus",
    price: "$48",
    category: "From the Grill",
    image:
      "https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Charred Broccolini",
    desc: "Garlic oil",
    price: "$12",
    category: "Sides",
    image:
      "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Green Mango Salad",
    desc: "Palm sugar, peanuts",
    price: "$11",
    category: "Sides",
    image:
      "https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Prawn Linguine",
    desc: "Chilli, garlic, lemon",
    price: "$28",
    category: "Pasta",
    image:
      "https://images.unsplash.com/photo-1525755662778-989d0524087e?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Pumpkin Gnocchi",
    desc: "Brown butter, sage",
    price: "$24",
    category: "Pasta",
    image:
      "https://images.unsplash.com/photo-1512058564366-18510be2db19?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Chef’s Tasting",
    desc: "Five-course seasonal menu",
    price: "$85",
    category: "Experience",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Tropical Pavlova",
    desc: "Mango, passionfruit",
    price: "$14",
    category: "Dessert",
    image:
      "https://images.unsplash.com/photo-1490324427892-6f23f28be8c5?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Dark Chocolate Tart",
    desc: "Kakadu plum",
    price: "$15",
    category: "Dessert",
    image:
      "https://images.unsplash.com/photo-1563805042-7684c019e1cb?q=80&w=1600&auto=format&fit=crop",
  },
  {
    name: "Top End Spritz",
    desc: "Finger lime, prosecco",
    price: "$16",
    category: "Cocktails",
    image:
      "https://images.unsplash.com/photo-1544145945-f90425340c7e?q=80&w=1600&auto=format&fit=crop",
  },
];

function MenuCard({ item }: { item: MenuItem }) {
  const [open, setOpen] = useState(false);
  return (
    <ScaleIn
      as="article"
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-black/40 backdrop-blur"
      aria-label={`${item.name} – ${item.price}`}
    >
      <button
        className="absolute inset-0 z-10"
        aria-expanded={open}
        aria-controls={`details-${item.name}`}
        onClick={() => setOpen((v) => !v)}
      >
        <span className="sr-only">Show details for {item.name}</span>
      </button>
      <div className="relative aspect-[4/3]">
        <Image
          src={item.image}
          alt={`${item.name} — ${item.desc}`}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width:768px) 100vw, (max-width:1200px) 50vw, 33vw"
        />
      </div>
      <div className="p-5">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="font-semibold text-white">{item.name}</h3>
            <p className="text-xs uppercase tracking-wide text-emerald-400/80 mt-1">
              {item.category}
            </p>
          </div>
          <div className="font-medium text-zinc-200 tabular-nums">
            {item.price}
          </div>
        </div>
      </div>
      <div
        id={`details-${item.name}`}
        className={`pointer-events-none absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-5 transition-opacity duration-300 ${
          open ? "opacity-100" : "opacity-0 group-hover:opacity-100"
        }`}
      >
        <div className="absolute bottom-5 left-5 right-5 text-sm text-zinc-200">
          {item.desc}
        </div>
      </div>
    </ScaleIn>
  );
}

export default function MenuPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold text-white">Menu</h1>
      <p className="mt-2 text-zinc-300">
        Seasonal selection — images represent style; availability may vary.
      </p>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {menuItems.map((item) => (
          <MenuCard key={item.name} item={item} />
        ))}
      </div>
    </div>
  );
}
