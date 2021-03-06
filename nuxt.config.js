import redirectSSL from 'redirect-ssl'
export default {
  /*
   ** Nuxt rendering mode
   ** See https://nuxtjs.org/api/configuration-mode
   */
  mode: 'universal',
  /*
   ** Nuxt target
   ** See https://nuxtjs.org/api/configuration-target
   */
  target: 'server',
  /*
   ** Headers of the page
   ** See https://nuxtjs.org/api/configuration-head
   */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || '',
      },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      {
        rel: 'apple-touch-icon',
        type: 'image/png',
        href: '/png/apple-touch.png',
      },
      {
        rel: 'stylesheet',
        href:
          'https://fonts.googleapis.com/css2?family=Red+Hat+Display:wght@400;700&display=swap',
      },
    ],
  },
  /*
   ** Global CSS
   */
  css: [],
  /*
   ** Plugins to load before mounting the App
   ** https://nuxtjs.org/guide/plugins
   */
  plugins: [
    { src: '@/plugins/inline-svg.js' },
    { src: '@/plugins/vcalendar.js', ssr: false },
    { src: '@/plugins/vue-moment.js', ssr: false },
  ],
  /*
   ** Auto import components
   ** See https://nuxtjs.org/api/configuration-components
   */
  components: true,
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    [
      '@nuxtjs/color-mode',
      {
        classSuffix: '',
      },
    ],
    [
      '@nuxtjs/pwa',
      {
        manifest: {
          name: 'Minion',
          short_name: 'Minion',
          description:
            "Priority1 POS's key to staying organized and provided plenty of inside joke laughs.",
          theme_color: '#81e6d9',
        },
      },
    ],
    '@nuxtjs/tailwindcss',
  ],
  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    [
      '@nuxtjs/firebase',
      {
        config: {
          production: {
            apiKey: 'AIzaSyCPIawLPPiTOK-5Wzca8YLrkHzyljtuD-A',
            authDomain: 'minion-upload.firebaseapp.com',
            databaseURL: 'https://minion-upload.firebaseio.com',
            projectId: 'minion-upload',
            storageBucket: 'minion-upload.appspot.com',
            messagingSenderId: '797588958304',
            appId: '1:797588958304:web:1d5809dec4cbdf09c32705',
          },
          development: {
            apiKey: 'AIzaSyCPIawLPPiTOK-5Wzca8YLrkHzyljtuD-A',
            authDomain: 'minion-upload.firebaseapp.com',
            databaseURL: 'https://minion-upload.firebaseio.com',
            projectId: 'minion-upload',
            storageBucket: 'minion-upload-dev',
            messagingSenderId: '797588958304',
            appId: '1:797588958304:web:1d5809dec4cbdf09c32705',
          },
        },
        services: {
          storage: true,
        },
      },
    ],
  ],
  serverMiddleware: [
    redirectSSL.create({
      enabled: process.env.NODE_ENV === 'production',
    }),
  ],
  /*
   ** Build configuration
   ** See https://nuxtjs.org/api/configuration-build/
   */
  build: {},
}
