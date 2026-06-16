module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        primary: '#06b6d4',
        accent: '#3b82f6'
      },
      backgroundImage: {
        'radial-pattern': 'radial-gradient( circle at 20% 20%, rgba(124,58,237,0.08), transparent 20% ), radial-gradient( circle at 80% 80%, rgba(14,165,164,0.06), transparent 20% )'
      }
    }
  },
  plugins: []
}
