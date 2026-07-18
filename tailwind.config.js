// tailwind.config.js
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cyber: {
          bg: '#05050a',
          panel: '#0d0d1a',
          cyan: '#00f0ff',
          magenta: '#ff0055',
          yellow: '#ffea00',
        }
      },
      boxShadow: {
        'neon-cyan': '0 0 5px rgba(0, 240, 255, 0.5), 0 0 20px rgba(0, 240, 255, 0.2)',
        'neon-magenta': '0 0 5px rgba(255, 0, 85, 0.5), 0 0 20px rgba(255, 0, 85, 0.2)',
      },
      dropShadow: {
        'txt-cyan': '0 0 8px rgba(0, 240, 255, 0.8)',
        'txt-magenta': '0 0 8px rgba(255, 0, 85, 0.8)',
      }
    },
  },
  plugins: [],
}