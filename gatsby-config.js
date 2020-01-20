require("dotenv").config({
  path: `.env`,
})

module.exports = {
  siteMetadata: {
    title: `Our Soul Agenda`,
    description: `Sharing life lessons to help you step into your power.`,
    author: `@itsobinna`,
  },
  plugins: [
    // GOOGLE ANALYTICS - make sure this is first
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-156587076-1",
        // this option places the tracking script into the head of the DOM
        head: true,
        // other options
      },
    },
    // Styled Components
    `gatsby-plugin-styled-components`,
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
    {
      resolve: `gatsby-source-youtube-v2`,
      options: {
        channelId: ["UC14DDaQZouxfsTxHhXxF0sg"], // https://www.youtube.com/channel/UC14DDaQZouxfsTxHhXxF0sg
        apiKey: process.env.YOUTUBE_API_KEY, // HIDE this
        maxVideos: 10, // Defaults to 50
      },
    },
    // WEB FONT LOADER 
    {
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        google: {
          families: ['Lalezar']
        }
      }
    },
    // TAWK TO
    {
      resolve: `gatsby-plugin-tawk`,
      options: {
        tawkId: "5e24ba228e78b86ed8aa11f4",
        // get this from the tawk script widget
      },
    },

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
