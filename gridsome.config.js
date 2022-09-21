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
    }
  ]
}
