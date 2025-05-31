/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "node_modules/preline/dist/*.js"],
  theme: {
    fontFamily: {
      heading: ["Inter", "system-ui", "sans-serif"],
      body: ["Inter", "system-ui", "sans-serif"],
      mono: ["JetBrains Mono", "monospace"],
    },
    fontSize: {
      xs: "0.75rem",    // 12px
      sm: "0.875rem",   // 14px
      base: "1rem",     // 16px
      lg: "1.125rem",   // 18px
      xl: "1.25rem",    // 20px
      "2xl": "1.5rem",  // 24px
      "3xl": "2rem",    // 32px
      "4xl": "2.5rem",  // 40px
    },
    lineHeight: {
      tight: "1.2",
      base: "1.5",
      loose: "1.7",
    },
    fontWeight: {
      regular: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
    },
    colors: {
      primary: {
        100: "hsl(215, 100%, 98%)",
        200: "hsl(215, 100%, 95%)",
        500: "hsl(215, 90%, 50%)",
        600: "hsl(215, 90%, 40%)",
        700: "hsl(215, 90%, 30%)",
      },
      neutral: {
        100: "hsl(0, 0%, 98%)",
        200: "hsl(0, 0%, 93%)",
        300: "hsl(0, 0%, 87%)",
        500: "hsl(0, 0%, 60%)",
        700: "hsl(0, 0%, 40%)",
        900: "hsl(0, 0%, 20%)",
      },
      success: {
        500: "hsl(150, 80%, 40%)",
      },
      warning: {
        500: "hsl(45, 100%, 50%)",
      },
      error: {
        500: "hsl(0, 80%, 50%)",
      },
      info: {
        500: "hsl(200, 80%, 50%)",
      },
      // Added white and black for common use, though not explicitly in the palette as variables
      white: "#ffffff",
      black: "#000000",
      transparent: "transparent",
    },
    spacing: {
      "1": "0.25rem",  // 4px
      "2": "0.5rem",   // 8px
      "3": "0.75rem",  // 12px
      "4": "1rem",     // 16px
      "6": "1.5rem",   // 24px
      "8": "2rem",     // 32px
      "12": "3rem",    // 48px
      "16": "4rem",    // 64px
      "px": "1px",
      "0": "0",
      "auto": "auto",
    },
    borderRadius: {
      sm: "0.25rem",   // 4px
      DEFAULT: "0.375rem", // 6px (mapped 'base' to DEFAULT)
      lg: "0.5rem",    // 8px
      xl: "1rem",      // 16px
      full: "9999px", // Keep 'full' for rounded pills/buttons
    },
    boxShadow: {
      sm: "0 1px 2px rgba(0, 0, 0, 0.05)",
      DEFAULT: "0 1px 3px rgba(0, 0, 0, 0.1)", // mapped 'base' to DEFAULT
      lg: "0 4px 6px rgba(0, 0, 0, 0.1)",
      xl: "0 10px 15px rgba(0, 0, 0, 0.1)",
      none: "none", // Keep 'none'
    },
    height: {
      sm: "2rem",    // 32px
      DEFAULT: "2.5rem", // 40px (mapped 'base' to DEFAULT)
      lg: "3rem",    // 48px
    },
    screens: {
      xs: "320px", // Mobile from design doc (added 'xs' for it)
      sm: "640px",   // Small devices
      md: "768px",   // Medium devices / Tablet
      lg: "1024px",  // Large devices / Desktop
      xl: "1280px",  // Extra large devices
      "2xl": "1440px" // Wide from design doc (mapped to '2xl')
    },
    container: {
      padding: "1rem", // Default padding from $spacing-4
      center: true,    // Standard practice to center containers
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      }
    },
    extend: {
      ringColor: { DEFAULT: 'hsl(215, 90%, 50%, 0.5)' },
      ringWidth: { DEFAULT: '3px', '0': '0px', '1': '1px', '2': '2px', '4': '4px', '8': '8px' },
    },
  },
  plugins: [// require("preline/plugin")
  ],
};
