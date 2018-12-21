module.exports = {
  /*
  ** Headers of the page
  */
  head: {
    title: 'rejontaylor.com',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Personal site and portfolio' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  modules: [
    '@nuxtjs/pwa',
    ['nuxt-sass-resources-loader',
      [
        'assets/css/main.scss'
      ]
    ]
  ],
  css: [
    {src: '~/assets/fonts/Brother.css', lang: 'css'},
    {src: '~/assets/fonts/Gibson.css', lang: 'css'},
    {src: '~/assets/css/main.scss', lang: 'scss'},
    {src: 'font-awesome/scss/font-awesome.scss', lang: 'scss'}
    
  ],
  plugins: [
    {src: '~/plugins/mouse-parallax.js', ssr:false},
    {src: '~/plugins/anime.js', ssr: false}
  ],
  /*
  ** Customize the progress bar color
  */
  loading: { color: '#3B8070' },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** Run ESLint on save
    */
    extend (config, { isDev, isClient }) {
      if (isDev && isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/
        })
      }
    }
  }
}
