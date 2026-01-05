/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#000000",
        secondary: "#111111",
        accent: "#22C55E",
        highlight: "#10b981",
        // v11.0 頂級代理商配色
        elite: {
          dark: "#020617",      // 深邃黑
          darker: "#0a0f1a",    // 極深藍黑
          green: "#10b981",     // Bicome 綠（霓虹）
          greenGlow: "rgba(16, 185, 129, 0.3)",
          gold: "#f59e0b",      // 高光金
          pink: "#ff0092",      // 霓虹粉（CTA）
          glass: "rgba(255, 255, 255, 0.05)",
          glassBorder: "rgba(255, 255, 255, 0.1)",
        },
        signature: {
          indigo: "#020617",
          aurora: "#10b981",
          insight: "#f59e0b",
          glass: "rgba(255, 255, 255, 0.03)"
        },
      },
      fontFamily: {
        sans: ['Inter', '"Noto Sans TC"', 'system-ui', 'sans-serif'],
        serif: ['"Noto Serif TC"', 'Georgia', 'serif'],
        display: ['"Manrope"', 'Inter', '"Noto Sans TC"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      animation: {
        'glow-pulse': 'glow-pulse 4s ease-in-out infinite',
        'float-slow': 'float-slow 8s ease-in-out infinite',
        'scan-line': 'scan-line 10s linear infinite',
        'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
        'shimmer': 'shimmer 2s linear infinite',
      },
      keyframes: {
        'glow-pulse': {
          '0%, 100%': { opacity: '0.3', transform: 'scale(1)' },
          '50%': { opacity: '0.6', transform: 'scale(1.1)' },
        },
        'float-slow': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'scan-line': {
          '0%': { transform: 'translateY(-100%)' },
          '100%': { transform: 'translateY(100vh)' },
        },
        'pulse-glow': {
          '0%, 100%': { boxShadow: '0 0 20px rgba(16, 185, 129, 0.3)' },
          '50%': { boxShadow: '0 0 40px rgba(16, 185, 129, 0.6)' },
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
      },
      boxShadow: {
        'glow-green': '0 0 60px rgba(16, 185, 129, 0.3)',
        'glow-green-lg': '0 0 100px rgba(16, 185, 129, 0.4)',
        'glass': '0 8px 32px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}