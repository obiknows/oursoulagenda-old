module.exports = {
  siteMetadata: {
    title: `Our Soul Agenda`,
    description: `Sharing life lessons to help you step into your power.`,
    author: `@itsobinna`,
  },
  plugins: [
    // Transformer Sharp
    `gatsby-transformer-sharp`,
    // React Helmet
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    // Sharp Plugin
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/our-soul-favicon.png`, // This path is relative to the root of the site.
      },
    },
    // Youtube Gatsby Plugin
    // {
    //   resolve: `gatsby-source-youtube`,
    //   options: {
    //     channelId: "UC14DDaQZouxfsTxHhXxF0sg", // https://www.youtube.com/channel/UC14DDaQZouxfsTxHhXxF0sg
    //     apiKey: process.env.YOUTUBE_API_KEY,
    //     maxVideos: 10, // Defaults to 50
    //   },
    // },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
