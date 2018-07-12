module.exports = {
  siteMetadata: {
    title: `Rejon Taylor-Foster - Developer, Designer, Mad Scientist`,
  },
  plugins: [`gatsby-plugin-react-helmet`,
            {
              resolve: `gatsby-source-contentful`,
              options: {
                spaceId: `w39cx88hlnge`,
                accessToken: `995dd687625505e9bdcbac5ce0ba3eb28b05fdf3dacae158e0ddc145ea2d8899`
              }
            }
          ],
}
