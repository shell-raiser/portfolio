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
      use: 'gridsome-plugin-robots'
    },
    {
      use: "gridsome-plugin-manifest",
      options: {
        background_color: "#000000",
        icon_path: "./src/assets/Shell.svg",
        name: "Shell Raiser's portfolio",
        short_name: "Shell Raiser",
        theme_color: "#FFFFFF",
        lang: "en",
      }
    }
    // {
    //   use: 'gridsome-plugin-umami',
    //   options: {
    //     srcUrl: 'https://portfolio-umami.herokuapp.com/umami.js',
    //     dataWebsiteId: 'ab441312-87a9-4f44-a8cc-676757c0ee8c'
    //   }
    // }
  ]
}
