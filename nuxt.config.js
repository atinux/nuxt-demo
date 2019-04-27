export default {
  head: {
    link: [
      { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/kognise/water.css@latest/dist/dark.css' }
    ]
  },
  plugins: [
    '~/plugins/vue-multiselect.js'
  ],
  modules: [
    '@nuxtjs/pwa',
  ]
}
