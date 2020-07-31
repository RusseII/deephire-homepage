module.exports = {
  siteMetadata: {
    title: `DeepHire`,
    description: `Simple Video Interviews for Recruiting.`,
    author: `DeepHire`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: 'gatsby-plugin-antd',
      options: {
        style: true
      }
    },
    {
      resolve: "gatsby-plugin-less",
      options: {
        lessOptions: {
          javascriptEnabled: true,
          // modifyVars: lessToJson('src/theme/vars.less'),
          // modifyVars: {
          // 'primary-color': '#1DA57A'
          // }
        }
      }
    },
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/ 
        }
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-plugin-crisp-chat',
      options: {
        websiteId: '75eeec48-f14c-4ebf-aa7b-c70b538b63f4',
      },
    },
    {
      resolve: `gatsby-plugin-fullstory`,
      options: {
        fs_org: 'FDMJN',
      },
    },
      {
        resolve: `gatsby-plugin-google-analytics`,
        options: {
          trackingId: "UA-103192788-2",
        }
      },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `DeepHire Video Interviews`,
        short_name: `DeepHire`,
        start_url: `/`,
        background_color: `#1890ff`,
        theme_color: `#1890ff`,
        display: `minimal-ui`,
        icon: `src/images/deephire-logo.svg`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
