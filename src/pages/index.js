import React from 'react';
import Link from 'gatsby-link';
import SubscribeEmail from '../components/subscribe-email';

const IndexPage = () => (
  <div>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <Link to="/page-2/">Go to page 2</Link>
    <p>Mailchimp Key: {process.env.MAILCHIMP_API_KEY}</p>
    <SubscribeEmail />
  </div>
)

export default IndexPage