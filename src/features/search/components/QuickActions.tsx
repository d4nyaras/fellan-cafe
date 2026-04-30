"use client";

import { useSearchNavigation } from "../hooks/useSearchNavigation";
import { FiBookOpen, FiCoffee } from "react-icons/fi";
import { LuCroissant } from "react-icons/lu";

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
    <div className="mt-6 flex flex-wrap gap-3 justify-center">
      {SUGGESTIONS.map((item) => (
        <button
          key={item.label}
          onClick={() => goToSearch(item.label)}
          className="
            flex items-center gap-2
            px-5 py-2
            rounded-2xl
            bg-surface/70
            text-muted
            text-sm font-medium
            border border-border/60
            shadow-sm
            hover:bg-surface/90
            transition
          "
        >
          {item.icon}
          {item.label}
        </button>
      ))}
    </div>
  );
}
