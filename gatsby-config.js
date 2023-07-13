/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Paper and Pain`,
    description: `Scaling and growing your business sustainably using open source technology.`,
    siteUrl: `https://paperandpain.com`,
    image: `/favicon.png`
  },
  plugins: [
    `gatsby-plugin-sass`,
  ]
}
