const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://www.healingintherapy.com',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV,
} = process.env;

const isProduction = NETLIFY_ENV === 'production';

const siteUrl = isProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;

module.exports = {
  siteMetadata: {
    siteUrl,

    author: 'Kayla Mach',
    description:
      'Kayla Mach (MFC93339) is a Licensed Marriage and Family Therapist seving Orange County since 2010. Kayla is a graduate of Antioch University with a Master’s Degree in Clinical Psychology.',
    title: 'Healing in Therapy',

    social: [
      {
        id: 'facebook',
        name: 'Facebook',
        url: 'https://www.facebook.com/KaylaMachLMFT',
      },
      {
        id: 'linkedin',
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/kaylamach',
      },
    ],
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'images',
        path: `${__dirname}/src/images`,
      },
    },
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        sassOptions: {
          includePaths: [`${__dirname}/src/style`],
        },
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'healing-in-therapy',
        short_name: 'healing',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'standalone',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', disallow: ['/'] }],
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
  ],
};
