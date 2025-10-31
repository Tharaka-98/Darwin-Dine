import { MapPin, Clock, Phone, Instagram, Facebook } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <h3 className="font-semibold text-lg text-white">Darwin Dine</h3>
          <p className="mt-2 text-sm text-zinc-400">
            Coastal-inspired cuisine with Territory produce in the heart of
            Darwin.
          </p>
        </div>
        <div>
          <h4 className="font-medium text-white">Visit</h4>
          <ul className="mt-2 space-y-2 text-sm text-zinc-300">
            <li className="flex items-center gap-2">
              <MapPin className="h-4 w-4" /> 12 Esplanade, Darwin City, NT
            </li>
            <li className="flex items-center gap-2">
              <Clock className="h-4 w-4" /> Tue–Sun: 12pm–10pm
            </li>
            <li className="flex items-center gap-2">
              <Phone className="h-4 w-4" /> +61 8 0000 0000
            </li>
          </ul>
        </div>
        <div>
          <h4 className="font-medium text-white">Follow</h4>
          <div className="mt-2 flex items-center gap-3">
            <Link
              href="#"
              aria-label="Instagram"
              className="inline-flex items-center justify-center rounded-md border border-white/10 p-2 hover:bg-white/5"
            >
              <Instagram className="h-4 w-4" />
            </Link>
            <Link
              href="#"
              aria-label="Facebook"
              className="inline-flex items-center justify-center rounded-md border border-white/10 p-2 hover:bg-white/5"
            >
              <Facebook className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
      <div className="py-6 text-center text-xs text-zinc-500">
        © {new Date().getFullYear()} Darwin Dine. All rights reserved.
      </div>
    </footer>
  );
}
