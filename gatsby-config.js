module.exports = {
  siteMetadata: {
    title: "나의 첫 개비지 사이트",
    siteUrl: `https://www.yourdomain.tld`,
    description: "description 입니다.",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: `blog`,
        path: `${__dirname}/blog`,
      },
    },
    "gatsby-plugin-mdx",
  ],
};
