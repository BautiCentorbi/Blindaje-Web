/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://blindaje.com.ar',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
    ],
  },
};
