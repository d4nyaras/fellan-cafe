import "./globals.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cafe Finder",
  description: "Find your perfect work-friendly cafe",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
