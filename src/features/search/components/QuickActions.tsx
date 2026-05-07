"use client";

import { FiBookOpen, FiCoffee } from "react-icons/fi";
import { LuCroissant } from "react-icons/lu";
import { useSearchNavigation } from "../hooks/useSearchNavigation";

const SUGGESTIONS = [
  { label: "Quiet study café", icon: <FiBookOpen className="text-lg" /> },
  {
    label: "Cozy place with pastries",
    icon: <LuCroissant className="text-lg" />,
  },
  { label: "Cheap brunch café", icon: <FiCoffee className="text-lg" /> },
];

export function QuickActions() {
  const { goToSearch } = useSearchNavigation();

  return (
    <div className="mt-6 flex flex-wrap justify-center gap-3">
      {SUGGESTIONS.map((item) => (
        <button
          key={item.label}
          onClick={() => goToSearch(item.label)}
          className="flex items-center gap-2 rounded-2xl border border-border/60 bg-surface/70 px-5 py-2 text-sm font-medium text-muted shadow-sm transition hover:bg-surface/90"
        >
          {item.icon}
          {item.label}
        </button>
      ))}
    </div>
  );
}
