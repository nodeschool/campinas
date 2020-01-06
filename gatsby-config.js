/* eslint-env node */
const path = require(`path`);
module.exports = {
  siteMetadata: {
    title: `NodeSchool Campinas`,
    description: `Website for NodeSchool Campinas.`,
  },
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `NodeSchool Campinas`,
        description: `Site do NodeSchool Campinas`,
        short_name: `nodeschool`,
        lang: `pt-BR`,
        start_url: `/`,
        background_color: `#629689`,
        theme_color: `#629689`,
        display: `minimal-ui`,
        icon: path.relative(
          __dirname,
          require.resolve(
            `./data/nodeschool-chapter-logo.svg`,
          ),
        ),
        localize: [
          {
            start_url: `/en/`,
            lang: `en`,
            description: `NodeSchool Campinas Site`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/data`,
      },
    },
    {
      resolve: `gatsby-plugin-sentry`,
      options: {
        dsn: process.env.SENTRY_DSN,
      },
    },
    {
      resolve: `gatsby-theme-nodeschool`,
      options: {
        title: `NodeSchool Campinas`,
        description: `Website do NodeSchool Campinas.`,
        defaultLanguage: `pt-BR`,
        twitter: `nodeschoolcps`,
        github: `nodeschool/campinas`,
        url: `https://nodeschool.io/campinas/`,
        slack: `https://nodeschoolcampinas.herokuapp.com`,
        meetupGroup: `Nodeschool-Campinas`,
        email: `nodeschoolcps@gmail.com`,
        mailchimpSubscribeUrl: `https://github.us4.list-manage.com/subscribe?u=d5e78294e4dbea6272c7a9cba&id=0b96f926a1`,
        credits: {
          logo: {
            name: `Kenneth Ormandy`,
            url: `https://kennethormandy.com/`,
          },
        },
      },
    },
  ].filter(Boolean),
};
