"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X, UtensilsCrossed, Phone, CalendarDays } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/menu", label: "Menu" },
  { href: "/reservations", label: "Reservations" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) => {
    if (href === "/") return pathname === "/";
    return pathname.startsWith(href);
  };
  return (
    <header className="fixed inset-x-0 top-0 z-50 backdrop-blur supports-[backdrop-filter]:bg-black/50 bg-black/40 border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link
            href="/"
            className="flex items-center gap-2 font-semibold text-xl text-white"
          >
            <UtensilsCrossed className="h-5 w-5 text-emerald-500" />
            <span>Darwin Dine</span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            {navItems.map((item) => {
              const active = isActive(item.href);
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  className={`relative transition-colors ${
                    active ? "text-white" : "text-zinc-300 hover:text-white"
                  }`}
                >
                  <span>{item.label}</span>
                  <span
                    className={`absolute -bottom-2 left-0 h-[2px] w-full ${
                      active ? "bg-emerald-500" : "bg-transparent"
                    }`}
                  />
                </Link>
              );
            })}
            <Link
              href="/reservations"
              className="inline-flex items-center gap-2 rounded-full bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-500 transition-colors"
            >
              <CalendarDays className="h-4 w-4" /> Reserve
            </Link>
          </nav>
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center rounded-md p-2 text-zinc-200 hover:bg-white/5"
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-white/10 bg-black/60 backdrop-blur"
          >
            <div className="space-y-2 px-4 py-4">
              {navItems.map((item) => {
                const active = isActive(item.href);
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => setOpen(false)}
                    aria-current={active ? "page" : undefined}
                    className={`block rounded-md px-3 py-2 transition-colors ${
                      active
                        ? "text-white bg-white/10"
                        : "text-zinc-200 hover:bg-white/5"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
              <Link
                href="tel:+61-8-0000-0000"
                className="flex items-center gap-2 rounded-md px-3 py-2 bg-emerald-600 text-white hover:bg-emerald-500"
              >
                <Phone className="h-4 w-4" /> +61 8 0000 0000
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
