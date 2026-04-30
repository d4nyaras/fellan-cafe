import type { ReactNode } from "react";

export default function SearchFlowLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <div className="relative h-dvh w-dvw overflow-hidden">
      <div
        aria-hidden="true"
        className="absolute inset-0 scale-105 bg-[url('/bg.webp')] bg-cover bg-center blur-bg brightness-[var(--image-brightness)]"
      />
      <div aria-hidden="true" className="absolute inset-0 bg-overlay/20" />
      <div className="relative z-10 h-full w-full overflow-hidden">
        {children}
      </div>
    </div>
  );
}
