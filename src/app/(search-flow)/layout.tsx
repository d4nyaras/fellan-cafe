"use client";

import { usePathname } from "next/navigation";

export default function SearchFlowLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isSearchPage = pathname.startsWith("/search");

  return (
    <div className=" bg-primary flex flex-col border-2 border-b-red-400">
      {/* Search Bar Container */}
      <div
        className={`transition-all duration-500 ${
          isSearchPage
            ? "sticky top-0 bg-white shadow-sm"
            : "flex items-center justify-center flex-1"
        }`}
      >
        <div className="w-full max-w-2xl p-4">
          {/* Search input placeholder */}
          <input
            placeholder="Quiet cozy cafe for work…"
            className="w-full border rounded-lg px-4 py-3"
          />
        </div>
      </div>
      <div
        className="bg-red-300 text-foreground border-border"
        style={{ border: "3px solid red" }}
      >
        f;adfmd;f
      </div>

      {/* Results / Home Content */}
      <div className="flex-1">{children}</div>
    </div>
  );
}
