"use client";
export const metadata = {
  title: "Reservations",
  description: "Book a table online for up to 10 guests at Darwin Dine.",
  alternates: { canonical: "/reservations" },
};
import { useState } from "react";

export default function ReservationsPage() {
  const [status, setStatus] = useState<string | null>(null);

  async function onSubmit(formData: FormData) {
    setStatus("Submitting...");
    await new Promise((r) => setTimeout(r, 600));
    setStatus("Thanks! We will confirm shortly.");
  }

  return (
    <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-semibold">Reservations</h1>
      <p className="mt-2 text-neutral-500 dark:text-neutral-800">
        We accept online bookings for up to 10 guests.
      </p>
      <form action={onSubmit} className="mt-8 grid gap-4">
        <div className="grid gap-2">
          <label className="text-sm">Name</label>
          <input
            required
            name="name"
            className="rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2"
          />
        </div>
        <div className="grid gap-2">
          <label className="text-sm">Email</label>
          <input
            required
            type="email"
            name="email"
            className="rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2"
          />
        </div>
        <div className="grid gap-2 md:grid-cols-3">
          <div className="grid gap-2">
            <label className="text-sm">Date</label>
            <input
              required
              type="date"
              name="date"
              className="rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm">Time</label>
            <input
              required
              type="time"
              name="time"
              className="rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2"
            />
          </div>
          <div className="grid gap-2">
            <label className="text-sm">Guests</label>
            <input
              required
              type="number"
              min={1}
              max={20}
              defaultValue={2}
              name="guests"
              className="rounded-md border border-neutral-300 dark:border-neutral-700 bg-transparent px-3 py-2"
            />
          </div>
        </div>
        <button className="mt-2 inline-flex items-center justify-center rounded-md bg-emerald-600 px-4 py-2 text-white hover:bg-emerald-700">
          Request booking
        </button>
        {status && (
          <p className="text-sm text-neutral-600 dark:text-neutral-400">
            {status}
          </p>
        )}
      </form>
    </div>
  );
}
