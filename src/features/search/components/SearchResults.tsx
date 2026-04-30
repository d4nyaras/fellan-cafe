"use client";

import { motion } from "framer-motion";
import { ResultCard } from "./ResultCard";

interface SearchResultsProps {
  query: string;
}

export function SearchResults({ query }: SearchResultsProps) {
  const fakeResults = [
    {
      title: "Aramis Café",
      description:
        "Cozy atmosphere, great for laptop work, stable internet connection.",
      location: "Tehran, Valiasr Street",
      mood: "Quiet work spot",
      match: "94% match",
    },
    {
      title: "Workspace Café",
      description: "A hybrid coworking–café space with large tables.",
      location: "Tehran, Vanak",
      mood: "Laptop friendly",
      match: "89% match",
    },
    {
      title: "Brew & Focus",
      description: "Minimalist design, calm vibe, plenty of power outlets.",
      location: "Tehran, Jordan",
      mood: "Deep work zone",
      match: "92% match",
    },
    {
      title: "Café Nova",
      description: "Bright interior, comfortable seating, fast Wi‑Fi.",
      location: "Tehran, Enghelab",
      mood: "Study friendly",
      match: "87% match",
    },
    {
      title: "Urban Grind",
      description: "Industrial-style café with quiet corners for work.",
      location: "Tehran, Shariati",
      mood: "Work & chill",
      match: "90% match",
    },
    {
      title: "Calm Corner Café",
      description: "Soft music, warm lighting, stable internet.",
      location: "Tehran, Sa'adat Abad",
      mood: "Relaxed productivity",
      match: "93% match",
    },
  ];

  return (
    <motion.section
      className="mx-auto mt-6 max-w-4xl pb-10 text-foreground"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
    >
      <div className="flex flex-col gap-4 max-h-[600px] overflow-auto">
        {fakeResults.map((item, index) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.06, duration: 0.3 }}
          >
            <ResultCard {...item} />
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
