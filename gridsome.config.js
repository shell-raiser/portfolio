// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  icon: './src/assets/Shell.svg',
  siteName: 'Shailesh\'s Portfolio',
  siteUrl: 'https://shell-raiser.github.io',
  plugins: [
    {
      use: '@gridsome/plugin-sitemap',
    },
    {
      use: 'gridsome-plugin-seo'
    },
    {
      use: 'gridsome-plugin-umami',
      options: {
        srcUrl: 'https://portfolio-umami.herokuapp.com',
        dataWebsiteId: '694c58f0-e55d-4242-9d6e-9b93944d5e2e'
      }
    }
  ]
}
