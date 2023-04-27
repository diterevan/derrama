/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `derrama`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: [{
    resolve: 'gatsby-source-contentful',
    options: {
      "accessToken": "q3RQXSW-7kiMNBVHyh-wNOegKbPRWAuSb9Nnf2f578U",
      "spaceId": "6iikf86hdaof"
    }
  }, 'gatsby-plugin-postcss', "gatsby-plugin-image", "gatsby-plugin-sharp", "gatsby-transformer-sharp"]
};
