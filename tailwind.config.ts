/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Bicome Brand Tokens
        brand: {
          ink: "#020617",        // 深邃墨藍（主背景）
          inkSoft: "#0a1f1a",    // 墨藍帶綠（段落漸層）
          emerald: "#10b981",    // Bicome 綠（主強調）
          teal: "#14b8a6",       // 輔助藍綠
          gold: "#f59e0b",       // 高光金（次要強調）
          pink: "#ff0092",       // 霓虹粉（特殊 CTA，使用節制）
        },
      },
      fontFamily: {
        sans: ['Inter', '"Noto Sans TC"', 'system-ui', 'sans-serif'],
        display: ['"Manrope"', 'Inter', '"Noto Sans TC"', 'system-ui', 'sans-serif'],
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