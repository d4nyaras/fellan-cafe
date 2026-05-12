import type { ReactNode } from "react";

export default function SearchFlowLayout({ children }: { children: ReactNode }) {
  return (
    <div className="relative h-dvh w-dvw">
      <div className="absolute inset-0 bg-[url('/bg.webp')] bg-cover bg-center" />
      <div className="absolute inset-0 bg-black/35 backdrop-blur-md" />
      <div className="relative z-10 h-full w-full">{children}</div>
    </div>
  );
}
