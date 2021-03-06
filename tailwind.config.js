/*
 ** TailwindCSS Configuration File
 **
 ** Docs: https://tailwindcss.com/docs/configuration
 ** Default: https://github.com/tailwindcss/tailwindcss/blob/master/stubs/defaultConfig.stub.js
 */
module.exports = {
  experimental: {
    darkModeVariant: true,
  },
  dark: 'class',
  theme: {
    fontFamily: {
      sans: ['Red Hat Display', 'Helvetica', 'Arial', 'sans-serif'],
    },
    extend: {
      maxHeight: {
        '128': '32rem',
      },
      maxWidth: {
        '64': '16rem',
        '96': '24rem',
        '128': '32rem',
      },
      minWidth: {
        '64': '16rem',
        '96': '24rem',
      },
      spacing: {
        '-36': '-9rem;',
        '-34': '-8.5rem',
        '14': '3.5rem',
        '22': '5.5rem',
        '96': '24rem',
        '128': '32rem',
      },
    },
  },
  variants: {},
  plugins: [require('@tailwindcss/custom-forms')],
  purge: {
    // Learn more on https://tailwindcss.com/docs/controlling-file-size/#removing-unused-css
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'components/**/*.vue',
      'layouts/**/*.vue',
      'pages/**/*.vue',
      'plugins/**/*.js',
      'nuxt.config.js',
    ],
  },
}
