module.exports = {
  siteMetadata: {
    title: 'My First Gatsby Site',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: 'gatsby-plugin-mailchimp',
      options: {
        endpoint: 'https://pryce.us18.list-manage.com/subscribe/post?u=316cc15c61866999c6fdf609f&amp;id=b94198e394', // see instructions section below
      },
    }
  ],
}