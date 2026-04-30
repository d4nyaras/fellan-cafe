const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],

  theme: {
    extend: {
      colors: {
        /* Backgrounds */
        background: "var(--color-bg)",
        "background-muted": "var(--color-bg-muted)",

        /* Text */
        foreground: "var(--color-fg)",
        "foreground-muted": "var(--color-fg-muted)",

        /* Border */
        border: "var(--color-border)",

        /* Brand */
        primary: "var(--color-primary)",
        "primary-content": "var(--color-primary-content)",

        /* Feedback */
        success: "var(--color-success)",
        warning: "var(--color-warning)",
        error: "var(--color-error)",
        info: "var(--color-info)",
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
      //
      //       transitionDuration: {
      //         fast: "var(--transition-fast)",
      //         medium: "var(--transition-medium)",
      //         slow: "var(--transition-slow)",
      //       },
    },
  },
};

export default config;
