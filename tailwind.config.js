module.exports = {
  content: ["index.html"],
  theme: {
    extend: {
      colors: {
        'grad-start': 'var(--grad-start)',
        'grad-end': 'var(--grad-end)',
        'pale-blue': 'var(--pale-blue)',
        'grayish-blue': 'var(--grayish-blue)',
        'dark-blue': 'var(--dark-blue)',
        'very-dark-blue': 'var(--very-dark-blue)'
      },

      fontFamily: {
        'raleway': ['Raleway, sans-serif']
      },

      backgroundImage: {
        'mobile': "url('/images/bg-mobile.png')",
        'desktop': "url('/images/bg-desktop.png')",
      }
    },
  },
  plugins: [],
}
