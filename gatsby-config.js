module.exports = {
  siteMetadata: {
    title: `Blog`,
    siteUrl: `https://gjhblog.netlify.app`,
    description: ``,
    topics: [],
    menu: [
      {
        name: 'Home',
        path: '/'
      },
      {
        name: 'Post',
        path: '/page'
      },
      {
        name: 'Java',
        path: '/page'
      },
      {
        name: 'Vue',
        path: '/page'
      },
      {
        name: 'Javascript',
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
