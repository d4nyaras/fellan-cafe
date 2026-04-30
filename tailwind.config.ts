import type { Config } from "tailwindcss";

const color = (name: string) => `rgb(var(${name}) / <alpha-value>)`;

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        background: color("--color-bg"),
        surface: color("--color-surface"),
        foreground: color("--color-text"),
        muted: color("--color-muted"),
        border: color("--color-border"),
        primary: color("--color-primary"),
        "primary-hover": color("--color-primary-hover"),
        "primary-text": color("--color-primary-text"),
        overlay: color("--color-overlay"),
      },
      borderRadius: {
        sm: "var(--radius-sm)",
        base: "var(--radius-base)",
        lg: "var(--radius-lg)",
        xl: "var(--radius-xl)",
        full: "var(--radius-full)",
      },
      boxShadow: {
        sm: "var(--shadow-sm)",
        md: "var(--shadow-md)",
        lg: "var(--shadow-lg)",
      },
      blur: {
        bg: "var(--blur-bg)",
      },
      backdropBlur: {
        glass: "var(--blur-glass)",
      },
      fontSize: {
        xs: "var(--font-size-xs)",
        sm: "var(--font-size-sm)",
        base: "var(--font-size-base)",
        lg: "var(--font-size-lg)",
        xl: "var(--font-size-xl)",
        "2xl": "var(--font-size-2xl)",
        "3xl": "var(--font-size-3xl)",
      },
      spacing: {
        1: "var(--space-1)",
        2: "var(--space-2)",
        3: "var(--space-3)",
        4: "var(--space-4)",
        5: "var(--space-5)",
        6: "var(--space-6)",
      },
      transitionDuration: {
        fast: "var(--transition-fast)",
        medium: "var(--transition-medium)",
        slow: "var(--transition-slow)",
      },
    },
  },
};

export default config;
