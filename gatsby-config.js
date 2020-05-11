module.exports = {
  siteMetadata: {
    title: `gjhblog`,
    siteUrl: `https://gjhblog.netlify.app`,
    description: `A Gatsby starter for nehalem`,
    topics: [],
    menu: [
      {
        name: 'Home',
        path: '/'
      },
      {
        name: 'Example',
        path: '/page'
      },
      {
        name: '메뉴1',
        path: '/page'
      },
      {
        name: '메뉴2',
        path: '/page'
      },
    ],
    footerMenu: [
      {
        name: 'Example',
        path: '/page'
      },
    ],
    search: true,
    author: {
      name: `GJH`,
      description: `초보 웹 개발자`,
      social: {
        facebook: ``,
        twitter: ``,
        linkedin: ``,
        instagram: ``,
        youtube: ``,
        github: `https://github.com/nehalist`,
        twitch: ``
      }
    }
  },
  plugins: [
    {
      resolve: `@nehalist/gatsby-theme-nehalem`,
      options: {
        manifest: {
          name: `nehalem - A Gatsby theme`,
          short_name: `nehalem`,
          start_url: `/`,
          background_color: `#a4cbb8`,
          theme_color: `#a4cbb8`,
          display: `minimal-ui`,
          icon: `${__dirname}/content/assets/images/logo.png`
        }
      }
    }
  ],
  pathPrefix: "/gjhun"
};
